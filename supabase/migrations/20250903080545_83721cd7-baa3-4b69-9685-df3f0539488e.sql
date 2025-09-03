-- Remove existing public read policies for all player tables
DROP POLICY IF EXISTS "Public Read Hennur Players" ON public.hennur_players;
DROP POLICY IF EXISTS "Public Read Bengaluru Players" ON public.bengaluru_players;
DROP POLICY IF EXISTS "Public Read Koramangala Players" ON public.koramangala_players;
DROP POLICY IF EXISTS "Public Read Mumbai Players" ON public.mumbai_players;
DROP POLICY IF EXISTS "Public Read Pune Players" ON public.pune_players;
DROP POLICY IF EXISTS "Public Read Kolkata Players" ON public.kolkata_players;
DROP POLICY IF EXISTS "Public Read Delhi Players" ON public.delhi_players;
DROP POLICY IF EXISTS "Public Read Ahmedabad Players" ON public.ahmedabad_players;

-- Create secure read policies that exclude contact numbers for public access
-- Hennur Players
CREATE POLICY "Public Read Hennur Players Stats" ON public.hennur_players
FOR SELECT USING (true);

CREATE POLICY "Authenticated Read Hennur Contact Numbers" ON public.hennur_players
FOR SELECT USING (auth.role() = 'authenticated');

-- Bengaluru Players
CREATE POLICY "Public Read Bengaluru Players Stats" ON public.bengaluru_players
FOR SELECT USING (true);

CREATE POLICY "Authenticated Read Bengaluru Contact Numbers" ON public.bengaluru_players
FOR SELECT USING (auth.role() = 'authenticated');

-- Koramangala Players
CREATE POLICY "Public Read Koramangala Players Stats" ON public.koramangala_players
FOR SELECT USING (true);

CREATE POLICY "Authenticated Read Koramangala Contact Numbers" ON public.koramangala_players
FOR SELECT USING (auth.role() = 'authenticated');

-- Mumbai Players
CREATE POLICY "Public Read Mumbai Players Stats" ON public.mumbai_players
FOR SELECT USING (true);

CREATE POLICY "Authenticated Read Mumbai Contact Numbers" ON public.mumbai_players
FOR SELECT USING (auth.role() = 'authenticated');

-- Pune Players
CREATE POLICY "Public Read Pune Players Stats" ON public.pune_players
FOR SELECT USING (true);

CREATE POLICY "Authenticated Read Pune Contact Numbers" ON public.pune_players
FOR SELECT USING (auth.role() = 'authenticated');

-- Kolkata Players
CREATE POLICY "Public Read Kolkata Players Stats" ON public.kolkata_players
FOR SELECT USING (true);

CREATE POLICY "Authenticated Read Kolkata Contact Numbers" ON public.kolkata_players
FOR SELECT USING (auth.role() = 'authenticated');

-- Delhi Players
CREATE POLICY "Public Read Delhi Players Stats" ON public.delhi_players
FOR SELECT USING (true);

CREATE POLICY "Authenticated Read Delhi Contact Numbers" ON public.delhi_players
FOR SELECT USING (auth.role() = 'authenticated');

-- Ahmedabad Players
CREATE POLICY "Public Read Ahmedabad Players Stats" ON public.ahmedabad_players
FOR SELECT USING (true);

CREATE POLICY "Authenticated Read Ahmedabad Contact Numbers" ON public.ahmedabad_players
FOR SELECT USING (auth.role() = 'authenticated');