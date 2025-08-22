import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const recordedGames = [
  {
    title: "Hennur Game - 2/08/2025",
    score: "9(White) - 6(Black)",
    link: "https://youtu.be/2zxbTNkMvSw"
  },
  {
    title: "Hennur Game- 5/08/2025", 
    score: "13(White) - 10(Black)",
    link: "https://youtu.be/X_zVYq1jQmU"
  },
  {
    title: "Hennur Game - 7/08/2025",
    score: "9(Black) - 6(White)", 
    link: "https://youtu.be/lKjbnfweh1E"
  },
  {
    title: "Hennur Game - 21/08/2025",
    score: "15(Black) - 13(White)",
    link: "https://youtu.be/VMcszicqxnc"
  }
];

export default function RecordedGames() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4 text-green-400">Recorded Games</h3>
      <div className="space-y-4">
        {recordedGames.map((game, index) => (
          <div key={index} className="border-l-2 border-primary pl-4">
            <h4 className="font-medium text-foreground">{game.title}</h4>
            <p className="text-sm text-muted-foreground mb-2">Score - {game.score}</p>
            <a
              href={game.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors text-sm"
            >
              <ExternalLink size={16} />
              Watch Game
            </a>
          </div>
        ))}
      </div>
    </Card>
  );
}