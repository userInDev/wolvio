export type ServiceItem = {
  label: string;
  href: string;
  description: string;
  tag: string;
};

export type NavItem =
  | { kind: "link"; label: string; href: string }
  | { kind: "dropdown"; label: string; services: ServiceItem[] };