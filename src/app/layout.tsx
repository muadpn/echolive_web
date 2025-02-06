import "../styles/globals.css";
import { type Metadata } from "next";
import { TRPCReactProvider } from "@/trpc/react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/landingpage/Navbar";
import Footer from "@/components/landingpage/Footer";
import { Toaster } from "@/components/ui/toaster";

const catamaran = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EchoLive - Real-time Web Widgets",
  description:
    "Powerful real-time website tools and visitor tracking for modern web applications",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={catamaran.className}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <TRPCReactProvider>
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
