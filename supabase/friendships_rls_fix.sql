-- Friendships + friend_requests RLS policies for notification accept/reject flow.
-- Run in Supabase SQL editor.

alter table public.friendships enable row level security;
alter table public.friend_requests enable row level security;

-- Clean up old policy variants if present.
drop policy if exists friendships_select_participants on public.friendships;
drop policy if exists friendships_insert_participants on public.friendships;

drop policy if exists friend_requests_select_participants on public.friend_requests;
drop policy if exists friend_requests_insert_requester on public.friend_requests;
drop policy if exists friend_requests_insert_sender on public.friend_requests;
drop policy if exists friend_requests_update_target on public.friend_requests;
drop policy if exists friend_requests_update_sender_cancel on public.friend_requests;

-- Normalize uniqueness so only one pending request per directed pair is allowed.
alter table public.friend_requests
  drop constraint if exists friend_requests_requester_user_id_target_user_id_status_key;

drop index if exists public.friend_requests_requester_user_id_target_user_id_status_key;

create unique index if not exists idx_friend_requests_pending_unique
  on public.friend_requests(requester_user_id, target_user_id)
  where status = 'pending';

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
  with check (
    auth.uid() = requester_user_id
    and requester_user_id <> target_user_id
    and status = 'pending'
  );

-- Sender can cancel their own request.
create policy friend_requests_update_sender_cancel
  on public.friend_requests
  for update
  using (auth.uid() = requester_user_id)
  with check (
    auth.uid() = requester_user_id
    and status = 'cancelled'
  );

-- Target can accept/decline requests sent to them.
create policy friend_requests_update_target
  on public.friend_requests
  for update
  using (auth.uid() = target_user_id)
  with check (
    auth.uid() = target_user_id
    and status in ('accepted', 'declined')
  );
