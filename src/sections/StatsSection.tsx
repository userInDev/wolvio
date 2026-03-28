import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const stats = [
  { value: 94, suffix: "%", label: "Client retention rate", prefix: "" },
  { value: 2400, suffix: "+", label: "Experts worldwide", prefix: "" },
  { value: 18, suffix: "B+", label: "Value delivered annually", prefix: "$" },
  { value: 40, suffix: "+", label: "Countries of operation", prefix: "" },
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
  "Strategy & Consulting",
  "Cloud & Infrastructure",
  "AI & Data",
  "Digital Engineering",
  "Security",
  "Sustainability",
  "Industry X",
  "Applied Intelligence",
];

export default function StatsSection() {
  const { ref, isInView } = useScrollReveal(0.2);

  return (
    <section className="relative overflow-hidden">
      {/* Stats bar */}
      <div className="bg-[var(--color-primary)] py-20" ref={ref}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent-light)] mb-3">
              Proven at scale
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Numbers that speak for themselves
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Marquee strip */}
      <div className="bg-[var(--color-accent)] py-4 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-0 whitespace-nowrap"
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-6 px-8 text-sm font-semibold text-white/80 uppercase tracking-widest"
              >
                {item}
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
