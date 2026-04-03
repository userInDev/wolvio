import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Cloud, Cpu,
  ExternalLink,
  Menu, X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BRAND, NAV_LINKS } from "../constants/constants";
import { NavItem, ServiceItem } from "../types";

const SERVICE_ICONS: Record<string, React.ElementType> = {
  "Digital Cloud — Veeva": Cloud,
  "Digital Transformation and Ai": Cpu,
};

const TAG_COLORS: Record<string, string> = {
  "Life Sciences": "bg-teal-50 text-teal-700",
  Strategy: "bg-blue-50 text-blue-700",
};

function ServicesMegaMenu({ services }: { services: ServiceItem[] }) {
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

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/96 backdrop-blur-md shadow-nav"
        : "bg-white/80 backdrop-blur-sm"
        }`}
    >
      {/* Top gradient bar — only before scroll */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary via-accent to-accent-light origin-left"
          />
        )}
      </AnimatePresence>

      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="shrink-0"
          >
            <img
              src={BRAND.LOGO}
              alt={BRAND.NAME}
              className="h-9 w-auto object-contain"
            />
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 ml-auto mr-2">
            {NAV_LINKS.map((item: NavItem) => {
              if (item.kind === "dropdown") {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${activeDropdown === item.label
                        ? "text-accent bg-border-light"
                        : "text-text hover:text-accent hover:bg-border-light"
                        }`}
                    >
                      {item.label}
                      <motion.span
                        animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="inline-flex"
                      >
                        <ChevronDown size={13} className="opacity-60" />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <ServicesMegaMenu services={item.services} />
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium rounded-lg text-text hover:text-accent hover:bg-border-light transition-all duration-200"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            <motion.a
              href={`mailto:${BRAND.EMAIL}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-full transition-colors duration-200"
            >
              Contact us
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2 rounded-lg text-primary hover:bg-border-light transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex"
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex"
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="max-w-[1440px] mx-auto px-4 py-3 flex flex-col gap-0.5">
              {NAV_LINKS.map((item: NavItem, i: number) => {
                if (item.kind === "dropdown") {
                  return (
                    <div key={item.label}>
                      <motion.button
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-primary hover:bg-border-light rounded-xl transition-colors"
                      >
                        {item.label}
                        <motion.span
                          animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={14} className="opacity-50" />
                        </motion.span>
                      </motion.button>

                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.22 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-3 pb-1 flex flex-col gap-0.5">
                              {item.services.map((svc) => {
                                const Icon = SERVICE_ICONS[svc.label] ?? Cpu;
                                return (
                                  <a
                                    key={svc.label}
                                    href={svc.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-border-light transition-colors"
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-primary/[0.07] flex items-center justify-center shrink-0">
                                      <Icon size={15} className="text-accent" />
                                    </div>
                                    <span className="text-sm font-medium text-text group-hover:text-accent transition-colors">
                                      {svc.label}
                                    </span>
                                  </a>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-3 py-3 text-sm font-medium text-text hover:text-accent hover:bg-border-light rounded-xl transition-colors"
                  >
                    {item.label}
                  </motion.a>
                );
              })}

              <div className="flex gap-2 mt-3 pt-3 border-t border-border">
                <a
                  href={`mailto:${BRAND.EMAIL}`}
                  className="flex-1 py-3 text-sm font-medium text-center text-primary border border-primary/25 rounded-full hover:bg-primary/5 transition-colors"
                >
                  Contact us
                </a>
                <a
                  href={BRAND.WEBSITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 text-sm font-semibold text-center text-white bg-accent hover:bg-accent-dark rounded-full transition-colors"
                >
                  Get started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}