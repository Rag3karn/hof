import { MapPin, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const items = [
  { title: "Hennur", url: "/", icon: MapPin },
  { title: "Koramangala", url: "/koramangala", icon: MapPin },
];

export function AppSidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Sidebar className={`${isExpanded ? "w-60" : "w-14"} bg-green-500 text-black`} collapsible="none">
      <SidebarContent>
        <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
          <CollapsibleTrigger className="flex w-full items-center justify-between p-2 hover:bg-muted/50 rounded-md">
            <span className={`text-sm font-medium ${!isExpanded ? "sr-only" : ""}`}>
              Locations
            </span>
            <ChevronRight 
              className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-90" : ""}`} 
            />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <NavLink 
                          to={item.url} 
                          end
                          className={({ isActive }) =>
                            isActive 
                              ? "bg-muted text-primary font-medium" 
                              : "hover:bg-muted/50"
                          }
                        >
                          <item.icon className="mr-2 h-4 w-4" />
                          <span>{item.title}</span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </CollapsibleContent>
        </Collapsible>
      </SidebarContent>
    </Sidebar>
  );
}