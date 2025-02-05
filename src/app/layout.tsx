import "@/styles/globals.css";
import { type Metadata } from "next";
import { TRPCReactProvider } from "@/trpc/react";
import { Catamaran } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";

const catamaran = Catamaran({ subsets: ["latin"] });

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
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
