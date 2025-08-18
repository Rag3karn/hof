import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface GOTDPlayer {
  id: number;
  name: string;
  gotd: number;
}

interface GOTDLeaderboardProps {
  players: GOTDPlayer[];
}

export default function GOTDLeaderboard({ players }: GOTDLeaderboardProps) {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-400">Goal of the day leaderboard</h2>
      <div className="overflow-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-primary hover:bg-primary">
              <TableHead className="text-primary-foreground font-bold">#</TableHead>
              <TableHead className="text-primary-foreground font-bold">Player Name</TableHead>
              <TableHead className="text-primary-foreground font-bold text-center">GOTD</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {players.map((player, index) => (
              <TableRow key={player.id} className="hover:bg-muted/50">
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="font-medium">{player.name}</TableCell>
                <TableCell className="text-center font-bold text-primary">{player.gotd}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}