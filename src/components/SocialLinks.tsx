import { Card } from "@/components/ui/card";
import { Youtube, Instagram } from "lucide-react";

export default function SocialLinks() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4 text-green-400 text-center">Follow Humans of football</h3>
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.youtube.com/@HumansOfFootball"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors"
        >
          <Youtube size={24} />
          <span className="font-medium">YouTube</span>
        </a>
        <a
          href="https://www.instagram.com/humans.of.football/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors"
        >
          <Instagram size={24} />
          <span className="font-medium">Instagram</span>
        </a>
      </div>
    </Card>
  );
}