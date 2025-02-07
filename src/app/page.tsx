import CodeBlock from "@/components/landingpage/CodeBlock";
import ComingSoon from "@/components/landingpage/ComingSoon";
import Features from "@/components/landingpage/Features";
import Hero from "@/components/landingpage/Hero";
import Navbar from "@/components/landingpage/Navbar";
import Pricing from "@/components/landingpage/Pricing";
import Privacy from "@/components/landingpage/Privacy";
import { HydrateClient } from "@/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col">
        <div className="flex-grow">
          <Navbar />
          <Hero />
          <CodeBlock />
          <Features />
          <Privacy />
          <ComingSoon />
          <Pricing />
        </div>
      </main>
    </HydrateClient>
  );
}
