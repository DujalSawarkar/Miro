import React from "react";
import BoardList from "./BoardList";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface Board {
  title: string;
  orgId: string; // Required
  authorId: string; // Required
  authorName: string;
  imageUrl: string;
  viewOnly?: boolean; // Optional
}

const boards: Board[] = [
  {
    title: "Untitled",
    orgId: "org123", // Add required orgId
    authorId: "auth123", // Add required authorId
    authorName: "Dujal Sawarkar",
    imageUrl: "/Boardimgs/1.svg",
  },
  {
    title: "SIH",
    orgId: "org456",
    authorId: "auth456",
    authorName: "Aishwarya Patil",
    imageUrl: "/Boardimgs/2.svg",
    viewOnly: true,
  },
  {
    title: "Untitled",
    orgId: "org789",
    authorId: "auth789",
    authorName: "Dujal Sawarkar",
    imageUrl: "/Boardimgs/3.svg",
  },
];

const BoardsPage: React.FC = () => {
  return (
    <div className="  p-6">
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
      <BoardList boards={boards} />
    </div>
  );
};

export default BoardsPage;
