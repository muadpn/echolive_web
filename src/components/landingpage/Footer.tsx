import { Activity } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Activity className="h-6 w-6 text-primary" />
            <span className="font-semibold">EchoLive</span>
          </div>
          <div className="text-sm flex justify-between gap-6 text-gray-400 cursor-pointer">
            <p className="hover:text-white ">Terms of Service</p>
            <p className="hover:text-white ">Support</p>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 EchoLive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
