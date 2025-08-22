import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface HennurPlayer {
  id: number;
  name: string;
  contact_number: number | null;
  mvp_medals: number;
  gotd: number;
  total_points: number;
}

export function useHennurRealtimeData() {
  const [players, setPlayers] = useState<HennurPlayer[]>([]);
  const [gamesCount, setGamesCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchPlayers = async () => {
    try {
      const { data, error } = await supabase
        .from('hennur_players')
        .select('*')
        .order('total_points', { ascending: false })
        .order('mvp_medals', { ascending: false })
        .order('gotd', { ascending: false })
        .order('name', { ascending: true });
      
      if (error) throw error;
      setPlayers(data || []);
    } catch (error) {
      console.error('Error fetching hennur players:', error);
    }
  };

  const fetchGamesCount = async () => {
    try {
      const { count, error } = await supabase
        .from('games')
        .select('*', { count: 'exact', head: true })
        .gte('date', '2025-08-03');
      
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
      .channel('realtime-hennur-leaderboard')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'hennur_players' },
        () => {
          fetchPlayers();
        }
      )
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'games' },
        () => {
          fetchGamesCount();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return { players, gamesCount, loading };
}