import HennurLeaderboard from "@/components/HennurLeaderboard";
import GamesPlayed from "@/components/GamesPlayed";
import { useHennurRealtimeData } from "@/hooks/useHennurRealtimeData";
// Logo will be updated when properly saved

const Index = () => {
  const {
    players,
    gamesCount,
    loading
  } = useHennurRealtimeData();
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading Hennur Leaderboard...</p>
        </div>
      </div>;
  }
  return <div className="min-h-screen p-4 relative">
      <div className="football-background"></div>
      <div className="container mx-auto relative z-10">
        {/* Header with Logo */}
        <div className="flex items-center mb-8">
          <div className="flex items-center gap-4 sporty-float">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl md:text-2xl shadow-lg">
              HoF
            </div>
            <div className="text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-1 text-slate-950">Hennur Leaderboard</h1>
              <p className="text-muted-foreground">Humans of Football Hennur</p>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Leaderboard - Takes 2/3 on desktop */}
          <div className="lg:col-span-2 sporty-bounce">
            <HennurLeaderboard players={players} />
          </div>

          {/* Sidebar - Takes 1/3 on desktop */}
          <div className="space-y-6 sporty-float">
            <GamesPlayed count={gamesCount} startDate="August 3rd, 2025" />
          </div>
        </div>
      </div>
    </div>;
};
export default Index;