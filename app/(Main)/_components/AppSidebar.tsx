import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import Profile from "./AppSidebarComponents/Profile";
import { SidebarSpaces } from "./AppSidebarComponents/Space";
import { List } from "./AppSidebarComponents/List";
// import { Organization } from "@clerk/nextjs/server";
import { OrganizationSwitcher } from "@clerk/nextjs";

export function AppSidebar() {
  return (
    <Sidebar className="bg-purple-600 shadow-lg border-r border-gray-200">
      <SidebarContent className="p-4 space-y-6">
        {/* User Profile Section */}
        <Profile />

        {/* List Section */}
        <List />

        {/* Spaces Section */}
        <SidebarSpaces />

        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              },
              organizationSwitcherTrigger: {
                padding: "6px",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                justifyContent: "space-between",
                backgroundColor: "white",
              },
            },
          }}
        />
      </SidebarContent>
    </Sidebar>
  );
}
