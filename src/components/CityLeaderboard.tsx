import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface CityPlayer {
  id: number;
  name: string;
  mvp_medals: number;
  gotd: number;
  total_points: number;
}

interface CityLeaderboardProps {
  players: CityPlayer[];
  cityName: string;
}

export default function CityLeaderboard({ players, cityName }: CityLeaderboardProps) {
  const capitalizedCity = cityName.charAt(0).toUpperCase() + cityName.slice(1);
  
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-400">{capitalizedCity} Leaderboard</h2>
      <div className="overflow-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-primary hover:bg-primary">
              <TableHead className="text-primary-foreground font-bold">#</TableHead>
              <TableHead className="text-primary-foreground font-bold">Player Name</TableHead>
              <TableHead className="text-primary-foreground font-bold text-center">MVP Medals</TableHead>
              <TableHead className="text-primary-foreground font-bold text-center">GOTD</TableHead>
              <TableHead className="text-primary-foreground font-bold text-center">Total Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {players.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                  No players yet. Be the first to join!
                </TableCell>
              </TableRow>
            ) : (
              players.map((player, index) => (
                <TableRow key={player.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell className="font-medium">{player.name}</TableCell>
                  <TableCell className="text-center font-bold text-primary">{player.mvp_medals}</TableCell>
                  <TableCell className="text-center font-bold text-primary">{player.gotd}</TableCell>
                  <TableCell className="text-center font-bold text-primary">{player.total_points}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}