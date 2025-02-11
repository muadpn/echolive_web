import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import ShinyText from "../ui/Shinytext";
import SplitText from "../ui/Splittext";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-20">
      <div className="grid grid-cols-1">
        <div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E132D] via-[#010102be] to-[#0f0925]" />
          <div className="container relative mx-auto px-4">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <ShinyText
                text="The most affordable real-time widgets for your website"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </div>
            <div className="mb-6 max-w-md text-5xl font-semibold tracking-tight md:max-w-xl md:text-7xl lg:max-w-4xl">
              <SplitText
                text="Real-time Widgets Made Simple"
                className="mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-300 bg-clip-text text-5xl font-semibold tracking-tight text-purple-100 md:text-7xl lg:text-8xl"
                delay={60}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                threshold={0.2}
                rootMargin="-50px"
              />
              <br />
            </div>
            <p className="mb-8 max-w-2xl text-xl text-muted-foreground">
              Track your website visitors in real-time with our powerful and
              easy-to-integrate widgets. Perfect for modern web applications.
            </p>
            <div className="flex justify-start gap-4">
              <Link
                href="/auth/signup"
                className={cn(
                  buttonVariants(),
                  "gap-2 rounded-xl font-semibold text-white",
                )}
              >
                Start for Free <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#demo"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "rounded-xl border",
                )}
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
