import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const highlights = [
  {
    title: "Hennur Game - 21/08/2025",
    score: "15(Black) - 13(White)",
    link: "https://youtu.be/H4FXRKufx-k"
  }
];

export default function Highlights() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4 text-green-400">Highlights</h3>
      <div className="space-y-4">
        {highlights.map((highlight, index) => (
          <div key={index} className="border-l-2 border-primary pl-4">
            <h4 className="font-medium text-black">{highlight.title}</h4>
            <p className="text-sm text-muted-foreground mb-2">Score - {highlight.score}</p>
            <a
              href={highlight.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors text-sm"
            >
              <ExternalLink size={16} />
              Watch Highlights
            </a>
          </div>
        ))}
      </div>
    </Card>
  );
}