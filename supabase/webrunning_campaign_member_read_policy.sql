-- Allow campaign participants (GM + players) to read assigned character sheets.
-- This fixes missing character names/stats for non-owners in campaign views.

drop policy if exists webrunning_characters_campaign_member_read_assigned on public.webrunning_characters;
create policy webrunning_characters_campaign_member_read_assigned
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
    )
  );
