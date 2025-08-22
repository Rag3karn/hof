-- First, create the new hennur_players table with merged data
CREATE TABLE public.hennur_players (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  contact_number NUMERIC,
  mvp_medals INTEGER DEFAULT 0,
  gotd INTEGER DEFAULT 0,
  total_points INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert merged data from both tables
INSERT INTO public.hennur_players (name, contact_number, mvp_medals, gotd)
SELECT 
  COALESCE(p.name, g.name) as name,
  COALESCE(p.contact_number, g.contact_number) as contact_number,
  COALESCE(p.mvp_medals, 0) as mvp_medals,
  COALESCE(g.gotd, 0) as gotd
FROM public.players p
FULL OUTER JOIN public.gotd_players g ON p.name = g.name;

-- Enable RLS on the new table
ALTER TABLE public.hennur_players ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Public Read Hennur Players" 
ON public.hennur_players 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_hennur_players_updated_at
BEFORE UPDATE ON public.hennur_players
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add table to realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE public.hennur_players;