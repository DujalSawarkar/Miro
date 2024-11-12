"use client";

import { useConvexAuth } from "convex/react";
import React from "react";
import FloatingButton from "./_components/FloatingButton";
import ChatBubbles from "./_components/ChatBubbles";
import MainContent from "./_components/MainContent";
import NavBar from "./_components/Navbar";
import { Spinner } from "@/components/Spinner";

const Home = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <>
      {isLoading && (
        <div className="h-[100vh] w-full flex items-center justify-center">
          <Spinner size={"lg"} />
        </div>
      )}
      {!isLoading && (
        <div>
          <title>Miro Innovation Workspace</title>
          <meta
            name="description"
            content="A single, AI-powered collaboration platform for teams."
          />

          <NavBar />
          <MainContent />
          <ChatBubbles />
          <FloatingButton />
        </div>
      )}
    </>
  );
};

export default Home;
