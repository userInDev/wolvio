import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { useScrollReveal } from "../../../hooks/useScrollReveal";


const insights = [
  {
    category: "Platform Updates",
    title:
      "Wolvio Insights: Key Highlights from the Top 7 Veeva Vault 25R3 Features",
    excerpt:
      "An overview of the top platform features introduced in Veeva Vault 25R3, highlighting how AI, automation, and enhanced workflows are driving efficiency and compliance in Life Sciences.",
    readTime: "7 min read",
    gradient: "from-[var(--color-primary)] via-[#0d3b6e] to-[var(--color-accent)]",
  },
  {
    category: "AI & Technology",
    title: "Navigating Veeva Vault AI Agents: Wolvio Insights",
    excerpt:
      "A practical guide to understanding and leveraging Veeva Vault AI agents, showing how embedded, context-aware automation is transforming workflows, compliance, and productivity across Life Sciences.",
    readTime: "6 min read",
    gradient: "from-[var(--color-accent)] to-[var(--color-accent-dark)]",
  },
];

export default function InsightsSection() {
  const { ref, isInView } = useScrollReveal(0.1);

  return (
    <section className="py-28">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12" ref={ref}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-3">
              Insights & Perspectives
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-primary)] leading-tight">
              Thinking Across the{" "}
              <span className="text-[var(--color-accent)]">Veeva Platform</span>
            </h2>
            <p className="mt-4 text-sm text-[var(--color-text-muted)] leading-relaxed max-w-xl">
              Our Veeva consulting services are backed by insights from practitioners.
              Our consultants publish regularly on Veeva platform architecture, regulatory
              technology, and the practical realities of platform management in Life
              Sciences. Practitioner perspectives, not vendor content.
            </p>
          </motion.div>
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ x: 4 }}
            className="group flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] shrink-0"
          >
            Browse All Insights
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </motion.a>
        </div>

        {/* 2 equal cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {insights.map(({ category, title, excerpt, readTime, gradient }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.12 }}
              whileHover={{ scale: 1.01 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer min-h-[420px] flex flex-col justify-end"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: "32px 32px",
                }}
              />
              <motion.div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 p-8">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest bg-white/20 text-white px-3 py-1 rounded-full mb-5">
                  {category}
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-white leading-snug mb-4">
                  {title}
                </h3>
                <p className="text-white/70 text-sm mb-6 max-w-md">{excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white/60 text-xs">
                    <Clock size={12} />
                    {readTime}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-white group-hover:gap-3 transition-all duration-200">
                    Read Insight <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
