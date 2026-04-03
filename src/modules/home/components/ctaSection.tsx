import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useScrollReveal } from "../../../hooks/useScrollReveal";

import {
  BUTTON_INTERACTION,
  FADE_UP,
  SCALE_IN,
  SCROLL_REVEAL,
} from "../../../constants/animations"

export default function CTASection() {
  const { ref, isInView } = useScrollReveal(0.2);

  return (
    <section className="py-28 bg-border-light" ref={ref}>
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <motion.div
          initial={SCROLL_REVEAL.initial}
          animate={isInView ? SCROLL_REVEAL.animate : {}}
          transition={SCROLL_REVEAL.transition}
          className="relative bg-primary rounded-3xl overflow-hidden px-8 lg:px-20 py-20 text-center"
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-accent/20 -translate-y-1/2 blur-2xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-primary-light/40 translate-y-1/2 blur-2xl" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10">
            {/* Badge — updated */}
            <motion.div
              {...(isInView ? SCALE_IN(0.2) : {})}
              className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent-light text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8"
            >
              <Sparkles size={12} />
              Start a Conversation
            </motion.div>

            {/* Headline — updated */}
            <motion.h2
              {...(isInView ? FADE_UP(0.25) : {})}
              className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6 max-w-3xl mx-auto"
            >
              A Focused Conversation Is Where Every Veeva Engagement Starts.
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              {...(isInView ? FADE_UP(0.35, 16) : {})}
              className="text-lg text-white/60 mb-10 max-w-xl mx-auto"
            >
              Let's explore how we can help your organization lead with confidence
              in an era of continuous transformation.
            </motion.p>

            {/* CTAs — updated */}
            <motion.div
              {...(isInView ? FADE_UP(0.45, 16) : {})}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
            >
              <motion.a
                href="#"
                {...BUTTON_INTERACTION}
                className="group flex items-center gap-2.5 bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-full font-semibold transition-colors duration-200"
              >
                Schedule a Consultation
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </motion.a>

              <motion.a
                href="#"
                {...BUTTON_INTERACTION}
                className="flex items-center gap-2.5 text-white border border-white/25 hover:border-white/50 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-200"
              >
                Contact Us
              </motion.a>
            </motion.div>

            {/* Disclaimer — new */}
            <motion.p
              {...(isInView ? FADE_UP(0.55, 12) : {})}
              className="text-xs text-white/35"
            >
              No commitment required. We typically respond within 1 day.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
