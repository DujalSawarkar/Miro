import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { CreateOrganization } from "@clerk/nextjs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react"; // Assuming you're using lucide-react for icons

export function SidebarSpaces() {
  return (
    <div className="pt-4 ">
      <SidebarGroupContent>
        {/* Dialog for Creating an Organization */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full flex justify-center items-center gap-1 rounded-lg  hover:border-purple-500">
              <Plus size={20} className="text-white" />
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-transparent border-none flex justify-center items-center">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </SidebarGroupContent>
    </div>
  );
}
