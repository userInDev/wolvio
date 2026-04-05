import { motion } from "framer-motion";
import { ArrowRight, Cpu, ExternalLink } from "lucide-react";
import { BRAND, SERVICE_ICONS, TAG_COLORS } from "../constants/constants";
import { ServiceItem } from "../types";



export function ServicesMegaMenu({ services }: { services: ServiceItem[] }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-140 bg-white rounded-2xl shadow-card-hover border border-border overflow-hidden"
        >
            {/* Top gradient bar */}
            <div className="h-0.75 w-full bg-linear-to-r from-primary via-accent to-accent-light" />

            <div className="p-3">
                <div className="px-3 pt-2 pb-3 mb-1">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-text-subtle">
                        What we do
                    </p>
                </div>

                <div className="flex flex-col gap-1">
                    {services.map((svc) => {
                        const Icon = SERVICE_ICONS[svc.label] ?? Cpu;
                        const tagClass = TAG_COLORS[svc.tag] ?? "bg-gray-100 text-gray-600";
                        return (
                            <a
                                key={svc.label}
                                href={svc.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-start gap-4 px-3 py-3 rounded-xl hover:bg-border-light transition-colors duration-150"
                            >
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/[0.07] group-hover:bg-accent/[0.12] flex items-center justify-center transition-colors duration-200">
                                    <Icon
                                        size={18}
                                        className="text-primary group-hover:text-accent transition-colors duration-200"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-sm font-semibold text-primary group-hover:text-accent transition-colors duration-150 leading-snug">
                                            {svc.label}
                                        </span>
                                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${tagClass}`}>
                                            {svc.tag}
                                        </span>
                                    </div>
                                    <p className="text-xs text-text-muted leading-relaxed">
                                        {svc.description}
                                    </p>
                                </div>
                                <ArrowRight
                                    size={14}
                                    className="shrink-0 mt-1 text-accent opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-150"
                                />
                            </a>
                        );
                    })}
                </div>

                <div className="mt-2 mx-3 mb-1 pt-3 border-t border-border flex items-center justify-between">
                    <span className="text-xs text-text-subtle">Not sure where to start?</span>
                    <a
                        href={BRAND.WEBSITE}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-dark transition-colors"
                    >
                        Talk to us <ExternalLink size={11} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
