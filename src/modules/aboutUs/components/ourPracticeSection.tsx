import { motion } from "framer-motion";
import { ABOUT_HIGHLIGHTS } from "../../../constants/constants";
import { useScrollReveal } from "../../../hooks/useScrollReveal";



export default function OurPracticeSection() {

  // hooks
  const { ref, isInView } = useScrollReveal(0.1);

  return (
    <section
      className="py-20 lg:py-24"
      style={{ background: "rgba(10,37,64,0.02)" }}
      ref={ref}
    >
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Our Practice
            </p>
            <h2
              className="font-bold text-primary leading-tight mb-6"
              style={{ fontSize: "clamp(1.5rem, 2.2vw, 2.25rem)" }}
            >
              Why we built a{" "}
              <span className="text-accent">specialist firm</span>
            </h2>
            <div className="space-y-4 text-sm text-text-muted leading-relaxed">
              <p>
                We founded Wolvio Solutions in{" "}
                <strong className="text-primary">September 2022</strong> with a clear
                conviction: organisations operating in regulated environments deserve a
                technology partner that genuinely understands the territory — not one
                that learns it on their engagement.
              </p>
              <p>
                That meant building a firm where every consultant carries real depth in
                Veeva and life sciences processes. Not certified generalists rotating between
                platforms, but practitioners who have spent their careers inside the GxP world,
                working on regulatory submissions, quality management, commercial operations,
                and clinical data.
              </p>
              <p>
                It also meant staying focused. We have deliberately not expanded into
                unrelated industries or platforms. Our specialist focus on{" "}
                <strong className="text-primary">pharma, biotech, and med tech</strong> is
                not a constraint — it is the reason clients trust us with their most critical
                implementations.
              </p>
              <p>
                Since founding, we have grown into a firm serving clients across three
                continents, with two India offices, ISO 9001:2015 certification, and over
                50 years of combined experience, holding to the same standards we started with.
              </p>
            </div>
          </motion.div>

          {/* Right: Stat tiles */}
          <div className="grid grid-cols-2 gap-5">
            {ABOUT_HIGHLIGHTS.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="bg-white rounded-2xl border border-border p-7 flex flex-col justify-center"
              >
                <p
                  className="font-bold mb-1"
                  style={{
                    fontSize: "clamp(2rem, 3vw, 2.75rem)",
                    color: "var(--color-accent)",
                    lineHeight: 1,
                  }}
                >
                  {value}
                </p>
                <p className="text-sm text-text-muted leading-snug">{label}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}