import { motion } from "framer-motion";
import { CARD_HOVER, cardReveal } from "../../../constants/animations";
import { ABOUT_PILLARS } from "../../../constants/constants";
import { useScrollReveal } from "../../../hooks/useScrollReveal";


export default function WhoWeAreSection() {

    // Hooks
    const { ref, isInView } = useScrollReveal(0.1);

    return (
        <section className="py-20 lg:py-10 bg-background" ref={ref}>
            <div className="max-w-360 mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
                            Who We Are
                        </p>
                        <h2
                            className="font-bold text-primary leading-tight mb-6"
                            style={{ fontSize: "clamp(1.5rem, 2.2vw, 2.25rem)" }}
                        >
                            Built for life sciences.{" "}
                            <span className="text-accent">Fluent in Veeva.</span>
                        </h2>

                        <div className="space-y-4 text-sm text-text-muted leading-relaxed">
                            <p>
                                Wolvio Solutions is a specialist consulting firm dedicated to Veeva technology
                                and digital transformation within the life sciences industry. Unlike generalist
                                firms that treat Veeva as one capability among many, we have structured our
                                entire practice around the unique demands of pharmaceutical, biotech, and
                                medical technology companies.
                            </p>
                            <p>
                                Backed by over{" "}
                                <strong className="text-primary">50 years of combined experience</strong> and{" "}
                                <strong className="text-primary">ISO 9001:2015 certification</strong>, we bring
                                niche expertise in Veeva Vault, CRM, OpenText Documentum, RPA, and AI-infused
                                workflows to clients who cannot afford implementations that fall short in a
                                regulated environment.
                            </p>
                            <p>
                                At Wolvio, technology is more than tools. It is a catalyst for transformation.
                                Our solutions free clients from IT complexity so they can focus on what matters
                                most: innovation, compliance, and growth.
                            </p>
                        </div>

                        {/* ISO Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-6 inline-flex items-center gap-2 px-4 py-3 rounded-xl border"
                            style={{
                                borderColor: "rgba(47,111,115,0.25)",
                                background: "rgba(47,111,115,0.04)",
                            }}
                        >
                            <div
                                className="w-4 h-4 rounded-lg flex items-center justify-center shrink-0"
                                style={{ background: "rgba(47,111,115,0.12)" }}
                            >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path
                                        d="M8 1l1.8 3.6L14 5.6l-3 2.9.7 4.1L8 10.5l-3.7 2.1.7-4.1-3-2.9 4.2-.6L8 1z"
                                        fill="var(--color-accent)"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-primary">ISO 9001:2015 Certified</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <div className="flex flex-col gap-6">
                        {ABOUT_PILLARS.map(({ icon: Icon, label, title, description, color }, i) => (
                            <motion.div
                                key={label}
                                {...cardReveal(i, isInView)}
                                {...CARD_HOVER}
                                className="group relative bg-white rounded-2xl border border-border overflow-hidden cursor-pointer transition-shadow duration-300"
                            >
                                <motion.div
                                    className={`h-1 w-full bg-linear-to-r ${color}`}
                                    initial={{ scaleX: 0 }}
                                    animate={isInView ? { scaleX: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                                    style={{ transformOrigin: "left" }}
                                />
                                <div className="p-7">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary/8 group-hover:bg-accent/12 flex items-center justify-center transition-colors duration-300">
                                            <Icon
                                                size={20}
                                                className="text-primary group-hover:text-accent transition-colors duration-300"
                                            />
                                        </div>
                                        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                                            {label}
                                        </p>
                                    </div>
                                    <h3 className="text-base font-semibold text-primary mb-2 leading-snug">
                                        {title}
                                    </h3>
                                    <p className="text-sm text-text-muted leading-relaxed">
                                        {description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}