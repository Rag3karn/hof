import KoramangalaLeaderboard from "@/components/KoramangalaLeaderboard";
import GamesPlayed from "@/components/GamesPlayed";
import { useKoramangalaRealtimeData } from "@/hooks/useKoramangalaRealtimeData";

const Koramangala = () => {
  const { players, gamesCount, loading } = useKoramangalaRealtimeData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading Koramangala Leaderboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 relative">
      <div className="football-background"></div>
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center mb-8">
          <div className="flex items-center gap-4 sporty-float">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl md:text-2xl shadow-lg">
              HoF
            </div>
            <div className="text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-1">Koramangala Leaderboard</h1>
              <p className="text-muted-foreground">Humans of Football Koramangala</p>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Leaderboard - Takes 2/3 on desktop */}
          <div className="lg:col-span-2 sporty-bounce">
            <KoramangalaLeaderboard players={players} />
          </div>

          {/* Sidebar - Takes 1/3 on desktop */}
          <div className="space-y-6 sporty-float">
            <GamesPlayed count={gamesCount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Koramangala;