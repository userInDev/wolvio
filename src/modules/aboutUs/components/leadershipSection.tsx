import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { CARD_HOVER, cardReveal } from "../../../constants/animations";
import { ABOUT_LEADERS } from "../../../constants/constants";
import { useScrollReveal } from "../../../hooks/useScrollReveal";


export default function LeadershipSection() {

    // Hooks
    const { ref, isInView } = useScrollReveal(0.1);

    return (
        <section
            className="py-20 lg:py-24"
            style={{ background: "rgba(10,37,64,0.02)" }}
            ref={ref}
        >
            <div className="max-w-360 mx-auto px-6 lg:px-12">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="mb-14"
                >
                    <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
                        Leadership
                    </p>
                    <h2
                        className="font-bold text-primary leading-tight"
                        style={{ fontSize: "clamp(1.5rem, 2.2vw, 2.25rem)" }}
                    >
                        The team behind{" "}
                        <span className="text-accent">Wolvio</span>
                    </h2>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ABOUT_LEADERS.map(({ name, designation, bio, linkedIn, initials }, i) => (
                        <motion.div
                            key={i}
                            {...cardReveal(i, isInView)}
                            {...CARD_HOVER}
                            className="group relative bg-white rounded-2xl border border-border overflow-hidden cursor-pointer transition-shadow duration-300"
                        >
                            <motion.div
                                className="h-1 w-full bg-linear-to-r from-[#0A2540] to-[#2F6F73]"
                                initial={{ scaleX: 0 }}
                                animate={isInView ? { scaleX: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                                style={{ transformOrigin: "left" }}
                            />
                            <div className="p-7">
                                {/* Avatar */}
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center mb-5 text-white font-bold text-xl shrink-0"
                                    style={{
                                        background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                                    }}
                                >
                                    {initials}
                                </div>

                                <h3 className="text-lg font-semibold text-primary leading-snug">
                                    {name}
                                </h3>
                                <p className="text-xs font-semibold uppercase tracking-widest text-accent mt-0.5 mb-4">
                                    {designation}
                                </p>
                                <p className="text-sm text-text-muted leading-relaxed mb-6">
                                    {bio}
                                </p>

                                <a
                                    href={linkedIn}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0"
                                >
                                    <Linkedin size={15} />
                                    LinkedIn Profile
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}