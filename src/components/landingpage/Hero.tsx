import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import SplitText from "../ui/Splittext";
import ShinyText from "../ui/Shinytext";
import { Spotlight } from "../ui/Spotlight";


export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-20">
      <div className="grid grid-cols-1">
        <div>
          <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60"
            fill="white"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#000000] to-[#001716]" />
          <div className="container relative mx-auto px-4">
            <div className="bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium">
              {/* <Sparkles className="h-4 w-4" /> */}
              <ShinyText
                text="The most affordable real-time widgets for your website"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </div>
            <h1 className="mb-6 max-w-md text-5xl font-semibold tracking-tight md:max-w-xl md:text-7xl">
              {/* <SplitText
                text="Real-time Widgets Made Simple"
                className="mb-6 text-5xl font-semibold tracking-tight md:text-7xl"
                delay={60}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                threshold={0.2}
                rootMargin="-50px"
              /> */}
              <br />
            </h1>
            <p className="text-muted-foreground mb-8 max-w-2xl text-xl">
              Track your website visitors in real-time with our powerful and
              easy-to-integrate widgets. Perfect for modern web applications.
            </p>
            <div className="flex justify-start gap-4">
              <Link href="/signup">
                <Button className="gap-2 rounded-xl">
                  Start for Free <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#demo">
                <Button variant="ghost" className="rounded-xl border">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
