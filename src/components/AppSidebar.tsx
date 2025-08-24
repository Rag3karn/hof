import { MapPin, ChevronRight, ChevronDown, Users, Home, Youtube, Instagram } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter } from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const locationItems = [{
  title: "Hennur",
  url: "/hennur",
  icon: MapPin
}, {
  title: "Koramangala", 
  url: "/koramangala",
  icon: MapPin
}];

export function AppSidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);

  return (
        <Sidebar 
      className={`${isExpanded ? "w-48" : "w-14"} bg-green-600 text-white transition-all duration-300 ease-in-out`} 
      collapsible="none"
    >
      <SidebarContent className="p-2">
        {/* Main HOF Header */}
        <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
          <CollapsibleTrigger className="flex w-full items-center justify-between p-2 hover:bg-green-700 rounded-md transition-colors text-white">
            <span className={`text-sm font-bold ${!isExpanded ? "sr-only" : ""}`}>
              HOF
            </span>
            <ChevronRight className={`h-4 w-4 text-white transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`} />
          </CollapsibleTrigger>
          
          <CollapsibleContent className="transition-all duration-300 ease-in-out">
            <div className="space-y-2 mt-2">
              
              {/* Home Link */}
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <NavLink 
                          to="/" 
                          end
                          className={({ isActive }) => 
                            `${isActive 
                              ? "bg-white text-green-600 font-medium" 
                              : "bg-green-500 text-white hover:bg-green-700"
                            } transition-colors flex items-center p-2 rounded-md`
                          }
                        >
                          <Home className="mr-2 h-4 w-4" />
                          <span className="text-sm font-medium">Home</span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              {/* Locations Dropdown */}
              <Collapsible open={isLocationsOpen} onOpenChange={setIsLocationsOpen}>
                <CollapsibleTrigger className="flex w-full items-center justify-between p-2 hover:bg-green-700 rounded-md transition-colors text-white">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-white" />
                    <span className="text-sm font-medium text-white">Locations</span>
                  </div>
                  <ChevronDown className={`h-3 w-3 text-white transition-transform duration-200 ${isLocationsOpen ? "rotate-180" : ""}`} />
                </CollapsibleTrigger>
                
                <CollapsibleContent className="transition-all duration-200 ease-in-out">
                  <SidebarGroup className="ml-2 mt-1">
                    <SidebarGroupContent>
                      <SidebarMenu>
                        {locationItems.map(item => (
                          <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                              <NavLink 
                                to={item.url} 
                                end 
                                className={({ isActive }) => 
                                  `${isActive 
                                    ? "bg-white text-green-600 font-medium" 
                                    : "bg-green-500 text-white hover:bg-green-700"
                                  } transition-colors flex items-center p-2 rounded-md`
                                }
                              >
                                <item.icon className="mr-2 h-3 w-3" />
                                <span className="text-sm">{item.title}</span>
                              </NavLink>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </CollapsibleContent>
              </Collapsible>

              {/* Social Media Link */}
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <NavLink 
                          to="/social-media" 
                          className={({ isActive }) => 
                            `${isActive 
                              ? "bg-white text-green-600 font-medium" 
                              : "bg-green-500 text-white hover:bg-green-700"
                            } transition-colors flex items-center p-2 rounded-md`
                          }
                        >
                          <Users className="mr-2 h-4 w-4" />
                          <span className="text-sm font-medium">Social Media</span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

            </div>
          </CollapsibleContent>
        </Collapsible>
      </SidebarContent>
      
      <SidebarFooter>
        <div className="p-3 border-t border-green-500/30">
          <div className="mb-3">
            <h4 className="text-xs font-semibold text-center animate-pulse text-white">
              🌟 Follow Us
            </h4>
          </div>
          <div className="flex justify-center gap-3">
            <a
              href="https://www.youtube.com/@HumansOfFootball"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-red-500/25"
              title="YouTube"
            >
              <Youtube size={14} />
            </a>
            <a
              href="https://www.instagram.com/humans.of.football/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/25"
              title="Instagram"
            >
              <Instagram size={14} />
            </a>
          </div>
          {isExpanded && (
            <div className="mt-2 text-xs text-center text-green-100">
              Humans of Football
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}