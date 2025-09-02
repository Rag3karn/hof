import CityLeaderboard from "@/components/CityLeaderboard";
import GamesPlayed from "@/components/GamesPlayed";
import Rewards from "@/components/Rewards";
import { useCityRealtimeData } from "@/hooks/useCityRealtimeData";
import hofLogo from "@/assets/hof-logo.png";

export default function Ahmedabad() {
  const { players, gamesCount, loading } = useCityRealtimeData('ahmedabad');

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900"
      style={{
        backgroundImage: `url('/lovable-uploads/479e3388-6c62-4b5a-a36f-30e9ee359319.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-center mb-8">
          <img src={hofLogo} alt="HOF Logo" className="w-12 h-12 mr-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Ahmedabad Leaderboard
          </h1>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Leaderboard - Takes up 2 columns on large screens */}
          <div className="lg:col-span-2">
            <CityLeaderboard players={players} cityName="ahmedabad" />
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <GamesPlayed count={gamesCount} startDate="5th Sep" />
            <Rewards />
          </div>
        </div>
      </div>
    </div>
  );
}