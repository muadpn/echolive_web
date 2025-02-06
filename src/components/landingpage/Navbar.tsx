import { Activity } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <header className=" bg-background/50 shadow-lg backdrop-blur-md sticky top-0 z-50">
      {" "}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Activity className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">EchoLive</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/#features"
            className="text-muted-foreground hover:text-primary transition"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-muted-foreground hover:text-primary transition"
          >
            Pricing
          </Link>
          <Link
            href="/docs"
            className="text-muted-foreground hover:text-primary transition"
          >
            Docs
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/signup">
            <Button className="rounded-xl">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
