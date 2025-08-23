import { Card } from "@/components/ui/card";

interface GamesPlayedProps {
  count: number;
}

export default function GamesPlayed({ count }: GamesPlayedProps) {
  return (
    <Card className="p-6 text-center">
      <h3 className="text-lg font-semibold mb-2 text-muted-foreground">Total Games Played</h3>
      <div className="text-4xl font-bold text-primary">{count}</div>
      <p className="text-sm text-muted-foreground mt-2">Since August 24th, 2025</p>
    </Card>
  );
}