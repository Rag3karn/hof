import SocialLinks from "@/components/SocialLinks";
import RecordedGames from "@/components/RecordedGames";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
const SocialMedia = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen p-4 relative">
      <div className="football-background"></div>
      <div className="container mx-auto relative z-10">
        {/* Header with Logo and Back Button */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4 sporty-float">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl md:text-2xl shadow-lg">
              HoF
            </div>
            <div className="text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-1 text-slate-950">Social Media</h1>
              <p className="text-muted-foreground">Humans of Football Content</p>
            </div>
          </div>
          <Button onClick={() => navigate('/')} variant="outline" className="text-green-400 border-green-400 hover:bg-green-400 hover:text-background">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Hennur
          </Button>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recorded Games - Takes 1/2 on desktop */}
          <div className="sporty-bounce">
            <RecordedGames />
          </div>

          {/* Social Links - Takes 1/2 on desktop */}
          <div className="sporty-float">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>;
};
export default SocialMedia;