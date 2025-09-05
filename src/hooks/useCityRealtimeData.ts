import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface CityPlayer {
  id: number;
  name: string;
  mvp_medals: number;
  gotd: number;
  total_points: number;
}

export function useCityRealtimeData(cityName: 'mumbai' | 'pune' | 'kolkata' | 'delhi' | 'ahmedabad') {
  const [players, setPlayers] = useState<CityPlayer[]>([]);
  const [gamesCount, setGamesCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchPlayers = async () => {
    try {
      const { data, error } = await supabase
        .from(`${cityName}_players` as any)
        .select('*')
        .order('total_points', { ascending: false })
        .order('mvp_medals', { ascending: false })
        .order('gotd', { ascending: false })
        .order('name', { ascending: true });
      
      if (error) throw error;
      setPlayers((data as unknown as CityPlayer[]) || []);
    } catch (error) {
      console.error(`Error fetching ${cityName} players:`, error);
    }
  };

  const fetchGamesCount = async () => {
    try {
      const { count, error } = await supabase
        .from(`${cityName}_games` as any)
        .select('*', { count: 'exact', head: true })
        .gte('date', '2025-09-05');
      
      if (error) throw error;
      setGamesCount(count || 0);
    } catch (error) {
      console.error('Error fetching games count:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchPlayers(), fetchGamesCount()]);
      setLoading(false);
    };

    fetchData();

    // Set up realtime subscriptions
    const channel = supabase
      .channel(`realtime-${cityName}-leaderboard`)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: `${cityName}_players` },
        () => {
          fetchPlayers();
        }
      )
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: `${cityName}_games` },
        () => {
          fetchGamesCount();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [cityName]);

  return { players, gamesCount, loading };
}