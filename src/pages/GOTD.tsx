import GOTDLeaderboard from "@/components/GOTDLeaderboard";
import GamesPlayed from "@/components/GamesPlayed";
import SocialLinks from "@/components/SocialLinks";
import { useGOTDRealtimeData } from "@/hooks/useGOTDRealtimeData";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GOTD = () => {
  const { players, gamesCount, loading } = useGOTDRealtimeData();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading GOTD Leaderboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 relative">
      <div className="football-background"></div>
      <div className="container mx-auto relative z-10">
        {/* Header with Logo and Back Button */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4 sporty-float">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl md:text-2xl shadow-lg">
              HoF
            </div>
            <div className="text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-1">GOTD Leaderboard</h1>
              <p className="text-muted-foreground">Goal of the Day Rankings</p>
            </div>
          </div>
          <Button 
            onClick={() => navigate('/')} 
            variant="outline" 
            className="text-green-400 border-green-400 hover:bg-green-400 hover:text-background"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to MVP
          </Button>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Leaderboard - Takes 2/3 on desktop */}
          <div className="lg:col-span-2 sporty-bounce">
            <GOTDLeaderboard players={players} />
          </div>

          {/* Sidebar - Takes 1/3 on desktop */}
          <div className="space-y-6 sporty-float">
            <GamesPlayed count={gamesCount} />
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GOTD;