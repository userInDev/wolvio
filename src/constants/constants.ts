import {
  BarChart3,
  Brain,
  Cloud,
  Cpu,
  FlaskConical,
  Globe2,
  Lightbulb,
  Link2,
  Target,
} from "lucide-react";
import { CTASectionProps, NavItem } from "../types";

export const BRAND = {
  NAME: "Wolvio solutions",
  TAGLINE: "Excellence Delivered",
  EMAIL: "contact@wolviosolutions.com",
  PHONE: "+91 98765 43210",
  WEBSITE: "https://www.wolviosolutions.com/",
  LOGO: "/logo.png",
  LOGO_LIGHT: "/logo-light.png",
  ADDRESS: {
    HQ: "M69, Cactus Corporate Coworking, #173, 7th Floor, Block B, Tecci Park, OMR, Sholinganallur, Chennai 600119, Tamil Nadu, India.",
    BRANCH:
      "GRG Gen Nxt Foundation Incubator: Chandra Textile Mills Compound, 1708, Avinashi Rd, opp. Govt Polytechnic, Civil Aerodrome Post, Coimbatore 641014, Tamil Nadu, India.",
  },
} as const;

export const NAV_LINKS: NavItem[] = [
  {
    kind: "dropdown",
    label: "Services",
    services: [
      {
        label: "Digital Cloud — Veeva",
        href: "https://www.wolviosolutions.com/digital-cloud-veeva",
        description:
          "End-to-end Veeva platform implementation for life sciences.",
        tag: "Life Sciences",
      },
      {
        label: "Digital Transformation and AI",
        href: "https://www.wolviosolutions.com/digital-transformation",
        description:
          "Technology-led transformation strategy for modern enterprises.",
        tag: "Strategy",
      },
    ],
  },
  {
    kind: "link",
    label: "Blogs",
    href: "https://www.wolviosolutions.com/blog",
  },
  {
    kind: "link",
    label: "Careers",
    href: "https://www.wolviosolutions.com/careers",
  },
  {
    kind: "link",
    label: "About Us",
    href: "/about-us",
  },
];

export const FOOTER_NAV_LINKS = [
  {
    label: "Digital Cloud - Veeva",
    href: "https://www.wolviosolutions.com/digital-cloud-veeva",
  },
  {
    label: "Digital Transformation",
    href: "https://www.wolviosolutions.com/digital-transformation",
  },
  { label: "Blockchain", href: "https://www.wolviosolutions.com/blockchain" },
  { label: "Blogs", href: "https://www.wolviosolutions.com/blog" },
  { label: "Careers", href: "https://www.wolviosolutions.com/careers" },
  { label: "About Us", href: "/about-us" },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/wolvio-solutions/",
  },
  { label: "Twitter", href: "https://x.com/wolviosolutions" },
] as const;

export const POLICY_LINKS = [
  {
    label: "Privacy Policy",
    href: "https://www.wolviosolutions.com/privacy-policy",
  },
] as const;

export const ROUTES = {
  HOME: "/",
  ABOUT: "https://www.wolviosolutions.com/about",
  BLOG: "https://www.wolviosolutions.com/blog",
  CAREERS: "https://www.wolviosolutions.com/careers",
} as const;

/** Eco system hero section constants */
export const ECO_SYSTEM_CONNECTIONS = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 0],
  [0, 2],
  [1, 3],
  [2, 4],
  [3, 5],
  [4, 0],
  [5, 1],
];

export const CX = 50,
  CY = 50,
  RADIUS = 36;

export const ECO_SYSTEM_SERVICE_MOCK_DATA = [
  {
    id: "blockchain",
    label: "Blockchain",
    icon: Link2,
    color: "#6366f1",
    delay: 0.6,
  },
  { id: "cloud", label: "Cloud", icon: Cloud, color: "#0ea5e9", delay: 0.75 },
  { id: "ai", label: "AI", icon: Brain, color: "#8b5cf6", delay: 0.9 },
  {
    id: "veeva",
    label: "Veeva",
    icon: FlaskConical,
    color: "#2f6f73",
    delay: 1.05,
  },
  { id: "web", label: "Web3", icon: Globe2, color: "#f59e0b", delay: 1.2 },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    color: "#10b981",
    delay: 1.35,
  },
];

export const SERVICE_ICONS: Record<string, React.ElementType> = {
  "Digital Cloud — Veeva": Cloud,
  "Digital Transformation and Ai": Cpu,
};

export const TAG_COLORS: Record<string, string> = {
  "Life Sciences": "bg-teal-50 text-teal-700",
  Strategy: "bg-blue-50 text-blue-700",
};

export const ABOUT_PILLARS = [
  {
    icon: Target,
    label: "Our Mission",
    title: "Drive business success through cutting-edge digital solutions",
    description:
      "To drive business success by delivering cutting-edge digital solutions that inspire growth, efficiency, and lasting innovation, empowering life sciences organisations to achieve more with the right technology at their side.",
    color: "from-[#0A2540] to-[#0d3060]",
  },
  {
    icon: Lightbulb,
    label: "Our Vision",
    title: "Lead globally in transformative IT services",
    description:
      "To lead globally in transformative IT services, enabling organisations to unlock unparalleled success in an ever-evolving digital landscape, and to become the benchmark for specialist Veeva consulting in life sciences.",
    color: "from-[#2F6F73] to-[#3a8a8f]",
  },
];

export const ABOUT_LEADERS = [
  {
    name: "Name",
    designation: "Designation",
    bio: "2–3 sentence bio covering background, Veeva and life sciences expertise, and what this person leads at Wolvio.",
    linkedIn: "#",
    initials: "N",
  },
];

export const ABOUT_APPROACHES = [
  {
    number: "01",
    title: "Depth over breadth",
    description:
      "Every consultant brings genuine Veeva and life sciences expertise, not broad platform knowledge stretched across industries. We hire for depth and keep it that way.",
    color: "from-[#0A2540] to-[#0d3060]",
  },
  {
    number: "02",
    title: "Compliance first",
    description:
      "Every configuration decision and workflow is reviewed with GxP, 21 CFR Part 11, and IDMP compliance at the forefront — not as an afterthought once build is complete.",
    color: "from-[#2F6F73] to-[#3a8a8f]",
  },
  {
    number: "03",
    title: "Senior accountability",
    description:
      "Senior consultants lead every engagement from discovery through hypercare. You will not be handed to junior resources once the contract is signed.",
    color: "from-[#0A2540] to-[#2F6F73]",
  },
  {
    number: "04",
    title: "Knowledge transfer",
    description:
      "We build your team's capability throughout every engagement. Our measure of success is client self-sufficiency, not perpetual dependency on our support.",
    color: "from-[#2F6F73] to-[#0A2540]",
  },
];

export const ABOUT_HIGHLIGHTS = [
  { value: "2022", label: "Founded" },
  { value: "3", label: "Continents Served" },
  { value: "2", label: "India Offices" },
  { value: "50+", label: "Years Combined Experience" },
];

export const CTA_CONTENT: Record<string, CTASectionProps> = {
  home: {
    badge: "Start a Conversation",
    headline: "A Focused Conversation Is Where Every Veeva Engagement Starts.",
    primaryCTA: { label: "Schedule a Consultation", href: "/contact" },
    secondaryCTA: { label: "Contact Us", href: "/contact" },
    footnote: "No commitment required. We typically respond within 1 day.",
  },

  about: {
    badge: "Get Started",
    headline:
      "Schedule a time to discuss your requirements and learn how our expertise can drive meaningful outcomes for your business.",
    primaryCTA: { label: "Get in touch", href: "/contact" },
  },
};
