"use client";

import { motion } from "framer-motion";
import { Hourglass, Rocket, Shapes, Sparkles } from "lucide-react";
import type { Clock } from "lucide-react";
import { useState } from "react";

interface FeatureCardProps {
  icon: typeof Clock;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  index,
}: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />
      <div className="relative rounded-xl border border-emerald-900/40 bg-[#0a0f0d] backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/30">
        <div className="p-6">
          <div className="relative mb-6">
            <motion.div
              animate={{
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 10 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <Icon className="h-10 w-10 text-emerald-400" strokeWidth={1.5} />
            </motion.div>
            <motion.div
              className="absolute inset-0"
              animate={{
                scale: isHovered ? 1.5 : 0.8,
                opacity: isHovered ? 0.3 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <h3 className="mb-3 text-xl font-semibold text-white/90">{title}</h3>
          <p className="text-sm leading-relaxed text-zinc-400">{description}</p>

          <motion.div
            className="absolute bottom-0 left-0 bg-gradient-to-r from-emerald-500 to-emerald-500/0"
            initial={{ width: "0%" }}
            animate={{ width: isHovered ? "100%" : "0%" }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default function ComingSoon() {
  const features = [
    {
      icon: Hourglass,
      title: "Session Duration Tracker",
      description:
        "Track how long users spend on your website with detailed session analytics and user flow visualization.",
    },
    {
      icon: Rocket,
      title: "Performance Metrics",
      description:
        "Real-time performance monitoring with intelligent alerts and optimization recommendations.",
    },
    {
      icon: Shapes,
      title: "Engagement Widgets",
      description:
        "Interactive elements and smart popups to boost user engagement and conversion rates.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_50%)]" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-6 py-2 text-sm font-medium text-emerald-400 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4" />
            Coming Soon
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-4xl font-bold text-transparent"
          >
            Upcoming Features
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-zinc-400"
          >
            We&apos;re building the next generation of web live tools.
            Here&apos;s a sneak peek at what&apos;s coming.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
