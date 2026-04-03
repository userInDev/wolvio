import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { BRAND, FOOTER_NAV_LINKS, POLICY_LINKS, SOCIAL_LINKS } from "../constants/constants";

const socialIconMap: Record<string, React.ElementType> = {
  LinkedIn: Linkedin,
  Twitter: Twitter,
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
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