import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
// import Image from "next/image"; // Uncomment if using an image

const NoOrg = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6  text-gray-800 p-6">
      {/* Icon Section */}
      <div className="w-24 h-24 flex items-center justify-center bg-purple-100 rounded-full">
        {/* Uncomment if an image is available */}
        {/* <Image src={noOrgIcon} alt="No Org" className="w-12 h-12" /> */}
        <span className="text-purple-500 text-4xl font-semibold">📂</span>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800">
        No Organization Found
      </h1>

      {/* Description */}
      <p className="text-center text-gray-600 text-sm max-w-md">
        To start using the app, you need to create an organization.
        Organizations help you manage your data and collaborate effectively.
      </p>

      {/* Create Organization Button */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-60 py-3 text-white bg-purple-600 hover:bg-purple-700 flex justify-center items-center gap-2 rounded-lg transition duration-200 shadow-md">
            <span>Create Organization</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="p-6 bg-white rounded-lg shadow-lg border max-w-md">
          <CreateOrganization />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NoOrg;
