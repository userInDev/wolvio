import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BG_BLOB, BG_BLOB_DELAYED, RISE, SHINE, STAGGER } from "../../../constants/animations";
import ServiceEcoSystem from "./serviceEcoSystem";


export default function HeroSection() {
  return (
<section
  className="relative flex items-center overflow-hidden pt-10 lg:pt-0"
  style={{ background: "var(--color-background)", minHeight: "90vh" }}
>
      {/* Background — unchanged */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(10,37,64,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(10,37,64,0.025) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-110 h-110 -translate-y-1/4 translate-x-1/6"
          style={{
            background:
              "radial-gradient(circle, rgba(47,111,115,0.08) 0%, transparent 65%)",
          }}
          {...BG_BLOB}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-75 h-75"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 65%)",
          }}
          {...BG_BLOB_DELAYED}
        />
      </div>

      <div className="relative w-full max-w-345 mx-auto px-6 lg:px-12 py-10 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 lg:gap-4 items-center">
          {/* Left Content */}
          <motion.div
            variants={STAGGER}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center lg:pr-6"
          >


            {/* H1 — updated */}
            <motion.h1
              variants={RISE}
              className="font-bold leading-[1.08] tracking-tight mb-4"
              style={{
                fontSize: "clamp(2rem, 3.4vw, 3rem)",
                color: "var(--color-primary)",
              }}
            >
              Specialist{" "}
              <span className="relative inline-block">
                Veeva
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-0.5 left-0 right-0 h-0.75 rounded-full origin-left"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--color-accent), rgba(47,111,115,0.3))",
                  }}
                />
              </span>{" "}
              Consulting Services for <br className="hidden sm:block" />
              Pharma, Biotech{" "}&
              <span style={{ whiteSpace: "nowrap" }}>
                {" "}
                <span style={{ color: "var(--color-accent)" }}>Med Tech</span>
              </span>
            </motion.h1>
            {/* Subtitle — updated */}
            <motion.p
              variants={RISE}
              className="leading-[1.7] mb-6"
              style={{
                fontSize: "clamp(0.88rem, 0.95vw, 0.96rem)",
                color: "var(--color-text-muted)",
                maxWidth: 420,
              }}
            >
              Wolvio provides specialist Veeva Vault consulting for pharma, biotech, and{" "}
              <span style={{ whiteSpace: "nowrap" }}>med tech;</span> from implementation
              to post go-live support. Our senior consultants brings deep{" "}
              <strong style={{ color: "var(--color-primary)" }}>GxP expertise</strong> and
              hands-on platform experience, delivering the{" "}
              <strong style={{ color: "var(--color-primary)" }}>regulatory precision</strong>{" "}
              that regulated environments actually demand.
            </motion.p>

            {/* CTAs — updated labels */}
            <motion.div variants={RISE} className="flex flex-wrap gap-3 mb-8">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white overflow-hidden"
                style={{ background: "var(--color-primary)" }}
              >
                <motion.span
                  className="absolute inset-0 -translate-x-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                  }}
                  {...SHINE}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Schedule a Consultation <ArrowRight size={14} />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm overflow-hidden"
                style={{
                  background: "transparent",
                  color: "var(--color-accent)",
                  border: "1px solid rgba(47,111,115,0.3)",
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Our Veeva Services <ArrowRight size={14} />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
          {/* Right — unchanged */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="w-full max-w-130 lg:max-w-140">
              <ServiceEcoSystem />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
