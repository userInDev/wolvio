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
        label: "Digital Transformation",
        href: "https://www.wolviosolutions.com/digital-transformation",
        description:
          "Technology-led transformation strategy for modern enterprises.",
        tag: "Strategy",
      },
      {
        label: "Blockchain",
        href: "https://www.wolviosolutions.com/blockchain",
        description:
          "Decentralized solutions built for trust and transparency.",
        tag: "Web3",
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
