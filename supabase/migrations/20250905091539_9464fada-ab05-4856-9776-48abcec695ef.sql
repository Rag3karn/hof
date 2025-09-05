-- Remove contact_number column from all player tables
ALTER TABLE public.ahmedabad_players DROP COLUMN contact_number;
ALTER TABLE public.bengaluru_players DROP COLUMN contact_number;
ALTER TABLE public.delhi_players DROP COLUMN contact_number;
ALTER TABLE public.hennur_players DROP COLUMN contact_number;
ALTER TABLE public.kolkata_players DROP COLUMN contact_number;
ALTER TABLE public.koramangala_players DROP COLUMN contact_number;
ALTER TABLE public.mumbai_players DROP COLUMN contact_number;
ALTER TABLE public.pune_players DROP COLUMN contact_number;