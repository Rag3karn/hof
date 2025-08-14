-- Create players table
CREATE TABLE public.players (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  contact_number TEXT,
  mvp_medals INTEGER DEFAULT 0
);

-- Create games table  
CREATE TABLE public.games (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.players ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.games ENABLE ROW LEVEL SECURITY;

-- Create policies for public read-only access
CREATE POLICY "Public Read Players" ON public.players
FOR SELECT USING (true);

CREATE POLICY "Public Read Games" ON public.games  
FOR SELECT USING (true);

-- Enable realtime
ALTER TABLE public.players REPLICA IDENTITY FULL;
ALTER TABLE public.games REPLICA IDENTITY FULL;

-- Add tables to realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE public.players;
ALTER PUBLICATION supabase_realtime ADD TABLE public.games;

-- Insert dummy data
INSERT INTO public.players (name, contact_number, mvp_medals) VALUES
('Arjun Sharma', '9876543210', 5),
('Rahul Verma', '9123456780', 3),
('Karan Mehta', '9988776655', 7),
('Vikram Singh', '9811122233', 4);

INSERT INTO public.games (date) VALUES
('2025-08-03'),
('2025-08-05'),
('2025-08-06'),
('2025-08-10'),
('2025-08-12');