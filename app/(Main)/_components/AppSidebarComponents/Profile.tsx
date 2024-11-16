import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Settings } from "lucide-react";
import { OrganizationList } from "@clerk/clerk-react"; // Assuming this component is available
import { useUser } from "@clerk/nextjs"; // Assuming you're using Clerk for user data

const Profile = () => {
  const { user } = useUser(); // Fetch the logged-in user data

  return (
    <div className="border-b pb-2 pt-4">
      <Dialog>
        {/* Trigger */}
        <DialogTrigger asChild className="hover:bg-purple-100 ">
          <div className="flex w-full items-center gap-4 cursor-pointer rounded-lg  transition-all ease-in-out duration-200">
            <div className="flex flex-col">
              <span className="text-xl font-semibold text-gray-800">
                {user?.firstName} {user?.lastName}
              </span>
              <span className="text-xs text-gray-500">
                {/* {user?.emailAddresses?.[0]?.email} */}
              </span>
            </div>
            <Settings
              size={16}
              className="ml-auto text-gray-500 hover:text-gray-700 transition-all ease-in-out duration-200"
            />
          </div>
        </DialogTrigger>

        {/* Dialog Content */}
        <DialogContent className="p-6 bg-transparent border-none rounded-lg shadow-lg max-w-lg w-full flex justify-center items-center">
          {/* Organization List */}
          <OrganizationList
            afterCreateOrganizationUrl="/dashboard/:slug"
            afterSelectPersonalUrl="/user/:id"
            afterSelectOrganizationUrl="/dashboard/:slug"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profile;
