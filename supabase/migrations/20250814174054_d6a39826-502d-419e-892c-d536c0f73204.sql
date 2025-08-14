-- Create games table  
CREATE TABLE public.games (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL
);

-- Enable Row Level Security on games
ALTER TABLE public.games ENABLE ROW LEVEL SECURITY;

-- Create policy for public read-only access on games
CREATE POLICY "Public Read Games" ON public.games  
FOR SELECT USING (true);

-- Enable realtime for games
ALTER TABLE public.games REPLICA IDENTITY FULL;

-- Add games table to realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE public.games;

-- Insert dummy data for games
INSERT INTO public.games (date) VALUES
('2025-08-03'),
('2025-08-05'),
('2025-08-06'),
('2025-08-10'),
('2025-08-12');