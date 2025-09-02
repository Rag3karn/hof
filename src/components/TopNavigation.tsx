import { MapPin, Home, Users, Youtube, Instagram, ChevronDown } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import hofLogo from "@/assets/hof-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function TopNavigation() {
  const location = useLocation();
  const isLocationActive = location.pathname === "/hennur" || location.pathname === "/koramangala";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-green-600 text-white shadow-lg border-b border-green-500/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2 md:gap-3">
            <img src={hofLogo} alt="HOF Logo" className="w-8 h-8 md:w-10 md:h-10" />
            <span className="text-lg md:text-xl font-bold truncate">
              <span className="hidden sm:inline">Humans of Football</span>
              <span className="sm:hidden">HoF</span>
            </span>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:bg-green-700 p-2"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
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
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50">
                <DropdownMenu>
                  <DropdownMenuTrigger className="w-full text-left">
                    <DropdownMenuItem className="flex items-center justify-between w-full cursor-pointer">
                      States
                      <ChevronDown size={16} />
                    </DropdownMenuItem>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50 ml-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full text-left">
                        <DropdownMenuItem className="flex items-center justify-between w-full cursor-pointer">
                          Maharashtra
                          <ChevronDown size={16} />
                        </DropdownMenuItem>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50 ml-2">
                        <DropdownMenuItem asChild>
                          <NavLink to="/mumbai" className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-green-50 cursor-pointer w-full">
                            Mumbai
                          </NavLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <NavLink to="/pune" className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-green-50 cursor-pointer w-full">
                            Pune
                          </NavLink>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full text-left">
                        <DropdownMenuItem className="flex items-center justify-between w-full cursor-pointer">
                          Karnataka
                          <ChevronDown size={16} />
                        </DropdownMenuItem>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50 ml-2">
                        <DropdownMenuItem asChild>
                          <NavLink to="/bengaluru" className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-green-50 cursor-pointer w-full">
                            Bengaluru
                          </NavLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <NavLink to="/hennur" className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-green-50 cursor-pointer w-full">
                            Hennur
                          </NavLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <NavLink to="/koramangala" className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-green-50 cursor-pointer w-full">
                            Koramangala
                          </NavLink>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full text-left">
                        <DropdownMenuItem className="flex items-center justify-between w-full cursor-pointer">
                          West Bengal
                          <ChevronDown size={16} />
                        </DropdownMenuItem>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50 ml-2">
                        <DropdownMenuItem asChild>
                          <NavLink to="/kolkata" className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-green-50 cursor-pointer w-full">
                            Kolkata
                          </NavLink>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full text-left">
                        <DropdownMenuItem className="flex items-center justify-between w-full cursor-pointer">
                          Delhi
                          <ChevronDown size={16} />
                        </DropdownMenuItem>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50 ml-2">
                        <DropdownMenuItem asChild>
                          <NavLink to="/delhi" className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-green-50 cursor-pointer w-full">
                            Delhi
                          </NavLink>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full text-left">
                        <DropdownMenuItem className="flex items-center justify-between w-full cursor-pointer">
                          Gujarat
                          <ChevronDown size={16} />
                        </DropdownMenuItem>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50 ml-2">
                        <DropdownMenuItem asChild>
                          <NavLink to="/ahmedabad" className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-green-50 cursor-pointer w-full">
                            Ahmedabad
                          </NavLink>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </DropdownMenuContent>
                </DropdownMenu>
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
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://www.youtube.com/@HumansOfFootball"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:scale-110"
              title="YouTube"
            >
              <Youtube size={12} className="md:w-3.5 md:h-3.5" />
            </a>
            <a
              href="https://www.instagram.com/humans.of.football/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300 hover:scale-110"
              title="Instagram"
            >
              <Instagram size={12} className="md:w-3.5 md:h-3.5" />
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-green-500/30 py-4 space-y-2">
            <NavLink 
              to="/" 
              end
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) => 
                `${isActive 
                  ? "bg-white text-green-600 font-medium" 
                  : "text-white hover:bg-green-700"
                } transition-colors flex items-center gap-2 px-4 py-3 rounded-md text-sm w-full`
              }
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </NavLink>

            {/* Mobile Locations Menu */}
            <div className="space-y-1">
              <div className="px-4 py-2 text-sm font-medium text-green-200">
                <MapPin className="h-4 w-4 inline mr-2" />
                Locations
              </div>
              <NavLink 
                to="/hennur" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `${isActive 
                    ? "bg-white text-green-600 font-medium" 
                    : "text-white hover:bg-green-700"
                  } transition-colors flex items-center gap-2 px-6 py-2 rounded-md text-sm ml-4`
                }
              >
                <span>Hennur</span>
              </NavLink>
              <NavLink 
                to="/koramangala" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `${isActive 
                    ? "bg-white text-green-600 font-medium" 
                    : "text-white hover:bg-green-700"
                  } transition-colors flex items-center gap-2 px-6 py-2 rounded-md text-sm ml-4`
                }
              >
                <span>Koramangala</span>
              </NavLink>
            </div>

            <NavLink 
              to="/social-media" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) => 
                `${isActive 
                  ? "bg-white text-green-600 font-medium" 
                  : "text-white hover:bg-green-700"
                } transition-colors flex items-center gap-2 px-4 py-3 rounded-md text-sm w-full`
              }
            >
              <Users className="h-4 w-4" />
              <span>Social Media</span>
            </NavLink>

            {/* Mobile Social Links */}
            <div className="flex items-center gap-4 px-4 pt-4 border-t border-green-500/30">
              <span className="text-sm text-green-200">Follow us:</span>
              <a
                href="https://www.youtube.com/@HumansOfFootball"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300"
                title="YouTube"
              >
                <Youtube size={14} />
              </a>
              <a
                href="https://www.instagram.com/humans.of.football/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300"
                title="Instagram"
              >
                <Instagram size={14} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}