import { OrganizationProfile } from "@clerk/nextjs";

export default function OrganizationMembersPage() {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-transparent">
      <OrganizationProfile routing="hash" />
    </div>
  );
}
