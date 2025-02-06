"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CodeBlock() {
  const [copied, setCopied] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState(0);

  const tags = [
    { name: "Next.js", color: "from-emerald-500 to-emerald-700" },
    { name: "React", color: "from-cyan-500 to-cyan-700" },
    { name: "Vue", color: "from-green-500 to-green-700" },
    { name: "Angular", color: "from-red-500 to-red-700" },
    { name: "Svelte", color: "from-orange-500 to-orange-700" },
  ];

  useEffect(() => {
    const tagInterval = setInterval(() => {
      setActiveTag((prev) => (prev + 1) % tags.length);
    }, 3000);

    return () => clearInterval(tagInterval);
  }, []);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-32 relative overflow-hidden hero-gradient">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(64,64,64,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none " />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 relative "
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center ">
          <motion.div variants={itemVariants} className="">
            <div className="mb-6 ">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Works with
                <br />
                <span className=" relative  bg-clip-text text-transparent bg-gradient-to-r from-primary via-emerald-500 to-emerald-700">
                  your stack
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "40%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute h-px bg-gradient-to-r from-primary/50 to-transparent top-5 "
                  />
                </span>
              </h2>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-zinc-400 mb-8"
            >
              Integrate it into your language or framework within minutes and
              unlock a simpler developer workflow.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              {tags.map((tag, index) => (
                <motion.div
                  key={tag.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: index === activeTag ? 1 : 0.5,
                    scale: index === activeTag ? 1.05 : 1,
                    background:
                      index === activeTag
                        ? "linear-gradient(to right, var(--primary), var(--primary-foreground))"
                        : "rgba(255,255,255,0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium cursor-pointer",
                    "hover:opacity-80 transition-all duration-300"
                  )}
                >
                  {tag.name}
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link
                href="/docs"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "cursor-pointer group relative overflow-hidden",
                  "border-primary/20 hover:border-primary/50"
                )}
              >
                View Documentation
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative"
            // whileHover={{ scale: 1.0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-r from-primary/20 via-emerald-500/10 to-transparent rounded-xl blur-3xl"
            />

            <div className="glass-card rounded-xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm relative z-10">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/50">
                <div className="flex gap-1.5">
                  {["bg-red-500", "bg-yellow-500", "bg-green-500"].map(
                    (color, i) => (
                      <motion.div
                        key={i}
                        className={`w-3 h-3 rounded-full ${color}`}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      />
                    )
                  )}
                </div>
                <div className="text-xs text-emerald-400 font-mono">
                  example.ts
                </div>
              </div>

              <div className="relative group">
                <pre className="p-6 text-sm overflow-x-auto bg-black/40">
                  <code className="language-typescript text-zinc-100 font-mono">{`import { EchoBits } from '@echobits/client'

const analytics = new EchoBits({
  siteId: 'your-site-id',
})

// Initialize real-time visitor tracking
analytics.track({
  element: '#visitor-count',
  updateInterval: 1000,
})`}</code>
                </pre>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute right-2 top-2"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/50 border border-white/10 hover:bg-black/70"
                    onClick={() =>
                      copyToClipboard(
                        `import { EchoBits } from '@echobits/client'...`,
                        "code"
                      )
                    }
                  >
                    {copied === "code" ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4 text-zinc-400" />
                    )}
                  </Button>
                </motion.div>
              </div>
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-6 flex items-center justify-between px-4"
            >
              <div className="text-sm text-zinc-400 font-medium">
                Ready to use in under 3 minutes
              </div>
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="w-2 h-2 rounded-full bg-emerald-400"
                />
                <span className="text-xs text-emerald-400 font-medium">
                  Live Preview
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
