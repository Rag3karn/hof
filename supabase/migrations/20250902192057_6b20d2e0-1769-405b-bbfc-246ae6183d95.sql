-- Create new tables for all cities

-- Bengaluru tables (will merge hennur and koramangala data)
CREATE TABLE public.bengaluru_players (
  id bigint NOT NULL DEFAULT nextval('hennur_players_id_seq'::regclass) PRIMARY KEY,
  name text NOT NULL,
  contact_number numeric,
  mvp_medals integer DEFAULT 0,
  gotd integer DEFAULT 0,
  total_points integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

CREATE TABLE public.bengaluru_games (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  date date NOT NULL
);

-- Mumbai tables
CREATE TABLE public.mumbai_players (
  id bigint NOT NULL DEFAULT nextval('hennur_players_id_seq'::regclass) PRIMARY KEY,
  name text NOT NULL,
  contact_number numeric,
  mvp_medals integer DEFAULT 0,
  gotd integer DEFAULT 0,
  total_points integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

CREATE TABLE public.mumbai_games (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  date date NOT NULL
);

-- Pune tables
CREATE TABLE public.pune_players (
  id bigint NOT NULL DEFAULT nextval('hennur_players_id_seq'::regclass) PRIMARY KEY,
  name text NOT NULL,
  contact_number numeric,
  mvp_medals integer DEFAULT 0,
  gotd integer DEFAULT 0,
  total_points integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

CREATE TABLE public.pune_games (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  date date NOT NULL
);

-- Kolkata tables
CREATE TABLE public.kolkata_players (
  id bigint NOT NULL DEFAULT nextval('hennur_players_id_seq'::regclass) PRIMARY KEY,
  name text NOT NULL,
  contact_number numeric,
  mvp_medals integer DEFAULT 0,
  gotd integer DEFAULT 0,
  total_points integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

CREATE TABLE public.kolkata_games (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  date date NOT NULL
);

-- Delhi tables
CREATE TABLE public.delhi_players (
  id bigint NOT NULL DEFAULT nextval('hennur_players_id_seq'::regclass) PRIMARY KEY,
  name text NOT NULL,
  contact_number numeric,
  mvp_medals integer DEFAULT 0,
  gotd integer DEFAULT 0,
  total_points integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

CREATE TABLE public.delhi_games (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  date date NOT NULL
);

-- Ahmedabad tables
CREATE TABLE public.ahmedabad_players (
  id bigint NOT NULL DEFAULT nextval('hennur_players_id_seq'::regclass) PRIMARY KEY,
  name text NOT NULL,
  contact_number numeric,
  mvp_medals integer DEFAULT 0,
  gotd integer DEFAULT 0,
  total_points integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

CREATE TABLE public.ahmedabad_games (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  date date NOT NULL
);

-- Enable RLS on all new tables
ALTER TABLE public.bengaluru_players ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bengaluru_games ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mumbai_players ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mumbai_games ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pune_players ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pune_games ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.kolkata_players ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.kolkata_games ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.delhi_players ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.delhi_games ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ahmedabad_players ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ahmedabad_games ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for all new tables
CREATE POLICY "Public Read Bengaluru Players" ON public.bengaluru_players FOR SELECT USING (true);
CREATE POLICY "Public Read Bengaluru Games" ON public.bengaluru_games FOR SELECT USING (true);
CREATE POLICY "Public Read Mumbai Players" ON public.mumbai_players FOR SELECT USING (true);
CREATE POLICY "Public Read Mumbai Games" ON public.mumbai_games FOR SELECT USING (true);
CREATE POLICY "Public Read Pune Players" ON public.pune_players FOR SELECT USING (true);
CREATE POLICY "Public Read Pune Games" ON public.pune_games FOR SELECT USING (true);
CREATE POLICY "Public Read Kolkata Players" ON public.kolkata_players FOR SELECT USING (true);
CREATE POLICY "Public Read Kolkata Games" ON public.kolkata_games FOR SELECT USING (true);
CREATE POLICY "Public Read Delhi Players" ON public.delhi_players FOR SELECT USING (true);
CREATE POLICY "Public Read Delhi Games" ON public.delhi_games FOR SELECT USING (true);
CREATE POLICY "Public Read Ahmedabad Players" ON public.ahmedabad_players FOR SELECT USING (true);
CREATE POLICY "Public Read Ahmedabad Games" ON public.ahmedabad_games FOR SELECT USING (true);

-- Migrate data to Bengaluru: Hennur players with reset points + Koramangala players as-is
INSERT INTO public.bengaluru_players (name, contact_number, mvp_medals, gotd, total_points, created_at, updated_at)
SELECT name, contact_number, 0, 0, 0, created_at, updated_at FROM public.hennur_players;

INSERT INTO public.bengaluru_players (name, contact_number, mvp_medals, gotd, total_points, created_at, updated_at)
SELECT name, contact_number, mvp_medals, gotd, total_points, created_at, updated_at FROM public.koramangala_players;

-- Migrate games data to Bengaluru (starting from 24th August as requested)
INSERT INTO public.bengaluru_games (date)
SELECT date FROM public.koramangala_games WHERE date >= '2024-08-24';

-- Create triggers for updated_at columns
CREATE TRIGGER update_bengaluru_players_updated_at BEFORE UPDATE ON public.bengaluru_players FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_mumbai_players_updated_at BEFORE UPDATE ON public.mumbai_players FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_pune_players_updated_at BEFORE UPDATE ON public.pune_players FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_kolkata_players_updated_at BEFORE UPDATE ON public.kolkata_players FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_delhi_players_updated_at BEFORE UPDATE ON public.delhi_players FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_ahmedabad_players_updated_at BEFORE UPDATE ON public.ahmedabad_players FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();