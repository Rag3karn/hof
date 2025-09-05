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

-- Step 6: Drop the old tables
DROP TABLE public.koramangala_players;
DROP TABLE public.koramangala_games;
DROP TABLE public.hennur_players;
DROP TABLE public.hennur_games;