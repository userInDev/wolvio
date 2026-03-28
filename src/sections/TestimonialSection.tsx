import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";

const testimonial = {
  quote:
    "Partnering with BrandSite has been transformative. Their ability to blend deep industry expertise with cutting-edge technology helped us reimagine our entire customer experience — delivering results we didn't think were possible within the timeline.",
  author: "Sarah Chen",
  title: "Chief Digital Officer",
  company: "Meridian Financial Group",
  metric: "40% faster time-to-market",
};

const clients = [
  "Meridian",
  "NovaCorp",
  "Vertex",
  "Solaris",
  "Pinnacle",
  "Cascade",
  "Horizon",
  "Apex",
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
            Trusted by industry leaders
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

        {/* Testimonial */}
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
                {testimonial.author[0]}
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
                <div className="text-5xl font-bold text-[var(--color-accent-light)] mb-2">
                  40%
                </div>
                <div className="text-xl font-semibold mb-4">Faster time-to-market</div>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  Achieved through our proprietary delivery framework and
                  AI-augmented engineering practices.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { v: "12 wks", l: "Avg. delivery" },
                    { v: "99.9%", l: "Uptime SLA" },
                    { v: "3.2x", l: "ROI delivered" },
                    { v: "Zero", l: "Critical incidents" },
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
