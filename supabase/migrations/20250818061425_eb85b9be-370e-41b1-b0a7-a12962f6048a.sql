-- Create GOTD players table similar to players table
CREATE TABLE public.gotd_players (
  id bigint PRIMARY KEY,
  name text NOT NULL,
  contact_number numeric,
  gotd integer DEFAULT 0
);

-- Enable Row Level Security
ALTER TABLE public.gotd_players ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Public Read GOTD Players" 
ON public.gotd_players 
FOR SELECT 
USING (true);