import { motion } from "framer-motion";
import { BG_BLOB, BG_BLOB_DELAYED, RISE, STAGGER } from "../../../constants/animations";

export default function AboutHeroSection() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ background: "var(--color-background)", minHeight: "70vh" }}
    >
      {/* Background */}
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
          style={{ background: "radial-gradient(circle, rgba(47,111,115,0.08) 0%, transparent 65%)" }}
          {...BG_BLOB}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-75 h-75"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 65%)" }}
          {...BG_BLOB_DELAYED}
        />
      </div>

      <div className="relative w-full max-w-345 mx-auto px-6 lg:px-12 py-24 text-center">
        <motion.div
          variants={STAGGER}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.p
            variants={RISE}
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            About Wolvio Solutions
          </motion.p>

          <motion.h1
            variants={RISE}
            className="font-bold leading-[1.1] tracking-tight mb-5 mx-auto"
            style={{
              fontSize: "clamp(2rem, 3.4vw, 3rem)",
              color: "var(--color-primary)",
              maxWidth: 680,
            }}
          >
            A specialist{" "}
            <span className="relative inline-block">
              Veeva consulting
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-0.5 left-0 right-0 h-0.75 rounded-full origin-left"
                style={{
                  background: "linear-gradient(90deg, var(--color-accent), rgba(47,111,115,0.3))",
                }}
              />
            </span>{" "}
            firm built exclusively for{" "}
            <span style={{ color: "var(--color-accent)" }}>life sciences</span>.
          </motion.h1>

          <motion.p
            variants={RISE}
            className="leading-[1.7] mx-auto"
            style={{
              fontSize: "clamp(0.88rem, 0.95vw, 0.96rem)",
              color: "var(--color-text-muted)",
              maxWidth: 520,
            }}
          >
            Backed by over 50 years of combined experience and ISO 9001:2015 certification,
            we bring niche expertise in Veeva Vault, CRM, and AI-infused workflows to
            clients who cannot afford implementations that fall short in a regulated environment.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}