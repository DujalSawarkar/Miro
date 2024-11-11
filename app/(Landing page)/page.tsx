"use client";

import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import React from "react";

const Main = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>Get Started</Button>
        </SignInButton>
      )}
      {isAuthenticated && !isLoading && <Button>WE are on right track</Button>}
    </>
  );
};

export default Main;
