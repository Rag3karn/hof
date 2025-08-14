import Leaderboard from "@/components/Leaderboard";
import GamesPlayed from "@/components/GamesPlayed";
import SocialLinks from "@/components/SocialLinks";
import { useRealtimeData } from "@/hooks/useRealtimeData";

const Index = () => {
  const { players, gamesCount, loading } = useRealtimeData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading HoF MVP Season...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">HoF MVP Season</h1>
          <p className="text-muted-foreground">Humans of Football Leaderboard</p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Leaderboard - Takes 2/3 on desktop */}
          <div className="lg:col-span-2">
            <Leaderboard players={players} />
          </div>

          {/* Sidebar - Takes 1/3 on desktop */}
          <div className="space-y-6">
            <GamesPlayed count={gamesCount} />
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
