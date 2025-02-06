"use client"

import { Database, Eye, Lock, Shield } from "lucide-react"
import { motion } from "framer-motion"

export default function Privacy() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0a021f1f] to-[#120d2628]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(128,90,213,0.1),transparent_60%)] pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-purple-800/50 text-purple-300 px-6 py-2 rounded-full text-sm font-medium mb-8 border border-purple-600 backdrop-blur-sm">
            <Lock className="h-4 w-4" />
            Privacy First, Always
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Zero Data Collection
          </h2>
          <p className="text-xl text-zinc-400">
            We believe in absolute privacy. Our widgets only count visitors - nothing more, nothing less.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Eye,
              title: "No Personal Data",
              description: "We never collect, store, or process any personal information from your visitors.",
            },
            {
              icon: Database,
              title: "Just Numbers",
              description: "Only anonymous visitor counts - no cookies, no tracking, no fingerprinting.",
            },
            {
              icon: Shield,
              title: "GDPR Friendly",
              description: "No consent banners needed. Our widgets are 100% compliant with privacy regulations.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-700/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-[#120d26]/70 p-8 rounded-xl border border-purple-700/50 backdrop-blur-lg hover:border-purple-400 transition-colors duration-300 shadow-lg shadow-purple-900/20">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent rounded-xl" />
                <item.icon className="h-10 w-10 text-purple-300 mb-4 relative" />
                <h3 className="text-lg font-semibold mb-3 text-white relative">{item.title}</h3>
                <p className="text-purple-300/80 relative">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
