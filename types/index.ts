import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  image: StaticImport;
  link: string;
};

export type Testimonial = {
  id: string;
  name: string;
  company: string;
  role: string;
  quote: string;
  image: StaticImport;
  imagePositionY: number;
};
