-- Friendships + friend_requests RLS policies for notification accept/reject flow.
-- Run in Supabase SQL editor.

alter table public.friendships enable row level security;
alter table public.friend_requests enable row level security;

-- Clean up old policy variants if present.
drop policy if exists friendships_select_participants on public.friendships;
drop policy if exists friendships_insert_participants on public.friendships;

drop policy if exists friend_requests_select_participants on public.friend_requests;
drop policy if exists friend_requests_insert_requester on public.friend_requests;
drop policy if exists friend_requests_update_target on public.friend_requests;

-- Any participant can see the friendship row.
create policy friendships_select_participants
  on public.friendships
  for select
  using (auth.uid() in (user_a, user_b));

-- A signed-in user can create a friendship row only if they are one side.
create policy friendships_insert_participants
  on public.friendships
  for insert
  with check (
    auth.uid() in (user_a, user_b)
    and user_a < user_b
  );

-- Friend request visibility for requester/target.
create policy friend_requests_select_participants
  on public.friend_requests
  for select
  using (auth.uid() in (requester_user_id, target_user_id));

-- Only requester can create a friend request from themselves.
create policy friend_requests_insert_requester
  on public.friend_requests
  for insert
  with check (auth.uid() = requester_user_id);

-- Only target can accept/decline/cancel their pending request row in this flow.
create policy friend_requests_update_target
  on public.friend_requests
  for update
  using (auth.uid() = target_user_id)
  with check (auth.uid() = target_user_id);
