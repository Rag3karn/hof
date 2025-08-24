import { Card } from "@/components/ui/card";
import { Medal, Trophy, Award } from "lucide-react";

const rewards = [
  {
    position: "1st place",
    reward: "1 free game",
    icon: Trophy,
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-50"
  },
  {
    position: "2nd place", 
    reward: "50/- off on 2 games",
    icon: Medal,
    iconColor: "text-gray-400",
    bgColor: "bg-gray-50"
  },
  {
    position: "3rd place",
    reward: "50/- off 1 game", 
    icon: Award,
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50"
  }
];

export default function Rewards() {
  return (
    <Card className="p-6 relative overflow-hidden">
      {/* Confetti background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-2 left-4 w-2 h-2 bg-yellow-400 rotate-12 animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-8 right-6 w-1 h-3 bg-blue-400 rotate-45 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-12 left-12 w-1 h-1 bg-red-400 rotate-90 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-6 right-12 w-2 h-1 bg-green-400 rotate-12 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-8 left-8 w-1 h-2 bg-purple-400 rotate-45 animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-4 right-8 w-2 h-2 bg-pink-400 rotate-90 animate-bounce" style={{ animationDelay: '0.7s' }}></div>
      </div>

      <h3 className="text-lg font-semibold mb-4 text-green-400 text-center">🏆 Rewards 🏆</h3>
      <div className="space-y-3 relative z-10">
        {rewards.map((reward, index) => {
          const Icon = reward.icon;
          return (
            <div key={index} className={`flex items-center gap-3 p-3 rounded-lg ${reward.bgColor} border border-border/50 transition-all hover:shadow-md sporty-float`}>
              <Icon className={`h-6 w-6 ${reward.iconColor}`} />
              <div className="flex-1">
                <span className="font-medium text-foreground">{reward.position}</span>
                <span className="text-muted-foreground"> - {reward.reward}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}