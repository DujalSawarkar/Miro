import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function List() {
  // State to track the active menu
  const [activeMenu, setActiveMenu] = useState<"boards" | "starred">("boards");

  return (
    <SidebarGroup className="pt-4">
      <SidebarGroupContent>
        <SidebarMenu className="space-y-2">
          {/* Boards */}
          <Link href="/dashboard/Boards">
            <SidebarMenuItem className="mb-1">
              <SidebarMenuButton
                onClick={() => setActiveMenu("boards")} // Update state on click
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 ${
                  activeMenu === "boards"
                    ? "bg-gray-200 text-gray-800"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <Home
                  size={16}
                  className={`${
                    activeMenu === "boards"
                      ? "text-red-600 "
                      : "text-gray-700"
                  }`}
                />
                <span
                  className={`text-sm font-medium ${
                    activeMenu === "boards" ? "text-gray-900" : "text-gray-700"
                  }`}
                >
                  Boards
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </Link>

          {/* Starred */}
          <Link href="/dashboard/favourites">
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => setActiveMenu("starred")} // Update state on click
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200  focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 ${
                  activeMenu === "starred"
                    ? "bg-gray-200 text-gray-800"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <Star
                  size={16}
                  className={`${
                    activeMenu === "starred"
                      ? "text-red-600 "
                      : "text-gray-700 "
                  }`}
                />
                <span
                  className={`text-sm font-medium ${
                    activeMenu === "starred" ? "text-gray-900" : "text-gray-700"
                  }`}
                >
                  Starred
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </Link>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
