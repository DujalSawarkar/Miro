import { Spinner } from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useAuth } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";
import Link from "next/link";

const MainContent: React.FC = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="flex flex-col items-center text-center py-20">
      <h2 className="text-4xl font-bold mb-4">
        Welcome to the Innovation Workspace
      </h2>
      <p className="text-gray-600 mb-8">
        A single, AI-powered collaboration platform that helps teams move faster
        from idea to outcome.
      </p>
      <div className="flex space-x-2">
        {isLoading && (
          <p>
            <Spinner />
          </p>
        )}
        {isAuthenticated && (
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg">
            <Link href="./dashboard">Get Started</Link>
          </button>
        )}
        {!isAuthenticated && !isLoading && (
          <SignInButton
            mode="modal"
            afterSignUpUrl="/dashboard"
            afterSignInUrl="/dashboard"
          >
            <Button>Get</Button>
          </SignInButton>
        )}
      </div>
    </div>
  );
};

export default MainContent;
