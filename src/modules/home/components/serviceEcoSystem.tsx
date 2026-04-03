import { motion } from "framer-motion";
import { memo, useMemo } from "react";
import { CX, CY, ECO_SYSTEM_CONNECTIONS, ECO_SYSTEM_SERVICE_MOCK_DATA, RADIUS } from "../../../constants/constants";

const ServiceEcoSystem = () => {

    const services = useMemo(() => {
        return ECO_SYSTEM_SERVICE_MOCK_DATA.map((s, i) => {
            const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
            return {
                ...s,
                x: CX + RADIUS * Math.cos(angle),
                y: CY + RADIUS * Math.sin(angle),
            };
        });
    }, []);

    return (
        <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#2f6f73" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#2f6f73" stopOpacity="0" />
                    </radialGradient>
                </defs>
                <circle cx={CX} cy={CY} r="28" fill="url(#hubGlow)" />
                {ECO_SYSTEM_CONNECTIONS.map(([a, b], i) => (
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

export default memo(ServiceEcoSystem);