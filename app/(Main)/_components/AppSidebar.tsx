import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { OrganizationSwitcher } from "@clerk/nextjs";
import Profile from "./AppSidebarComponents/Profile";
import { List } from "./AppSidebarComponents/List";
import { SidebarSpaces } from "./AppSidebarComponents/Space";

export function AppSidebar() {
  return (
    <Sidebar className="w-64 h-screen bg-white border-r border-gray-200 shadow-md">
      <SidebarContent className=" p-4 space-y-8">
        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <Profile />
        </div>

        {/* Organization Switcher */}
        <div className="flex flex-col ">
          <h3 className="text-sm font-semibold text-gray-700 pb-2">
            Switch Organization
          </h3>
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
                  color: "white",
                  padding: "8px",
                  paddingRight: "30px",
                  paddingLeft: "30px",
                  borderRadius: "6px",
                  backgroundColor: "#874ced",
                  border: "1px solid #E5E7EB",
                  transition: "all 0.2s ease-in-out",
                  ":hover": {
                    backgroundColor: "#F3E8FF", // Light purple background
                    color: "#6B21A8", // Purple text on hover
                  },
                },
              },
            }}
          />
        </div>

        {/* List Section */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-700">Your Lists</h3>
          <List />
        </div>

        {/* Spaces Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700">Spaces</h3>
          <SidebarSpaces />
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
