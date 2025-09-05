-- Step 1: Reset all hennur player stats to 0
UPDATE public.hennur_players 
SET mvp_medals = 0, gotd = 0, total_points = 0;

-- Step 2: Insert koramangala players into bengaluru_players table
INSERT INTO public.bengaluru_players (id, name, mvp_medals, gotd, total_points, created_at, updated_at)
SELECT id, name, mvp_medals, gotd, total_points, created_at, updated_at
FROM public.koramangala_players
ON CONFLICT (id) DO NOTHING;

-- Step 3: Insert hennur players (now with 0 stats) into bengaluru_players table
INSERT INTO public.bengaluru_players (id, name, mvp_medals, gotd, total_points, created_at, updated_at)
SELECT id, name, mvp_medals, gotd, total_points, created_at, updated_at
FROM public.hennur_players
ON CONFLICT (id) DO NOTHING;

-- Step 4: Insert koramangala games into bengaluru_games table
INSERT INTO public.bengaluru_games (id, date)
SELECT id, date
FROM public.koramangala_games
ON CONFLICT (id) DO NOTHING;

-- Step 5: Insert hennur games into bengaluru_games table
INSERT INTO public.bengaluru_games (id, date)
SELECT id, date
FROM public.hennur_games
ON CONFLICT (id) DO NOTHING;

-- Step 6: Create a new sequence for players
CREATE SEQUENCE IF NOT EXISTS public.players_id_seq;

-- Step 7: Update all player tables to use the new sequence
ALTER TABLE public.bengaluru_players ALTER COLUMN id SET DEFAULT nextval('public.players_id_seq');
ALTER TABLE public.mumbai_players ALTER COLUMN id SET DEFAULT nextval('public.players_id_seq');
ALTER TABLE public.pune_players ALTER COLUMN id SET DEFAULT nextval('public.players_id_seq');
ALTER TABLE public.kolkata_players ALTER COLUMN id SET DEFAULT nextval('public.players_id_seq');
ALTER TABLE public.delhi_players ALTER COLUMN id SET DEFAULT nextval('public.players_id_seq');
ALTER TABLE public.ahmedabad_players ALTER COLUMN id SET DEFAULT nextval('public.players_id_seq');

-- Step 8: Set the sequence to start from a safe value
SELECT setval('public.players_id_seq', COALESCE((SELECT MAX(id) FROM (
  SELECT id FROM public.bengaluru_players
  UNION ALL
  SELECT id FROM public.mumbai_players
  UNION ALL
  SELECT id FROM public.pune_players
  UNION ALL
  SELECT id FROM public.kolkata_players
  UNION ALL
  SELECT id FROM public.delhi_players
  UNION ALL
  SELECT id FROM public.ahmedabad_players
) AS all_ids), 1));

-- Step 9: Drop the old tables (now safe to do)
DROP TABLE public.koramangala_players CASCADE;
DROP TABLE public.koramangala_games CASCADE;
DROP TABLE public.hennur_players CASCADE;
DROP TABLE public.hennur_games CASCADE;