import { DashboardNav } from "@/components/dashboard/nav";
import { UserNav } from "@/components/dashboard/user-nav";
import { Activity } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="flex h-16 items-center px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Activity className="h-6 w-6" />
            <span className="font-bold text-xl">EchoLive</span>
          </Link>
          <nav className="flex items-center space-x-6 mx-6">
            <DashboardNav />
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </header>
      <div className="flex-1 flex">{children}</div>
    </div>
  );
}
