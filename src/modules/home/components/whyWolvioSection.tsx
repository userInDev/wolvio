import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Cpu, Sparkles } from "lucide-react";
import { useScrollReveal } from "../../../hooks/useScrollReveal";


const pillars = [
  {
    icon: CheckCircle,
    title: "Life Sciences Focus",
    description:
      "Exclusively serves regulated industries with strong GxP alignment. Every decision supports compliance and scalability.",
    accent: "from-[#2F6F73] to-[#235558]",
  },
  {
    icon: Users,
    title: "Senior-Led Delivery",
    description:
      "Every engagement led and delivered by senior Veeva consultants. No junior resourcing. No managed-from-a-distance model.",
    accent: "from-[#0A2540] to-[#0d3060]",
  },
  {
    icon: Cpu,
    title: "Agile Without Risk",
    description:
      "Shorter timelines, direct communication, faster decisions — without compromising validation standards or documentation rigour.",
    accent: "from-[#2F6F73] to-[#3a8a8f]",
  },
  {
    icon: Sparkles,
    title: "Digital Transformation & AI",
    description:
      "Embedding AI and automation into life sciences workflows — with less manual effort & full GxP compliance.",
    accent: "from-[#0A2540] to-[#2F6F73]",
  },
];

export default function WhyWolvioSection() {
  const { ref, isInView } = useScrollReveal(0.1);

  return (
    <section className="py-28 bg-border-light" ref={ref}>
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            Why Wolvio
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-tight max-w-2xl mx-auto">
            Specialist Depth. Senior Delivery.{" "}
            <span className="text-accent">Agile without Risk</span>
          </h2>
        </motion.div>

        {/* 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map(({ icon: Icon, title, description, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-2xl border border-border overflow-hidden cursor-default shadow-(--shadow-card) hover:shadow-(--shadow-card-hover) transition-shadow duration-300"
            >
              <motion.div
                className={`h-1 w-full bg-linear-to-r ${accent}`}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
              <div className="p-7">
                <div className="w-12 h-12 rounded-xl bg-primary/8 group-hover:bg-accent/12 flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-primary group-hover:text-accent transition-colors duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3 leading-snug">
                  {title}
                </h3>
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
            Learn More About Our Approach <ArrowRight size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
