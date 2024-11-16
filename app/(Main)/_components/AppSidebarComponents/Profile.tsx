import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Settings } from "lucide-react";
import { OrganizationList } from "@clerk/clerk-react"; // Assuming this component is available
import { useUser } from "@clerk/nextjs"; // Assuming you're using Clerk for user data

const Profile = () => {
  const { user } = useUser(); // Fetch the logged-in user data
  console.log(user);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer border-b pb-4">
          <div className="flex flex-col">
            <span className="text-sm font-semibold">
              {user?.firstName} {user?.lastName}
            </span>
            <span className="text-xs text-gray-500">
              {/* {user?.emailAddresses?.[0]?.email} */}
            </span>
          </div>
          <Settings size={16} className="ml-auto text-gray-500" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-transparent p-0">
        <OrganizationList
          afterCreateOrganizationUrl="/dashboard/:slug"
          afterSelectPersonalUrl="/user/:id"
          afterSelectOrganizationUrl="/dashboard/:slug"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
