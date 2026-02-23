-- Social + Campaign foundations for friends, blocks, invites, notifications, and campaign membership.

-- ---------- Social ----------
create table if not exists public.friend_requests (
  id uuid primary key default gen_random_uuid(),
  requester_user_id uuid not null references auth.users(id) on delete cascade,
  target_user_id uuid not null references auth.users(id) on delete cascade,
  status text not null default 'pending' check (status in ('pending','accepted','declined','cancelled')),
  created_at timestamptz not null default now(),
  unique (requester_user_id, target_user_id, status)
);

create table if not exists public.friendships (
  id uuid primary key default gen_random_uuid(),
  user_a uuid not null references auth.users(id) on delete cascade,
  user_b uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  check (user_a < user_b),
  unique (user_a, user_b)
);

create table if not exists public.blocked_users (
  id uuid primary key default gen_random_uuid(),
  blocker_user_id uuid not null references auth.users(id) on delete cascade,
  blocked_user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (blocker_user_id, blocked_user_id)
);

-- ---------- Campaigns ----------
create table if not exists public.campaigns (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  gm_user_id uuid not null references auth.users(id) on delete cascade,
  max_players integer not null default 6,
  status text not null default 'active' check (status in ('active','archived')),
  created_at timestamptz not null default now()
);

create table if not exists public.campaign_members (
  id uuid primary key default gen_random_uuid(),
  campaign_id uuid not null references public.campaigns(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('gm','player')),
  joined_at timestamptz not null default now(),
  unique (campaign_id, user_id)
);

create table if not exists public.campaign_invites (
  id uuid primary key default gen_random_uuid(),
  campaign_id uuid not null references public.campaigns(id) on delete cascade,
  inviter_user_id uuid not null references auth.users(id) on delete cascade,
  invitee_user_id uuid not null references auth.users(id) on delete cascade,
  status text not null default 'pending' check (status in ('pending','accepted','declined','cancelled')),
  created_at timestamptz not null default now()
);

create table if not exists public.campaign_character_assignments (
  id uuid primary key default gen_random_uuid(),
  campaign_id uuid not null references public.campaigns(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  character_id uuid not null references public.webrunning_characters(id) on delete cascade,
  assigned_at timestamptz not null default now(),
  unique (campaign_id, character_id)
);

create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  type text not null check (type in ('friend_request','campaign_invite','system')),
  status text not null default 'pending' check (status in ('pending','accepted','rejected','seen')),
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

-- ---------- Indexes ----------
create index if not exists idx_friend_requests_target_pending on public.friend_requests(target_user_id, status);
create index if not exists idx_friendships_user_a on public.friendships(user_a);
create index if not exists idx_friendships_user_b on public.friendships(user_b);
create index if not exists idx_blocked_users_blocker on public.blocked_users(blocker_user_id);

create index if not exists idx_campaigns_gm_user_id on public.campaigns(gm_user_id);
create index if not exists idx_campaign_members_user_id on public.campaign_members(user_id);
create index if not exists idx_campaign_invites_invitee_status on public.campaign_invites(invitee_user_id, status);
create index if not exists idx_campaign_character_assignments_campaign_user on public.campaign_character_assignments(campaign_id, user_id);

create unique index if not exists idx_campaign_invites_pending_unique
  on public.campaign_invites(campaign_id, invitee_user_id)
  where status = 'pending';

create index if not exists idx_notifications_user_status on public.notifications(user_id, status);

-- ---------- RLS + policies requested ----------
alter table public.webrunning_characters enable row level security;
alter table public.webrunning_character_gear enable row level security;
alter table public.webrunning_gear enable row level security;

-- keep/refresh owner policies for characters
DROP POLICY IF EXISTS webrunning_characters_owner_select ON public.webrunning_characters;
DROP POLICY IF EXISTS webrunning_characters_owner_update ON public.webrunning_characters;
DROP POLICY IF EXISTS webrunning_characters_owner_delete ON public.webrunning_characters;
DROP POLICY IF EXISTS webrunning_characters_owner_insert ON public.webrunning_characters;

create policy webrunning_characters_owner_select
  on public.webrunning_characters
  for select
  using (user_id = auth.uid());

create policy webrunning_characters_owner_update
  on public.webrunning_characters
  for update
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

create policy webrunning_characters_owner_delete
  on public.webrunning_characters
  for delete
  using (user_id = auth.uid());

create policy webrunning_characters_owner_insert
  on public.webrunning_characters
  for insert
  with check (user_id = auth.uid());

-- GM read-only policy for characters assigned inside campaigns they GM
DROP POLICY IF EXISTS webrunning_characters_gm_read_assigned ON public.webrunning_characters;
create policy webrunning_characters_gm_read_assigned
  on public.webrunning_characters
  for select
  using (
    exists (
      select 1
      from public.campaign_character_assignments cca
      join public.campaign_members cm
        on cm.campaign_id = cca.campaign_id
      where cca.character_id = webrunning_characters.id
        and cm.user_id = auth.uid()
        and cm.role = 'gm'
    )
  );

-- Owner policies for character->gear links
DROP POLICY IF EXISTS webrunning_character_gear_owner_all ON public.webrunning_character_gear;
create policy webrunning_character_gear_owner_all
  on public.webrunning_character_gear
  for all
  using (
    exists (
      select 1
      from public.webrunning_characters wc
      where wc.id = webrunning_character_gear.character_id
        and wc.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.webrunning_characters wc
      where wc.id = webrunning_character_gear.character_id
        and wc.user_id = auth.uid()
    )
  );

-- GM read-only for character->gear links via assigned campaign character
DROP POLICY IF EXISTS webrunning_character_gear_gm_read_assigned ON public.webrunning_character_gear;
create policy webrunning_character_gear_gm_read_assigned
  on public.webrunning_character_gear
  for select
  using (
    exists (
      select 1
      from public.campaign_character_assignments cca
      join public.campaign_members cm
        on cm.campaign_id = cca.campaign_id
      where cca.character_id = webrunning_character_gear.character_id
        and cm.user_id = auth.uid()
        and cm.role = 'gm'
    )
  );

-- Owner policies for direct gear table access
DROP POLICY IF EXISTS webrunning_gear_owner_all ON public.webrunning_gear;
create policy webrunning_gear_owner_all
  on public.webrunning_gear
  for all
  using (
    exists (
      select 1
      from public.webrunning_character_gear wcg
      join public.webrunning_characters wc
        on wc.id = wcg.character_id
      where wcg.gear_id = webrunning_gear.id
        and wc.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.webrunning_character_gear wcg
      join public.webrunning_characters wc
        on wc.id = wcg.character_id
      where wcg.gear_id = webrunning_gear.id
        and wc.user_id = auth.uid()
    )
  );

-- GM read-only for gear table through assigned campaign characters
DROP POLICY IF EXISTS webrunning_gear_gm_read_assigned ON public.webrunning_gear;
create policy webrunning_gear_gm_read_assigned
  on public.webrunning_gear
  for select
  using (
    exists (
      select 1
      from public.webrunning_character_gear wcg
      join public.campaign_character_assignments cca
        on cca.character_id = wcg.character_id
      join public.campaign_members cm
        on cm.campaign_id = cca.campaign_id
      where wcg.gear_id = webrunning_gear.id
        and cm.user_id = auth.uid()
        and cm.role = 'gm'
    )
  );

-- Suggested verification cases:
-- 1) Owner user: can select/update/delete own webrunning_characters + gear.
-- 2) GM user: can select assigned player character + gear, but not update/delete.
-- 3) Unrelated user: cannot select player character or gear.
