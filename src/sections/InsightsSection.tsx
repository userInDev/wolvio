import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const insights = [
  {
    category: "AI & Technology",
    title: "How generative AI is reshaping enterprise strategy in 2025",
    excerpt:
      "Leaders across industries are rethinking their operating models as generative AI moves from pilot to production.",
    readTime: "8 min read",
    featured: true,
    gradient: "from-[var(--color-primary)] via-[#0d3b6e] to-[var(--color-accent)]",
  },
  {
    category: "Sustainability",
    title: "The business case for net-zero: Beyond compliance",
    excerpt:
      "Why leading companies are treating sustainability as a source of competitive advantage, not just regulatory obligation.",
    readTime: "5 min read",
    featured: false,
    gradient: "from-[var(--color-accent)] to-[var(--color-accent-dark)]",
  },
  {
    category: "Digital Engineering",
    title: "Platform engineering: The new foundation of software delivery",
    excerpt:
      "Internal developer platforms are transforming how engineering teams build, deploy, and operate software at scale.",
    readTime: "6 min read",
    featured: false,
    gradient: "from-[var(--color-primary)] to-[#1a4a7a]",
  },
];

export default function InsightsSection() {
  const { ref, isInView } = useScrollReveal(0.1);

  return (
    <section className="py-28 bg-[var(--color-border-light)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12" ref={ref}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-3">
              Featured insights
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-primary)] leading-tight">
              Ideas shaping{" "}
              <span className="text-[var(--color-accent)]">tomorrow</span>
            </h2>
          </motion.div>
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ x: 4 }}
            className="group flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] shrink-0"
          >
            All insights
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </motion.a>
        </div>

        {/* Cards layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Featured large card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{ scale: 1.01 }}
            className="lg:col-span-3 group relative rounded-2xl overflow-hidden cursor-pointer min-h-[420px] flex flex-col justify-end"
          >
            {/* Background gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${insights[0].gradient}`}
            />
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />
            {/* Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            <div className="relative z-10 p-8">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest bg-white/20 text-white px-3 py-1 rounded-full mb-5">
                {insights[0].category}
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-white leading-snug mb-4">
                {insights[0].title}
              </h3>
              <p className="text-white/70 text-sm mb-6 max-w-md">{insights[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white/60 text-xs">
                  <Clock size={12} />
                  {insights[0].readTime}
                </div>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-white group-hover:gap-3 transition-all duration-200">
                  Read more <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {insights.slice(1).map(({ category, title, excerpt, readTime, gradient }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                whileHover={{ scale: 1.02 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer flex-1 min-h-[190px] flex flex-col justify-end"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative z-10 p-6">
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest bg-white/20 text-white px-2.5 py-0.5 rounded-full mb-3">
                    {category}
                  </span>
                  <h3 className="text-lg font-semibold text-white leading-snug mb-2">
                    {title}
                  </h3>
                  <p className="text-white/60 text-xs mb-4 line-clamp-2">{excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-white/50 text-xs">
                      <Clock size={10} />
                      {readTime}
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Read <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
