-- Fixes infinite-recursion RLS failures on campaign tables.
--
-- Why this works:
-- Policies now rely on SECURITY DEFINER helper functions for membership/GM checks,
-- so campaign_members policies no longer recursively evaluate themselves.

alter table public.campaigns enable row level security;
alter table public.campaign_members enable row level security;
alter table public.campaign_invites enable row level security;
alter table public.campaign_character_assignments enable row level security;

-- Drop known legacy policy names so this script is idempotent across environments.
DROP POLICY IF EXISTS campaigns_select_member_or_gm ON public.campaigns;
DROP POLICY IF EXISTS campaigns_insert_self_as_gm ON public.campaigns;
DROP POLICY IF EXISTS campaigns_update_gm_only ON public.campaigns;
DROP POLICY IF EXISTS campaigns_delete_gm_only ON public.campaigns;

DROP POLICY IF EXISTS campaign_members_select_own_or_same_campaign ON public.campaign_members;
DROP POLICY IF EXISTS campaign_members_insert_gm_controls_or_self_gm ON public.campaign_members;
DROP POLICY IF EXISTS campaign_members_update_gm_only ON public.campaign_members;
DROP POLICY IF EXISTS campaign_members_delete_gm_or_self ON public.campaign_members;

DROP POLICY IF EXISTS campaign_invites_select_participants ON public.campaign_invites;
DROP POLICY IF EXISTS campaign_invites_insert_gm_only ON public.campaign_invites;
DROP POLICY IF EXISTS campaign_invites_update_invitee_or_inviter ON public.campaign_invites;
DROP POLICY IF EXISTS campaign_invites_delete_inviter_or_gm ON public.campaign_invites;

DROP POLICY IF EXISTS campaign_character_assignments_select_participant ON public.campaign_character_assignments;
DROP POLICY IF EXISTS campaign_character_assignments_insert_gm_only ON public.campaign_character_assignments;
DROP POLICY IF EXISTS campaign_character_assignments_update_gm_only ON public.campaign_character_assignments;
DROP POLICY IF EXISTS campaign_character_assignments_delete_gm_only ON public.campaign_character_assignments;

create or replace function public.is_campaign_member(check_campaign_id uuid, check_user_id uuid default auth.uid())
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.campaign_members cm
    where cm.campaign_id = check_campaign_id
      and cm.user_id = check_user_id
  );
$$;

create or replace function public.is_campaign_owner(check_campaign_id uuid, check_user_id uuid default auth.uid())
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.campaigns c
    where c.id = check_campaign_id
      and c.gm_user_id = check_user_id
  );
$$;

create or replace function public.is_campaign_gm(check_campaign_id uuid, check_user_id uuid default auth.uid())
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select public.is_campaign_owner(check_campaign_id, check_user_id)
      or exists (
        select 1
        from public.campaign_members cm
        where cm.campaign_id = check_campaign_id
          and cm.user_id = check_user_id
          and cm.role = 'gm'
      );
$$;

-- campaigns policies
DROP POLICY IF EXISTS campaigns_select_member ON public.campaigns;
DROP POLICY IF EXISTS campaigns_insert_gm ON public.campaigns;
DROP POLICY IF EXISTS campaigns_update_gm ON public.campaigns;
DROP POLICY IF EXISTS campaigns_delete_gm ON public.campaigns;

create policy campaigns_select_member
  on public.campaigns
  for select
  using (
    gm_user_id = auth.uid()
    or public.is_campaign_member(id, auth.uid())
  );

create policy campaigns_insert_gm
  on public.campaigns
  for insert
  with check (gm_user_id = auth.uid());

create policy campaigns_update_gm
  on public.campaigns
  for update
  using (gm_user_id = auth.uid())
  with check (gm_user_id = auth.uid());

create policy campaigns_delete_gm
  on public.campaigns
  for delete
  using (gm_user_id = auth.uid());

-- campaign_members policies (recursion-safe)
DROP POLICY IF EXISTS campaign_members_select_self_or_gm ON public.campaign_members;
DROP POLICY IF EXISTS campaign_members_insert_gm_or_invited_player ON public.campaign_members;
DROP POLICY IF EXISTS campaign_members_update_gm ON public.campaign_members;
DROP POLICY IF EXISTS campaign_members_delete_gm_or_self ON public.campaign_members;

