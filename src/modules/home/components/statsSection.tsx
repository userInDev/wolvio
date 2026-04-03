import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { useScrollReveal } from "../../../hooks/useScrollReveal";

const stats = [
  { value: 15, suffix: "+", label: "Life Sciences Clients", prefix: "" },
  { value: 12, suffix: "+", label: "Veeva Engagements Delivered", prefix: "" },
  { value: 8, suffix: "+", label: "Veeva Vault Certifications", prefix: "" },
  { value: 5, suffix: "+", label: "Fortune 500 Partnerships", prefix: "" },
  { value: 50, suffix: "+", label: "Years of Combined Expertise", prefix: "" },
];

function AnimatedNumber({
  target,
  prefix,
  suffix,
  inView,
}: {
  target: number;
  prefix: string;
  suffix: string;
  inView: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, target, {
      duration: 2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [inView, count, target]);

  return (
    <span>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const marqueeItems = [
  "Veeva Vault",
  "QualityDocs",
  "RegulatoryDocs",
  "CTMS",
  "ClinOps",
  "PromoMats",
  "MedComms",
  "GxP Compliance",
  "Life Sciences",
  "Managed Services",
];

export default function StatsSection() {
  const { ref, isInView } = useScrollReveal(0.2);

  return (
    <section className="relative overflow-hidden">
      {/* Stats bar */}
      <div className="bg-primary py-20" ref={ref}>
        <div className="max-w-360 mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-light mb-3">
              Delivery Track Record
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Impact driven outcomes
            </h2>
            <p className="mt-4 text-white/50 text-sm max-w-xl mx-auto leading-relaxed">
              Wolvio delivers measurable success across implementations, regulatory programs, and managed services — driven by a consistent commitment to outcomes and delivery excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {stats.map(({ value, suffix, label, prefix }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 tabular-nums">
                  <AnimatedNumber
                    target={value}
                    prefix={prefix}
                    suffix={suffix}
                    inView={isInView}
                  />
                </div>
                <div className="text-sm text-white/50 font-medium">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}