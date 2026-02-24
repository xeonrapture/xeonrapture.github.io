-- Safer profile discovery setup for friend/game invites.
-- Keep private fields (like email) out of client-readable discovery queries.

alter table public.profiles enable row level security;

-- Remove broad discovery policy from profiles table.
drop policy if exists profiles_discovery_select on public.profiles;

-- Keep direct profile reads limited to the owner row.
drop policy if exists profiles_owner_select on public.profiles;
create policy profiles_owner_select
on public.profiles
for select
to authenticated
using (auth.uid() = id);

-- Public discovery surface with only safe columns.
drop view if exists public.profile_directory;
create view public.profile_directory as
  select id, username
  from public.profiles
  where username is not null;

grant select on public.profile_directory to authenticated;

-- Note:
-- User email should come from the authenticated session user (`auth.getUser()`),
-- not from public.profiles.
