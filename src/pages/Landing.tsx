import { Card } from "@/components/ui/card";
import { Trophy, Users, Target, Star } from "lucide-react";

const Landing = () => {
  const stats = [
    { icon: Users, label: "Active Players", value: "500+" },
    { icon: Trophy, label: "Games Played", value: "200+" },
    { icon: Target, label: "Goals Scored", value: "1000+" },
    { icon: Star, label: "MVP Awards", value: "150+" }
  ];

  return (
    <div className="min-h-screen relative">
      <div className="football-background"></div>
      <div className="container mx-auto px-4 py-8 relative z-10">
        
        {/* Hero Section */}
        <div className="text-center py-20 sporty-float">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center text-primary-foreground font-bold text-4xl shadow-2xl sporty-bounce">
            HoF
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground animate-fade-in">
            Humans of Football
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Revolutionizing the football space in India
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="p-6 text-center hover-scale" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                  <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-card-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quote Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card/90 backdrop-blur-sm border-primary/20 sporty-float">
            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl font-medium text-card-foreground mb-6 italic">
                "Football is not just a sport, it's a language that unites hearts, 
                transcends boundaries, and creates legends on every field."
              </p>
              <footer className="text-lg text-card-foreground/70">
                — The Beautiful Game Philosophy
              </footer>
            </blockquote>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-primary">🌟 Excellence</h3>
                <p className="text-sm text-card-foreground/80">
                  Pushing boundaries and achieving greatness in every game we play
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-primary">🤝 Community</h3>
                <p className="text-sm text-card-foreground/80">
                  Building lasting friendships and connections through the love of football
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-primary">⚽ Passion</h3>
                <p className="text-sm text-card-foreground/80">
                  Living and breathing football with every kick, pass, and celebration
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Landing;