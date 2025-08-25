import RecordedGames from "@/components/RecordedGames";
import Highlights from "@/components/Highlights";

const SocialMedia = () => {
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
              <h1 className="text-3xl md:text-4xl font-bold mb-1 text-slate-950">Social Media</h1>
              <p className="text-muted-foreground">Humans of Football Content</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="sporty-bounce">
            <RecordedGames />
          </div>
          <div className="sporty-float">
            <Highlights />
          </div>
        </div>
      </div>
    </div>;
};
export default SocialMedia;