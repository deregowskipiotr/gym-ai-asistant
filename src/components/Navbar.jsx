"use client";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { DumbbellIcon, HomeIcon, MenuIcon, XIcon, ZapIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="p-1 bg-primary/10 rounded">
            <ZapIcon className="w-4 h-4 text-primary" />
          </div>
          <span>
            Gym<span className="text-primary">Assistant</span>.AI
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          {isSignedIn && <UserButton className="mr-4" />}
          <div className="cursor-pointer" onClick={toggleMenu}>
            {isMenuOpen ? (
              <XIcon className="w-8 h-8 hover:text-primary" />
            ) : (
              <MenuIcon className="w-8 h-8 hover:text-primary" />
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav
          className={`absolute top-0 left-0 right-0 bg-background/90 backdrop-blur-md border-b border-border p-4 flex-col items-center gap-5 ${isMenuOpen ? "flex" : "hidden"} md:flex md:flex-row md:static md:bg-transparent md:backdrop-blur-none md:border-none`}
        >
          <div className="flex justify-between items-center w-full md:hidden">
            <Link href="/" className="flex items-center">
              <div className="p-1 bg-primary/10 rounded">
                <ZapIcon className="w-4 h-4 text-primary" />
              </div>
              <span>
                Gym<span className="text-primary">Assistant</span>.AI
              </span>
            </Link>
            <div className="flex items-center">
              <div className="cursor-pointer" onClick={toggleMenu}>
                <XIcon className="w-8 h-8 hover:text-primary" />
              </div>
            </div>
          </div>

          {isSignedIn ? (
            <>
              <div className="flex flex-col gap-8 ml-10 md:flex-row md:gap-5 items-center">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                >
                  <HomeIcon size={16} />
                  <span>Home</span>
                </Link>

                <Link
                  href="/generate-program"
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                >
                  <DumbbellIcon size={16} />
                  <span>Generate</span>
                </Link>

                <Link
                  href="/profile"
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                >
                  <UserIcon size={16} />
                  <span>Profile</span>
                </Link>
                <Button
                  asChild
                  variant="outline"
                  className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                >
                  <Link href="/generate-program">Get Started</Link>
                </Button>

                {/* UserButton for larger screens */}
                <div className="hidden md:block">
                  <UserButton />
                </div>
              </div>
            </>
          ) : (
            <>
              <SignInButton>
                <Button
                  variant={"outline"}
                  className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                >
                  Sign in
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
