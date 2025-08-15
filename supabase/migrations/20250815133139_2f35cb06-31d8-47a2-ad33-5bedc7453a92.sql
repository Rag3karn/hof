-- Add RLS policies for players table to allow public read access
CREATE POLICY "Public Read Players" ON public.players
FOR SELECT 
USING (true);

-- Also add policy for games table if missing
CREATE POLICY "Public Read Games" ON public.games
FOR SELECT 
USING (true);