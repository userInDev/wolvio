import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle, Wrench, BadgeCheck } from "lucide-react";
import { useScrollReveal } from "../../../hooks/useScrollReveal";

const industries = [
  "Pharma",
  "Biotech",
  "Med Tech",
  "CRO",
  "CDMO",
  "Regulatory",
  "Clinical",
  "Quality",
];

const caseSteps = [
  {
    icon: AlertTriangle,
    title: "Challenge",
    description:
      "Managing deletions in Veeva Vault created complexity around data retention, audit trails, and regulatory compliance — especially when records needed to remain traceable without being actively accessible across regulated workflows.",
    accent: "from-[#0A2540] to-[#0d3060]",
  },
  {
    icon: Wrench,
    title: "Solution",
    description:
      "We implemented a controlled data management approach aligned with Veeva Vault's deletion and retention capabilities, ensuring audit history was preserved while enabling safe recovery and reducing the risks of permanent data loss.",
    accent: "from-[#2F6F73] to-[#3a8a8f]",
  },
  {
    icon: BadgeCheck,
    title: "Outcome",
    description:
      "Improved compliance and audit readiness with full visibility into deleted records, reduced risk of accidental data loss, and stronger governance through structured, traceable data handling processes.",
    accent: "from-[#0A2540] to-[#2F6F73]",
  },
];

const outcomes = [
  {
    value: "Full",
    label: "Audit trail visibility",
    gradient: "from-[#0A2540] to-[#0d3060]",
  },
  {
    value: "Zero",
    label: "Accidental data loss",
    gradient: "from-[#2F6F73] to-[#3a8a8f]",
  },
  {
    value: "Strong",
    label: "Governance & traceability",
    gradient: "from-[#0A2540] to-[#2F6F73]",
  },
  {
    value: "Ready",
    label: "Regulatory compliance",
    gradient: "from-[#2F6F73] to-[#235558]",
  },
];

export default function CaseStudySection() {
  const { ref, isInView } = useScrollReveal(0.15);

  return (
    <section className="py-28 bg-[var(--color-background)] overflow-hidden" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Trusted strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-subtle)] mb-8">
            Trusted across regulated industries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {industries.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
                whileHover={{ scale: 1.08, opacity: 1 }}
                className="text-xl font-bold text-[var(--color-primary)]/20 hover:text-[var(--color-primary)]/50 transition-colors duration-200 cursor-default tracking-tight"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="h-px bg-[var(--color-border)] mb-20" />

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            How we've helped our clients
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary max-w-2xl mx-auto">
            A closer look at how we helped a client reduce risk and improve data
            control within Veeva Vault
          </h2>
        </motion.div>

        {/* Challenge / Solution / Outcome cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
          {caseSteps.map(({ icon: Icon, title, description, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-2xl border border-border overflow-hidden shadow-(--shadow-card) hover:shadow-(--shadow-card-hover) transition-shadow duration-300"
            >
              {/* Top accent bar — brand colors */}
              <motion.div
                className={`h-1 w-full bg-linear-to-r ${accent}`}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.1,
                  ease: "easeOut",
                }}
                style={{ transformOrigin: "left" }}
              />

              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/8 group-hover:bg-accent/12 flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-primary group-hover:text-accent transition-colors duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Outcome metrics — brand gradient cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {outcomes.map(({ value, label, gradient }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className={`relative rounded-2xl overflow-hidden cursor-default bg-gradient-to-br ${gradient} p-[1px]`}
            >
              <div className="relative rounded-[15px] bg-gradient-to-br from-white/[0.08] to-transparent px-5 py-6 text-center backdrop-blur-sm h-full">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-8 bg-white/10 rounded-full blur-xl" />
                <motion.div
                  className="relative text-3xl lg:text-4xl font-bold text-white mb-1.5 tracking-tight"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                >
                  {value}
                </motion.div>
                <div className="relative text-xs text-white/60 font-medium leading-snug">
                  {label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-accent border border-accent/30 hover:bg-accent/5 transition-colors duration-200"
          >
            Read case study <ArrowRight size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
