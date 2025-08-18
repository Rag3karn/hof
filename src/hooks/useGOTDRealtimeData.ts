import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface GOTDPlayer {
  id: number;
  name: string;
  contact_number: number | null;
  gotd: number;
}

export function useGOTDRealtimeData() {
  const [players, setPlayers] = useState<GOTDPlayer[]>([]);
  const [gamesCount, setGamesCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchPlayers = async () => {
    try {
      const { data, error } = await supabase
        .from('gotd_players')
        .select('*')
        .order('gotd', { ascending: false })
        .order('name', { ascending: true });
      
      if (error) throw error;
      setPlayers(data || []);
    } catch (error) {
      console.error('Error fetching GOTD players:', error);
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
      .channel('realtime-gotd-leaderboard')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'gotd_players' },
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