import Footer from "@/components/landingpage/Footer";
import { ThemeProvider } from "@/providers/theme-provider";
import { TRPCReactProvider } from "@/trpc/react";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "../styles/globals.css";
import Navbar from "@/components/landingpage/Navbar";

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
    <html lang="en" className={catamaran.className} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <TRPCReactProvider>
            <Navbar />
            {children}
            <Toaster expand richColors />
            <Footer />
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
