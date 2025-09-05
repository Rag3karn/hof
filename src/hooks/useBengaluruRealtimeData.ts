import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface BengaluruPlayer {
  id: number;
  name: string;
  mvp_medals: number;
  gotd: number;
  total_points: number;
}

export function useBengaluruRealtimeData() {
  const [players, setPlayers] = useState<BengaluruPlayer[]>([]);
  const [gamesCount, setGamesCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchPlayers = async () => {
    try {
      const { data, error } = await supabase
        .from('bengaluru_players')
        .select('*')
        .order('total_points', { ascending: false })
        .order('mvp_medals', { ascending: false })
        .order('gotd', { ascending: false })
        .order('name', { ascending: true });
      
      if (error) throw error;
      setPlayers(data || []);
    } catch (error) {
      console.error('Error fetching bengaluru players:', error);
    }
  };

  const fetchGamesCount = async () => {
    try {
      const { count, error } = await supabase
        .from('bengaluru_games')
        .select('*', { count: 'exact', head: true })
        .gte('date', '2024-08-24');
      
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
      .channel('realtime-bengaluru-leaderboard')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'bengaluru_players' },
        () => {
          fetchPlayers();
        }
      )
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'bengaluru_games' },
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