"use client";

import { motion, type Variants } from "framer-motion";
import { type LucideIcon, Hourglass, Rocket, Shapes, Sparkles } from "lucide-react";

// Types
interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureCardProps extends Feature {
  index: number;
}

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay }
  })
};

const iconAnimation: Variants = {
  idle: { scale: 1, rotate: 0 },
  hover: { scale: 1.1, rotate: 10 }
};

// Constants
const FEATURES: Feature[] = [
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

// Components
const FeatureCard = ({ icon: Icon, title, description, index }: FeatureCardProps) => (
  <motion.div
    variants={fadeInUp}
    custom={index * 0.1}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="group relative"
  >
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 via-emerald-500/5 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
    
    <div className="relative rounded-xl border border-purple-900/40 bg-[#0e0f21] p-6 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/30">
      <motion.div 
        className="mb-6"
        variants={iconAnimation}
        initial="idle"
        whileHover="hover"
      >
        <Icon className="h-10 w-10 text-purple-400" strokeWidth={1.5} />
      </motion.div>

      <h3 className="mb-3 text-xl font-semibold text-white/90">
        {title}
      </h3>
      
      <p className="text-sm leading-relaxed text-purple-200/60">
        {description}
      </p>
    </div>
  </motion.div>
);

const HeaderBadge = () => (
  <motion.div
    variants={fadeInUp}
    className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-6 py-2 text-sm font-medium text-purple-400 backdrop-blur-sm"
  >
    <Sparkles className="h-4 w-4" />
    Coming Soon
  </motion.div>
);

// Main Component
export default function ComingSoon() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(81,51,133,0.05),transparent_50%)]" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="mb-16 text-center">
          <HeaderBadge />

          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            custom={0.1}
            viewport={{ once: true }}
            className="mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-4xl font-bold text-transparent"
          >
            Upcoming Features
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-purple-200/60"
          >
            We&apos;re building the next generation of web live tools.
            Here&apos;s a sneak peek at what&apos;s coming.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}