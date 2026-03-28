import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function CTASection() {
  const { ref, isInView } = useScrollReveal(0.2);

  return (
    <section className="py-28 bg-border-light" ref={ref}>
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-primary rounded-3xl overflow-hidden px-8 lg:px-20 py-20 text-center"
        >
          {/* Background decorations */}
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-accent/20 -translate-y-1/2 blur-2xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-primary-light/40 translate-y-1/2 blur-2xl" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent-light text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8"
            >
              <Sparkles size={12} />
              Ready to start?
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl mx-auto"
            >
              The future belongs to those who build it.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg text-white/60 mb-10 max-w-xl mx-auto"
            >
              Let's explore how we can help your organization lead with
              confidence in an era of continuous transformation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="group flex items-center gap-2.5 bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-full font-semibold transition-colors duration-200"
              >
                Start a conversation
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2.5 text-white border border-white/25 hover:border-white/50 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-200"
              >
                View case studies
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}