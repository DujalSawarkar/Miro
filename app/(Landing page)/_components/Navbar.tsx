import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";

const NavBar: React.FC = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md rounded-lg mx-4 mt-4">
      {/* Logo and Brand Name */}
      <div className="flex items-center space-x-3">
        <img src="/logo.png" alt="Miro Logo" className="w-10 h-10" />{" "}
        {/* Updated Logo Size */}
        <h1 className="font-semibold text-xl text-gray-800">Miro</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        {["Product", "Solutions", "Resources", "Pricing"].map((link) => (
          <a
            key={link}
            href="#"
            className="text-gray-600 hover:text-purple-600 font-medium transition duration-300"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-purple-600 font-medium transition duration-300">
          Contact Sales
        </button>
        <SignedOut>
          <SignInButton afterSignUpUrl="/" afterSignInUrl="/" mode="redirect">
            <Button>Log In</Button>
          </SignInButton>
        </SignedOut>
        <SignedOut>
          <SignUpButton mode="modal">
            <Button>Sign Up</Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default NavBar;
