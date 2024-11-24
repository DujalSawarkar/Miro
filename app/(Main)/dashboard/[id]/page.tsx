"use client";

import React, { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import Image from "next/image";
import { useParams } from "next/navigation";
import BoardsPage from "../../_components/Board";

const BoardTemplates = () => {
  const { id } = useParams();
  console.log(id);
  const { organization } = useOrganization();
  const createBoard = useMutation(api.board.create);
  const [loading, setLoading] = useState(false);

  const handleCreateBoard = async (templateName: string) => {
    setLoading(true);
    try {
      const orgId = organization?.id || ""; // Get organization ID from Clerk
      const title = templateName === "Blank board" ? "Untitled" : templateName; // Set default title if blank

      // Create board using the selected template
      const board: any = await createBoard({ orgId, title });

      alert(`Board created successfully: ${board.title}`);
    } catch (error) {
      console.error("Error creating board:", error);
      alert("Failed to create board");
    } finally {
      setLoading(false);
    }
  };

  const templates = [
    { name: "Blank board", icon: "/Boardimgs/1.svg", isPlus: true },
    { name: "Flowchart", icon: "/Boardimgs/2.svg" },
    { name: "Mind Map", icon: "/Boardimgs/3.svg" },
    { name: "Kanban Framework", icon: "/Boardimgs/4.svg" },
    { name: "Quick Retrospective", icon: "/Boardimgs/5.svg" },
    { name: "Quick Retrospective", icon: "/Boardimgs/1.svg" },
  ];

  if (id == "Boards") {
    // if(board)
    return (
      <div>
        <div className="flex gap-4 bg-gray-200 p-6 rounded-lg ">
          {templates.map((template, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2"
              style={{ width: "16.66%" }} // Fixed width of 1/6 screen for each board
            >
              {/* Board */}
              <div
                className="w-full h-[110px] bg-gray-100 border border-gray-300 rounded-lg flex justify-center items-center hover:shadow-md cursor-pointer"
                onClick={() => handleCreateBoard(template.name)}
              >
                {template.isPlus ? (
                  <div className="w-full h-full  rounded-lg flex justify-center items-center">
                    <span className="text-6xl text-gray-600">+</span>
                  </div>
                ) : (
                  <Image
                    src={template.icon}
                    alt={template.name}
                    width={100}
                    height={100}
                    className="object-center"
                  />
                )}
              </div>

              {/* Title */}
              <p className="text-center text-gray-600 text-sm">
                {template.name}
              </p>
            </div>
          ))}
        </div>
        <BoardsPage />
      </div>
    );
  }
  if (id == "favourites") return <div>fav boards</div>;
};

export default BoardTemplates;
