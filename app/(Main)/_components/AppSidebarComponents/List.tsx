import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, Clock, Star } from "lucide-react";

export function List() {
  return (
    <SidebarGroup className="pt-4 ">
      <SidebarGroupContent>
        <SidebarMenu className="space-y-2">
          {/* Home */}
          <SidebarMenuItem className="mb-1">
            <SidebarMenuButton className="flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
              <Home size={16} className="text-gray-700" />
              <span className="text-sm font-medium text-gray-700">Home</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem className="mb-1">
          {/* Recent */}
            <SidebarMenuButton className="flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
              <Clock size={16} className="text-gray-700" />
              <span className="text-sm font-medium text-gray-700">Recent</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Starred */}
          <SidebarMenuItem>
            <SidebarMenuButton className="flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
              <Star size={16} className="text-gray-700" />
              <span className="text-sm font-medium text-gray-700">Starred</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
