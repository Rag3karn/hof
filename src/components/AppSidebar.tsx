import { MapPin, ChevronRight, ChevronDown, Users } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const locationItems = [{
  title: "Hennur",
  url: "/",
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
      className={`${isExpanded ? "w-48" : "w-14"} bg-primary text-primary-foreground transition-all duration-300 ease-in-out`} 
      collapsible="none"
    >
      <SidebarContent className="p-2">
        {/* Main HOF Header */}
        <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
          <CollapsibleTrigger className="flex w-full items-center justify-between p-2 hover:bg-primary/80 rounded-md transition-colors">
            <span className={`text-sm font-bold ${!isExpanded ? "sr-only" : ""}`}>
              HOF
            </span>
            <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`} />
          </CollapsibleTrigger>
          
          <CollapsibleContent className="transition-all duration-300 ease-in-out">
            <div className="space-y-2 mt-2">
              
              {/* Locations Dropdown */}
              <Collapsible open={isLocationsOpen} onOpenChange={setIsLocationsOpen}>
                <CollapsibleTrigger className="flex w-full items-center justify-between p-2 hover:bg-primary/80 rounded-md transition-colors">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm font-medium">Locations</span>
                  </div>
                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isLocationsOpen ? "rotate-180" : ""}`} />
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
                                    ? "bg-primary-foreground text-primary font-medium" 
                                    : "hover:bg-primary/80"
                                  } transition-colors`
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
                              ? "bg-primary-foreground text-primary font-medium" 
                              : "hover:bg-primary/80"
                            } transition-colors`
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
    </Sidebar>
  );
}