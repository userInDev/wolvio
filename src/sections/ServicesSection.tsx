import { motion } from "framer-motion";
import { ArrowRight, Brain, Cloud, Shield, Zap, BarChart3, Globe } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const services = [
  {
    icon: Brain,
    title: "AI & Applied Intelligence",
    description:
      "We help organizations unlock the full potential of AI — from strategy to enterprise-wide deployment and responsible innovation.",
    tags: ["Machine Learning", "LLMs", "Automation"],
    color: "from-[#0A2540] to-[#0d3060]",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Modernize your infrastructure with cloud-native architecture, migration strategy, and managed services that scale with you.",
    tags: ["AWS", "Azure", "GCP"],
    color: "from-[#2F6F73] to-[#3a8a8f]",
  },
  {
    icon: BarChart3,
    title: "Strategy & Consulting",
    description:
      "Reimagine your business model with insight-led strategy, operating model design, and transformation road-mapping.",
    tags: ["Digital Strategy", "M&A", "Org Design"],
    color: "from-[#0A2540] to-[#2F6F73]",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "End-to-end security solutions that protect your enterprise — from vulnerability assessment to real-time threat response.",
    tags: ["Zero Trust", "SOC", "Compliance"],
    color: "from-[#2F6F73] to-[#235558]",
  },
  {
    icon: Zap,
    title: "Digital Engineering",
    description:
      "Accelerate software delivery with modern engineering practices — platform engineering, DevSecOps, and product-led development.",
    tags: ["DevOps", "API Design", "SRE"],
    color: "from-[#0A2540] to-[#0d3060]",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description:
      "Embed sustainability into your core with net-zero strategies, ESG reporting, and green technology implementation.",
    tags: ["Net Zero", "ESG", "Circular Economy"],
    color: "from-[#2F6F73] to-[#3a8a8f]",
  },
];

export default function ServicesSection() {
  const { ref, isInView } = useScrollReveal(0.1);

  return (
    <section className="py-28 bg-[var(--color-background)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12" ref={ref}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-3">
              What we do
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-primary)] leading-tight max-w-lg">
              Services built for{" "}
              <span className="text-[var(--color-accent)]">impact</span>
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
            View all services
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </motion.a>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, tags, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden cursor-pointer shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300"
            >
              {/* Top accent */}
              <motion.div
                className={`h-1 w-full bg-gradient-to-r ${color}`}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />

              <div className="p-7">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/8 group-hover:bg-[var(--color-accent)]/12 flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300"
                  />
                </div>

                <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3 leading-snug">
                  {title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
                  {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--color-border-light)] text-[var(--color-text-muted)] group-hover:bg-[var(--color-accent)]/8 group-hover:text-[var(--color-accent)] transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA link */}
                <div className="flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                  Learn more <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
