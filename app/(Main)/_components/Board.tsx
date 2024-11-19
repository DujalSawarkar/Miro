import React from "react";
import BoardList from "./BoardList";
import { Button } from "@/components/ui/button";
import { Divide, Plus } from "lucide-react";
import { api } from "@/convex/_generated/api"; // Convex-generated API import
import { useQuery } from "convex/react";
import { useOrganization } from "@clerk/nextjs";
import { Spinner } from "@/components/Spinner";

const BoardsPage: React.FC = () => {
  const { organization } = useOrganization(); // Get organization from Clerk

  // Check if organization exists before using `useQuery`
  const organizationId = organization?.id ?? "";

  // Fetch boards from Convex
  const boards = useQuery(api.board.get, { organizationId });
  console.log(boards);
  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Boards in this Team</h1>
        <div className="flex space-x-2">
          <Button>Explore templates</Button>
          <Button>
            <Plus /> Create new
          </Button>
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <select className="bg-gray-100 px-3 py-2 rounded-lg border">
            <option>All boards</option>
            <option>My boards</option>
          </select>
          <select className="bg-gray-100 px-3 py-2 rounded-lg border">
            <option>Owned by anyone</option>
            <option>Owned by me</option>
          </select>
        </div>
        <select className="bg-gray-100 px-3 py-2 rounded-lg border">
          <option>Last opened</option>
          <option>Alphabetical</option>
        </select>
      </div>

      {/* Boards List */}
      {boards ? (
        <BoardList boards={boards} />
      ) : (
        // <Loader
        <div className="h-[full] w-[full] flex justify-center items-center">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default BoardsPage;
