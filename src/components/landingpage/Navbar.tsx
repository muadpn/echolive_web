import { Activity } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { createClient } from "@/utils/supabase/server";
import { signout } from "@/app/actions/auth";

export default async function Navbar() {
  const supabase = createClient();
  const {
    data: { session },
  } = await (await supabase).auth.getSession();

  return (
    <header className="sticky top-0 z-50 bg-background/50 shadow-lg backdrop-blur-md">
      {" "}
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Activity className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">EchoLive</span>
        </Link>
        <nav className="hidden space-x-8 md:flex">
          <Link
            href="/#features"
            className="text-muted-foreground transition hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-muted-foreground transition hover:text-primary"
          >
            Pricing
          </Link>
          <Link
            href="/docs"
            className="text-muted-foreground transition hover:text-primary"
          >
            Docs
          </Link>
        </nav>
        <div className="flex items-center  space-x-4">
          {session ? (
            <form action={signout}>
              <Button variant="secondary" type="submit">
                Logout
              </Button>
            </form>
          ) : (
            <>
              <Link href="/auth/signin">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="rounded-xl" >
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
