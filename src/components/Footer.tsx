import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { BRAND, FOOTER_NAV_LINKS, POLICY_LINKS, SOCIAL_LINKS } from "../constants/constants";

const socialIconMap: Record<string, React.ElementType> = {
  LinkedIn: Linkedin,
  Twitter: Twitter,
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white">

      {/* Top CTA bar */}
      <div className="border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
                Get in touch
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-3">
                Let's create value together.
              </h2>
              <p className="text-white/50 text-base max-w-md">
                {BRAND.TAGLINE} — Partner with us to unlock the full potential
                of your business through technology and human ingenuity.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <motion.a
                href={`mailto:${BRAND.EMAIL}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group flex items-center gap-2.5 bg-accent hover:bg-accent-light text-white px-7 py-4 rounded-full font-semibold text-sm transition-colors duration-200"
              >
                Email us
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.a>
              <motion.a
                href={BRAND.WEBSITE}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2.5 text-white border border-white/20 hover:border-white/40 hover:bg-white/5 px-7 py-4 rounded-full font-semibold text-sm transition-all duration-200"
              >
                Visit website
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <img
              src={BRAND.LOGO_LIGHT}
              alt={BRAND.NAME}
              className="h-9 w-auto object-contain self-start"
            />
            <p className="text-white/50 text-sm leading-relaxed">
              {BRAND.TAGLINE}. We help organizations transform through
              technology-led strategy and human creativity.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${BRAND.EMAIL}`}
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors duration-150"
              >
                <Mail size={14} className="text-accent shrink-0" />
                {BRAND.EMAIL}
              </a>
              <a
                href={`tel:${BRAND.PHONE}`}
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors duration-150"
              >
                <Phone size={14} className="text-accent shrink-0" />
                {BRAND.PHONE}
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2.5">
              {SOCIAL_LINKS.map(({ label, href }) => {
                const Icon = socialIconMap[label];
                return (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={label}
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-200"
                  >
                    <Icon size={15} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 lg:col-start-6">
            <ul className="flex flex-col gap-3">
              {FOOTER_NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors duration-150"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-accent transition-all duration-200 rounded-full" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Addresses */}
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-6">
            <div className="flex items-start gap-3">
              <MapPin size={14} className="text-accent shrink-0 mt-1" />
              <div className="flex flex-col gap-5">
                <div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-accent/80 bg-accent/10 px-2 py-0.5 rounded-full mb-2">
                    Headquarters
                  </span>
                  <p className="text-sm text-white/55 leading-relaxed">
                    {BRAND.ADDRESS.HQ}
                  </p>
                </div>
                <div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-accent/80 bg-accent/10 px-2 py-0.5 rounded-full mb-2">
                    Branch
                  </span>
                  <p className="text-sm text-white/55 leading-relaxed">
                    {BRAND.ADDRESS.BRANCH}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} {BRAND.NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {POLICY_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/35 hover:text-white/70 transition-colors duration-150"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}