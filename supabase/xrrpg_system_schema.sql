-- XRRPG character/campaign schema updates.
-- Adds xrrpg character + history tables and enforces campaign system compatibility.

create table if not exists public.xrrpg_characters (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  system text not null default 'xrrpg' check (system = 'xrrpg'),
  class_progression jsonb not null default '[]'::jsonb,
  base_stats jsonb not null default '{}'::jsonb,
  skills jsonb not null default '[]'::jsonb,
  notes text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.xrrpg_history (
  id uuid primary key default gen_random_uuid(),
  character_id uuid not null references public.xrrpg_characters(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  event_type text not null,
  event_label text not null,
  event_payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_xrrpg_characters_user on public.xrrpg_characters(user_id, created_at);
create index if not exists idx_xrrpg_history_character on public.xrrpg_history(character_id, created_at desc);

alter table public.campaigns
  add column if not exists system text not null default 'webrunning' check (system in ('webrunning', 'xrrpg'));

alter table public.campaign_invites
  add column if not exists required_character_system text not null default 'webrunning' check (required_character_system in ('webrunning', 'xrrpg'));

-- migrate legacy assignment shape to dual-system shape
alter table public.campaign_character_assignments
  add column if not exists character_system text,
  add column if not exists webrunning_character_id uuid references public.webrunning_characters(id) on delete cascade,
  add column if not exists xrrpg_character_id uuid references public.xrrpg_characters(id) on delete cascade;

update public.campaign_character_assignments
set character_system = 'webrunning'
where character_system is null;

update public.campaign_character_assignments
set webrunning_character_id = coalesce(webrunning_character_id, character_id)
where character_system = 'webrunning';

alter table public.campaign_character_assignments
  alter column character_system set default 'webrunning';

alter table public.campaign_character_assignments
  alter column character_system set not null;

alter table public.campaign_character_assignments
  drop constraint if exists campaign_character_assignments_character_system_ck;
alter table public.campaign_character_assignments
  add constraint campaign_character_assignments_character_system_ck
  check (character_system in ('webrunning', 'xrrpg'));

alter table public.campaign_character_assignments
  drop constraint if exists campaign_character_assignments_character_id_system_ck;
alter table public.campaign_character_assignments
  add constraint campaign_character_assignments_character_id_system_ck
  check (
    (character_system = 'webrunning' and webrunning_character_id is not null and xrrpg_character_id is null)
    or
    (character_system = 'xrrpg' and xrrpg_character_id is not null and webrunning_character_id is null)
  );

create unique index if not exists idx_campaign_assignment_webrunning_unique
  on public.campaign_character_assignments(campaign_id, webrunning_character_id)
  where webrunning_character_id is not null;

create unique index if not exists idx_campaign_assignment_xrrpg_unique
  on public.campaign_character_assignments(campaign_id, xrrpg_character_id)
  where xrrpg_character_id is not null;

create or replace function public.enforce_campaign_assignment_system_match()
returns trigger
language plpgsql
as $$
declare
  v_campaign_system text;
begin
  select c.system into v_campaign_system
  from public.campaigns c
  where c.id = new.campaign_id;

  if v_campaign_system is null then
    raise exception 'campaign not found';
  end if;

  if new.character_system <> v_campaign_system then
    raise exception 'character system (%) does not match campaign system (%)', new.character_system, v_campaign_system;
  end if;

  if new.character_system = 'webrunning' then
    if not exists (
      select 1 from public.webrunning_characters wc
      where wc.id = new.webrunning_character_id
        and wc.user_id = new.user_id
    ) then
      raise exception 'assignment user must own selected webrunning character';
    end if;
  elsif new.character_system = 'xrrpg' then
    if not exists (
      select 1 from public.xrrpg_characters xc
      where xc.id = new.xrrpg_character_id
        and xc.user_id = new.user_id
    ) then
      raise exception 'assignment user must own selected xrrpg character';
    end if;
  end if;

  return new;
end;
$$;

drop trigger if exists trg_campaign_assignment_system_match on public.campaign_character_assignments;
create trigger trg_campaign_assignment_system_match
before insert or update on public.campaign_character_assignments
for each row execute function public.enforce_campaign_assignment_system_match();

create or replace function public.enforce_campaign_invite_system_match()
returns trigger
language plpgsql
as $$
declare
  v_campaign_system text;
begin
  select c.system into v_campaign_system
  from public.campaigns c
  where c.id = new.campaign_id;

  if v_campaign_system is null then
    raise exception 'campaign not found';
  end if;

  if new.required_character_system <> v_campaign_system then
    raise exception 'invite system must match campaign system';
  end if;

  return new;
end;
$$;

drop trigger if exists trg_campaign_invite_system_match on public.campaign_invites;
create trigger trg_campaign_invite_system_match
before insert or update on public.campaign_invites
for each row execute function public.enforce_campaign_invite_system_match();

alter table public.xrrpg_characters enable row level security;
alter table public.xrrpg_history enable row level security;

drop policy if exists xrrpg_characters_owner_all on public.xrrpg_characters;
create policy xrrpg_characters_owner_all
  on public.xrrpg_characters
  for all
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

drop policy if exists xrrpg_characters_gm_read_assigned on public.xrrpg_characters;
create policy xrrpg_characters_gm_read_assigned
  on public.xrrpg_characters
  for select
  using (
    exists (
      select 1
      from public.campaign_character_assignments cca
      join public.campaign_members cm on cm.campaign_id = cca.campaign_id
      where cca.xrrpg_character_id = xrrpg_characters.id
        and cca.character_system = 'xrrpg'
        and cm.user_id = auth.uid()
        and cm.role = 'gm'
    )
  );

drop policy if exists xrrpg_history_owner_all on public.xrrpg_history;
create policy xrrpg_history_owner_all
  on public.xrrpg_history
  for all
  using (user_id = auth.uid())
  with check (user_id = auth.uid());
