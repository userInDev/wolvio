import { motion } from "framer-motion";
import { useScrollReveal } from "../../../hooks/useScrollReveal";

const testimonial = {
  quote:
    "Wolvio's structured approach to Veeva Vault gave us full visibility into deleted records, eliminated the risk of accidental data loss, and completely transformed how we manage audit readiness across our regulated workflows.",
  author: "Senior Compliance Lead",
  title: "Global Regulatory Affairs",
  company: "Life Sciences Client",
  metric: "Improved audit readiness",
};

const clients = [
  "Pharma",
  "Biotech",
  "Med Tech",
  "CRO",
  "CDMO",
  "Regulatory",
  "Clinical",
  "Quality",
];

export default function TestimonialSection() {
  const { ref, isInView } = useScrollReveal(0.15);

  return (
    <section className="py-28 bg-[var(--color-background)] overflow-hidden" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Client logos */}
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
            {clients.map((name, i) => (
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

        {/* Divider */}
        <div className="h-px bg-[var(--color-border)] mb-24" />

        {/* Case study / Testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="text-6xl font-serif text-[var(--color-accent)]/30 leading-none mb-6">
              "
            </div>
            <blockquote className="text-xl lg:text-2xl font-medium text-[var(--color-primary)] leading-relaxed mb-8">
              {testimonial.quote}
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white font-bold text-lg">
                W
              </div>
              <div>
                <div className="font-semibold text-[var(--color-primary)]">
                  {testimonial.author}
                </div>
                <div className="text-sm text-[var(--color-text-muted)]">
                  {testimonial.title}, {testimonial.company}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-[var(--color-primary)] rounded-2xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[var(--color-accent)]/20 -translate-y-1/3 translate-x-1/3" />
              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent-light)] mb-4">
                  Case Study Highlight
                </p>
                <div className="text-2xl font-bold text-white mb-2 leading-snug">
                  Veeva Vault Data Control & Compliance
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  Managing deletions in Veeva Vault created complexity around data retention, audit trails, and regulatory compliance — especially when records needed to remain traceable without being actively accessible across regulated workflows.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { v: "Full", l: "Audit trail visibility" },
                    { v: "Zero", l: "Accidental data loss" },
                    { v: "Strong", l: "Governance & traceability" },
                    { v: "Ready", l: "Regulatory compliance" },
                  ].map(({ v, l }) => (
                    <div
                      key={l}
                      className="bg-white/10 rounded-xl px-4 py-3 backdrop-blur-sm"
                    >
                      <div className="text-lg font-bold text-white">{v}</div>
                      <div className="text-xs text-white/50">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}