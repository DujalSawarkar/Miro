import { Gift, Bell, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OrganizationProfile, UserButton } from "@clerk/clerk-react"; // Importing Clerk's UserButton component
// import Link from "next/link";
import InviteButton from "./InviteButton";

export function TopNavBar() {
  return (
    <div className="flex items-center justify-between p-4  shadow-md h-20 w-full bg-white ">
      {/* Logo and FREE Badge */}
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-gray-800">Miro Clone</span>
        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
          FREE
        </span>
      </div>
      <div className="flex items-center gap-3">
        {/* Invite Members Button */}
        <InviteButton />

        {/* Upgrade Button */}
        <Button className="text-sm font-medium text-white  px-3 py-1 rounded-md">
          Upgrade
        </Button>

        {/* Gift Icon */}
        <Gift
          size={20}
          className="text-gray-600 hover:text-gray-800 cursor-pointer"
        />

        {/* Notification Icon */}
        <Bell
          size={20}
          className="text-gray-600 hover:text-gray-800 cursor-pointer"
        />

        {/* Clerk User Button */}
        <UserButton
          appearance={{
            elements: {
              avatarBox: "w-8 h-8", // Adjust the avatar size
            },
          }}
        />
      </div>
    </div>
  );
}
