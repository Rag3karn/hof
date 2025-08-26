import { MapPin, Home, Users, Youtube, Instagram, ChevronDown } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import hofLogo from "@/assets/hof-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function TopNavigation() {
  const location = useLocation();
  const isLocationActive = location.pathname === "/hennur" || location.pathname === "/koramangala";

  return (
    <nav className="bg-green-600 text-white shadow-lg border-b border-green-500/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <img src={hofLogo} alt="HOF Logo" className="w-15 h-15" />
            <span className="text-xl font-bold">Humans of Football</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => 
                `${isActive 
                  ? "bg-white text-green-600 font-medium" 
                  : "text-white hover:bg-green-700"
                } transition-colors flex items-center gap-2 px-4 py-2 rounded-md text-sm`
              }
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </NavLink>

            <DropdownMenu>
              <DropdownMenuTrigger className={`${isLocationActive 
                ? "bg-white text-green-600 font-medium" 
                : "text-white hover:bg-green-700"
              } transition-colors flex items-center gap-2 px-4 py-2 rounded-md text-sm`}>
                <MapPin className="h-4 w-4" />
                <span>Locations</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg">
                <DropdownMenuItem asChild>
                  <NavLink 
                    to="/hennur" 
                    className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-green-50 cursor-pointer w-full"
                  >
                    <MapPin className="h-4 w-4" />
                    <span>Hennur</span>
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <NavLink 
                    to="/koramangala" 
                    className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-green-50 cursor-pointer w-full"
                  >
                    <MapPin className="h-4 w-4" />
                    <span>Koramangala</span>
                  </NavLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink 
              to="/social-media" 
              className={({ isActive }) => 
                `${isActive 
                  ? "bg-white text-green-600 font-medium" 
                  : "text-white hover:bg-green-700"
                } transition-colors flex items-center gap-2 px-4 py-2 rounded-md text-sm`
              }
            >
              <Users className="h-4 w-4" />
              <span>Social Media</span>
            </NavLink>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-2">
            <a
              href="https://www.youtube.com/@HumansOfFootball"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:scale-110"
              title="YouTube"
            >
              <Youtube size={14} />
            </a>
            <a
              href="https://www.instagram.com/humans.of.football/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300 hover:scale-110"
              title="Instagram"
            >
              <Instagram size={14} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}