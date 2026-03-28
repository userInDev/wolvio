import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Link2, Cloud, Brain, FlaskConical, Globe2, BarChart3 } from "lucide-react";
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const rise = {
  hidden: { opacity: 0, y: 24, filter: "blur(5px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
/* ─── Service nodes for the illustration ─── */
/* Compute 6 positions in a perfect hexagon around center */
const CX = 50, CY = 50, RADIUS = 36;
const serviceData = [
  { id: "blockchain", label: "Blockchain", icon: Link2, color: "#6366f1", delay: 0.6 },
  { id: "cloud", label: "Cloud", icon: Cloud, color: "#0ea5e9", delay: 0.75 },
  { id: "ai", label: "AI", icon: Brain, color: "#8b5cf6", delay: 0.9 },
  { id: "veeva", label: "Veeva", icon: FlaskConical, color: "#2f6f73", delay: 1.05 },
  { id: "web", label: "Web3", icon: Globe2, color: "#f59e0b", delay: 1.2 },
  { id: "analytics", label: "Analytics", icon: BarChart3, color: "#10b981", delay: 1.35 },
];
const services = serviceData.map((s, i) => {
  const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2; // start from top
  return { ...s, x: CX + RADIUS * Math.cos(angle), y: CY + RADIUS * Math.sin(angle) };
});
const connections = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
  [0, 2], [1, 3], [2, 4], [3, 5], [4, 0], [5, 1],
];
function ServiceEcosystem() {
  return (
    <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
      {/* SVG connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2f6f73" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#2f6f73" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx={CX} cy={CY} r="28" fill="url(#hubGlow)" />
        {connections.map(([a, b], i) => (
          <motion.line key={`conn-${i}`}
            x1={services[a].x} y1={services[a].y} x2={services[b].x} y2={services[b].y}
            stroke="#2f6f73" strokeWidth="0.15" strokeDasharray="1 1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ duration: 0.6, delay: 1.5 + i * 0.06 }} />
        ))}
        {services.map((s, i) => (
          <motion.line key={`hub-${i}`}
            x1={CX} y1={CY} x2={s.x} y2={s.y}
            stroke="#2f6f73" strokeWidth="0.2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.35 }}
            transition={{ duration: 0.8, delay: s.delay + 0.2, ease: "easeOut" }} />
        ))}
        {services.map((s, i) => (
          <motion.circle key={`pulse-${i}`} r="0.6" fill="#3a9a9f"
            initial={{ opacity: 0 }}
            animate={{ cx: [CX, s.x], cy: [CY, s.y], opacity: [0, 0.7, 0] }}
            transition={{ duration: 2.5, delay: 2.2 + i * 0.4, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }} />
        ))}
      </svg>
      {/* Center hub — exactly 50% / 50% */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div className="absolute rounded-full"
          style={{ width: 110, height: 110, border: "1px solid rgba(47,111,115,0.15)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
        <div className="absolute rounded-full"
          style={{ width: 88, height: 88, border: "1px solid rgba(47,111,115,0.12)" }} />
        {/* Core */}
        <div className="relative flex flex-col items-center justify-center rounded-full text-center"
          style={{
            width: 72, height: 72,
            background: "linear-gradient(135deg, rgba(47,111,115,0.12), rgba(10,37,64,0.06))",
            border: "1px solid rgba(47,111,115,0.2)",
            backdropFilter: "blur(8px)",
          }}>
          <div className="text-[9px] font-bold uppercase tracking-wider" style={{ color: "var(--color-accent)" }}>Digital</div>
          <div className="text-[9px] font-bold uppercase tracking-wider" style={{ color: "var(--color-primary)" }}>Solutions</div>
        </div>
      </motion.div>
      {/* Service cards */}
      {services.map((service, i) => {
        const Icon = service.icon;
        return (
          <div
            key={service.id}
            className="absolute"
            style={{ left: `${service.x}%`, top: `${service.y}%`, transform: "translate(-50%, -50%)" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: service.delay, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3.5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: service.delay + 0.5 }}
              >
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(226,232,240,0.8)",
                    boxShadow: `0 4px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(255,255,255,0.5) inset, 0 0 20px ${service.color}08`,
                  }}>
                  <div className="flex items-center justify-center rounded-lg"
                    style={{
                      width: 28, height: 28, flexShrink: 0,
                      background: `${service.color}12`,
                      border: `1px solid ${service.color}20`,
                    }}>
                    <Icon size={14} style={{ color: service.color }} />
                  </div>
                  <span className="text-xs font-semibold whitespace-nowrap" style={{ color: "var(--color-primary)" }}>
                    {service.label}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        );
      })}
      {/* Ambient particles */}
      {[18, 35, 52, 70, 25, 60, 42, 78].map((xPos, i) => {
        const yPos = [15, 40, 65, 28, 75, 50, 85, 35][i];
        return (
          <motion.div key={`p-${i}`}
            className="absolute rounded-full"
            style={{ left: `${xPos}%`, top: `${yPos}%`, width: 3, height: 3, background: "var(--color-accent)" }}
            animate={{ opacity: [0, 0.3, 0], scale: [0.5, 1, 0.5] }}
            transition={{ duration: 3.5 + i * 0.4, delay: i * 0.6, repeat: Infinity, ease: "easeInOut" }} />
        );
      })}
    </div>
  );
}
export default function HeroSection() {
  return (
    <section className="relative flex items-center overflow-hidden"
      style={{ background: "var(--color-background)", minHeight: "80vh" }}>
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(10,37,64,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(10,37,64,0.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }} />
        <motion.div className="absolute top-0 right-0 w-[440px] h-[440px] -translate-y-1/4 translate-x-1/6"
          style={{ background: "radial-gradient(circle, rgba(47,111,115,0.08) 0%, transparent 65%)" }}
          animate={{ scale: [1, 1.06, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-0 left-1/3 w-[300px] h-[300px]"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 65%)" }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, delay: 2, repeat: Infinity, ease: "easeInOut" }} />
      </div>
      <div className="relative w-full max-w-[1380px] mx-auto px-6 lg:px-12 py-10 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 lg:gap-4 items-center">
          <motion.div variants={stagger} initial="hidden" animate="visible"
            className="flex flex-col justify-center lg:pr-6">
            <motion.div variants={rise} className="flex items-center gap-2.5 mb-5">
              <motion.span
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase"
                style={{ background: "rgba(47,111,115,0.08)", color: "var(--color-accent)", border: "1px solid rgba(47,111,115,0.15)" }}
                animate={{ boxShadow: ["0 0 0 0 rgba(47,111,115,0)", "0 0 0 6px rgba(47,111,115,0.06)", "0 0 0 0 rgba(47,111,115,0)"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                <Sparkles size={12} />
                Digital Transformation
              </motion.span>
            </motion.div>
            <motion.h1 variants={rise} className="font-bold leading-[1.08] tracking-tight mb-4"
              style={{ fontSize: "clamp(2rem, 3.4vw, 3rem)", color: "var(--color-primary)" }}>
              Shaping{" "}
              <span className="relative inline-block">
                Tomorrow
                <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-0.5 left-0 right-0 h-[3px] rounded-full origin-left"
                  style={{ background: "linear-gradient(90deg, var(--color-accent), rgba(47,111,115,0.3))" }} />
              </span>
              ,{" "}<br className="hidden sm:block" />
              Go Digital{" "}
              <span style={{ color: "var(--color-accent)" }}>Today.</span>
            </motion.h1>
            <motion.p variants={rise} className="leading-[1.7] mb-6"
              style={{ fontSize: "clamp(0.88rem, 0.95vw, 0.96rem)", color: "var(--color-text-muted)", maxWidth: 420 }}>
              Tailored web, mobile &amp; ecommerce solutions — integrating{" "}
              <strong style={{ color: "var(--color-primary)", fontWeight: 600 }}>Blockchain</strong> &amp;{" "}
              <strong style={{ color: "var(--color-primary)", fontWeight: 600 }}>AI</strong> to drive growth.
            </motion.p>
            <motion.div variants={rise}
              className="flex items-center gap-3 rounded-xl px-4 py-3 mb-7 backdrop-blur-sm"
              style={{ background: "rgba(47,111,115,0.05)", border: "1px solid rgba(47,111,115,0.15)", maxWidth: 420 }}>
              <div className="w-1 self-stretch rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(180deg, var(--color-accent), rgba(47,111,115,0.2))", minHeight: 32 }} />
              <div>
                <div className="text-xs font-semibold mb-0.5" style={{ color: "var(--color-accent)" }}>Veeva Certified Partner</div>
                <div className="text-xs leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  Seamless implementation &amp; ongoing support for pharma &amp; life science.
                </div>
              </div>
            </motion.div>
            <motion.div variants={rise} className="flex flex-wrap gap-3 mb-8">
              <motion.button whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                className="group relative flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white overflow-hidden"
                style={{ background: "var(--color-primary)", boxShadow: "0 4px 24px rgba(10,37,64,0.2), 0 0 0 1px rgba(255,255,255,0.05) inset", transition: "background 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-primary-light)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-primary)")}>
                <motion.span className="absolute inset-0 -translate-x-full"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }}
                  animate={{ translateX: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }} />
                <span className="relative z-10 flex items-center gap-2">
                  Explore Solutions
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </motion.button>
              <motion.button whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border backdrop-blur-sm"
                style={{ color: "var(--color-accent)", borderColor: "rgba(47,111,115,0.3)", background: "transparent", transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(47,111,115,0.08)"; e.currentTarget.style.borderColor = "rgba(47,111,115,0.5)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(47,111,115,0.3)"; }}>
                Talk to an Expert
              </motion.button>
            </motion.div>
            <motion.div variants={rise} className="flex items-center gap-6">
              {[{ val: "98%", label: "Satisfaction" }, { val: "500+", label: "Clients" }, { val: "40+", label: "Countries" }].map(({ val, label }, i) => (
                <div key={label} className="flex items-center gap-6">
                  {i > 0 && <span className="w-px h-6 block" style={{ background: "linear-gradient(180deg, transparent, var(--color-border), transparent)" }} />}
                  <div>
                    <motion.div className="font-bold text-xl" style={{ color: "var(--color-primary)" }}
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 + i * 0.15 }}>{val}</motion.div>
                    <div className="text-xs mt-0.5" style={{ color: "var(--color-text-subtle)" }}>{label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          {/* ─── Right: Service Ecosystem ─── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-[520px] lg:max-w-[560px]">
              <ServiceEcosystem />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
