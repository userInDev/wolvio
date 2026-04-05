import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Cpu,
  Menu, X
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { BRAND, NAV_LINKS, SERVICE_ICONS } from "../constants/constants";
import { NavItem } from "../types";
import { ServicesMegaMenu } from "./servicesMegaMenu";



export default function Header() {

  // states
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // refs
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /**
   * listen to scroll events to toggle header background and shadow for better readability after scrolling down a bit
   */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** handle mouse enter on dropdown, clear any existing close timers and set active dropdown */
  const handleMouseEnter = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  }, []);

  /** handle mouse leave with some small delay closing dropdown slightly for smoother UX */
  const handleMouseLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 120);
  }, []);


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
                <NavLink
                  key={item.label}
                  to={item.href}
                  className="px-4 py-2 text-sm font-medium rounded-lg text-text hover:text-accent hover:bg-border-light transition-all duration-200"
                >
                  {item.label}
                </NavLink>
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
            <div className="max-w-360 mx-auto px-4 py-3 flex flex-col gap-0.5">
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