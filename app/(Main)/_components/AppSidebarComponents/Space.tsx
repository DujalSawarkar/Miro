import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { CreateOrganization } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Plus } from "lucide-react"; // Assuming you're using lucide-react for icons

export function SidebarSpaces() {
  return (
    <SidebarGroup className="pt-4 px-4">
      <SidebarGroupLabel className="text-xs font-semibold text-gray-500 mb-2">
        Spaces
      </SidebarGroupLabel>

      <SidebarGroupContent>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full flex justify-center items-center gap-1 p-2 rounded-lg border-gray-200 hover:border-purple-500"
            >
              <Plus size={20} className="text-gray-700" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="p-0 bg-transparent border-none">
            <CreateOrganization />
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
