import { motion } from "framer-motion";
import { CARD_HOVER, cardReveal } from "../../../constants/animations";
import { ABOUT_APPROACHES } from "../../../constants/constants";
import { useScrollReveal } from "../../../hooks/useScrollReveal";



export default function OurApproachSection() {

    // Hooks
    const { ref, isInView } = useScrollReveal(0.1);

    return (
        <section className="py-20 lg:py-24 bg-background" ref={ref}>
            <div className="max-w-360 mx-auto px-6 lg:px-12">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="mb-14"
                >
                    <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
                        Our Approach
                    </p>
                    <h2
                        className="font-bold text-primary leading-tight max-w-lg"
                        style={{ fontSize: "clamp(1.5rem, 2.2vw, 2.25rem)" }}
                    >
                        How we engage{" "}
                        <span className="text-accent">and deliver</span>
                    </h2>
                    <p className="mt-4 text-sm text-text-muted leading-relaxed max-w-xl">
                        We engage as embedded partners, not external vendors. Our delivery model
                        aligns our incentives entirely with your outcomes, and we measure success
                        long after go-live.
                    </p>
                </motion.div>

                {/* 2×2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {ABOUT_APPROACHES.map(({ number, title, description, color }, i) => (
                        <motion.div
                            key={number}
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
                                {/* Watermark number */}
                                <p
                                    className="font-bold leading-none mb-3 select-none"
                                    style={{
                                        fontSize: "clamp(3rem, 5vw, 4rem)",
                                        color: "rgba(47,111,115,0.1)",
                                        fontVariantNumeric: "tabular-nums",
                                    }}
                                >
                                    {number}
                                </p>
                                <h3 className="text-xl font-semibold text-primary mb-3 leading-snug">
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
        </section>
    );
}