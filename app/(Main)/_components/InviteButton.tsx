import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserPlus } from "lucide-react";

export default function InviteButton() {
  return (
    <Link href="/dashboard/organization-members" passHref>
      <Button
        // variant="outline"
        className="flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-md  transition-all"
      >
        <UserPlus size={16} className="" />
        Invite members
      </Button>
    </Link>
  );
}
