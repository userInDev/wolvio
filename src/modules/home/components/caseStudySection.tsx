import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, BadgeCheck, Wrench } from "lucide-react";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import { CARD_HOVER, cardReveal } from "../../../constants/animations";


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

export default function CaseStudySection() {
  const { ref, isInView } = useScrollReveal(0.15);

  return (
    <section className="py-18 bg-[var(--color-background)] overflow-hidden" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
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
          <h2 className="text-2xl lg:text-3xl font-bold text-primary max-w-2xl mx-auto">
            A closer look at how we helped a client reduce risk and improve data
            control within Veeva Vault
          </h2>
        </motion.div>

        {/* Challenge / Solution / Outcome cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
          {caseSteps.map(({ icon: Icon, title, description, accent }, i) => (
            <motion.div
              key={title}
              {...cardReveal(i, isInView)}
              {...CARD_HOVER}
              className="group relative bg-white rounded-2xl border border-border overflow-hidden"
            >
              {/* Top accent bar */}
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
