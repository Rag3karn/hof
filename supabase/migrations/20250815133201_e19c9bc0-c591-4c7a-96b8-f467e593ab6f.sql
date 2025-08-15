-- Add RLS policy for players table to allow public read access
CREATE POLICY "Public Read Players" ON public.players
FOR SELECT 
USING (true);