create policy campaign_members_select_self_or_gm
  on public.campaign_members
  for select
  using (
    user_id = auth.uid()
    or public.is_campaign_owner(campaign_id, auth.uid())
  );

create policy campaign_members_insert_gm_or_invited_player
  on public.campaign_members
  for insert
  with check (
    (
      user_id = auth.uid()
      and role = 'gm'
      and public.is_campaign_owner(campaign_id, auth.uid())
    )
    or (
      public.is_campaign_owner(campaign_id, auth.uid())
      and role = 'player'
    )
    or (
      user_id = auth.uid()
      and role = 'player'
      and exists (
        select 1
        from public.campaign_invites ci
        where ci.campaign_id = campaign_members.campaign_id
          and ci.invitee_user_id = auth.uid()
          and ci.status in ('pending', 'accepted')
      )
    )
  );

create policy campaign_members_update_gm
  on public.campaign_members
  for update
  using (public.is_campaign_owner(campaign_id, auth.uid()))
  with check (public.is_campaign_owner(campaign_id, auth.uid()));

create policy campaign_members_delete_gm_or_self
  on public.campaign_members
  for delete
  using (
    public.is_campaign_owner(campaign_id, auth.uid())
    or user_id = auth.uid()
  );

-- campaign_invites policies
DROP POLICY IF EXISTS campaign_invites_select_participant ON public.campaign_invites;
DROP POLICY IF EXISTS campaign_invites_insert_gm ON public.campaign_invites;
DROP POLICY IF EXISTS campaign_invites_update_participant ON public.campaign_invites;
DROP POLICY IF EXISTS campaign_invites_delete_gm ON public.campaign_invites;

create policy campaign_invites_select_participant
  on public.campaign_invites
  for select
  using (
    invitee_user_id = auth.uid()
    or inviter_user_id = auth.uid()
    or public.is_campaign_owner(campaign_id, auth.uid())
  );

create policy campaign_invites_insert_gm
  on public.campaign_invites
  for insert
  with check (
    inviter_user_id = auth.uid()
    and public.is_campaign_owner(campaign_id, auth.uid())
  );

create policy campaign_invites_update_participant
  on public.campaign_invites
  for update
  using (
    invitee_user_id = auth.uid()
    or inviter_user_id = auth.uid()
    or public.is_campaign_owner(campaign_id, auth.uid())
  )
  with check (
    invitee_user_id = auth.uid()
    or inviter_user_id = auth.uid()
    or public.is_campaign_owner(campaign_id, auth.uid())
  );

create policy campaign_invites_delete_gm
  on public.campaign_invites
  for delete
  using (public.is_campaign_gm(campaign_id, auth.uid()));

-- character assignment policies
DROP POLICY IF EXISTS campaign_character_assignments_select_campaign_member ON public.campaign_character_assignments;
DROP POLICY IF EXISTS campaign_character_assignments_insert_owner ON public.campaign_character_assignments;
DROP POLICY IF EXISTS campaign_character_assignments_update_owner ON public.campaign_character_assignments;
DROP POLICY IF EXISTS campaign_character_assignments_delete_owner_or_gm ON public.campaign_character_assignments;

create policy campaign_character_assignments_select_campaign_member
  on public.campaign_character_assignments
  for select
  using (public.is_campaign_member(campaign_id, auth.uid()));

create policy campaign_character_assignments_insert_owner
  on public.campaign_character_assignments
  for insert
  with check (
    user_id = auth.uid()
    and public.is_campaign_member(campaign_id, auth.uid())
  );

create policy campaign_character_assignments_update_owner
  on public.campaign_character_assignments
  for update
  using (user_id = auth.uid())
  with check (
    user_id = auth.uid()
    and public.is_campaign_member(campaign_id, auth.uid())
  );

create policy campaign_character_assignments_delete_owner_or_gm
  on public.campaign_character_assignments
  for delete
  using (
    user_id = auth.uid()
    or public.is_campaign_owner(campaign_id, auth.uid())
  );
