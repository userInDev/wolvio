import {
  BarChart3,
  Brain,
  Cloud,
  FlaskConical,
  Globe2,
  Link2,
} from "lucide-react";
import { NavItem } from "../types";

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
    href: "https://www.wolviosolutions.com/about",
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
  { label: "About Us", href: "https://www.wolviosolutions.com/about" },
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
