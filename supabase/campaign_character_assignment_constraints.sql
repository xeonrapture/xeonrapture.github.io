-- Ensures each player can only have one selected character per campaign,
-- and that they can only assign one of their own characters.

-- 1) Remove duplicate assignment rows before creating a unique index.
with ranked as (
  select
    id,
    row_number() over (
      partition by campaign_id, user_id
      order by assigned_at desc, id desc
    ) as rn
  from public.campaign_character_assignments
)
delete from public.campaign_character_assignments cca
using ranked r
where cca.id = r.id
  and r.rn > 1;

-- 2) Enforce one selected character per player per campaign.
create unique index if not exists idx_campaign_character_assignments_campaign_user_unique
  on public.campaign_character_assignments(campaign_id, user_id);

-- 3) Enforce ownership for both legacy (character_id) and system-specific assignment columns.
create or replace function public.enforce_campaign_assignment_character_owner()
returns trigger
language plpgsql
as $$
begin
  if coalesce(new.character_system, 'webrunning') = 'xrrpg' then
    if new.xrrpg_character_id is null then
      raise exception 'campaign assignment missing xrrpg_character_id';
    end if;
    if not exists (
      select 1
      from public.xrrpg_characters xc
      where xc.id = new.xrrpg_character_id
        and xc.user_id = new.user_id
    ) then
      raise exception 'assignment user must own selected xrrpg character';
    end if;
  else
    if coalesce(new.webrunning_character_id, new.character_id) is null then
      raise exception 'campaign assignment missing webrunning character id';
    end if;
    if not exists (
      select 1
      from public.webrunning_characters wc
      where wc.id = coalesce(new.webrunning_character_id, new.character_id)
        and wc.user_id = new.user_id
    ) then
      raise exception 'campaign assignment user_id must own character_id';
    end if;
  end if;

  return new;
end;
$$;

drop trigger if exists trg_campaign_assignment_character_owner
  on public.campaign_character_assignments;

create trigger trg_campaign_assignment_character_owner
before insert or update on public.campaign_character_assignments
for each row
execute function public.enforce_campaign_assignment_character_owner();
