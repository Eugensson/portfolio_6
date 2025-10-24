import img1 from "@/public/assets/1.jpg";
import img2 from "@/public/assets/2.jpg";
import img3 from "@/public/assets/3.jpg";
import img4 from "@/public/assets/4.jpg";
import img5 from "@/public/assets/5.jpg";
import img6 from "@/public/assets/6.jpg";
import img7 from "@/public/assets/7.jpg";
import img8 from "@/public/assets/8.jpg";
import img9 from "@/public/assets/9.jpg";
import img10 from "@/public/assets/10.jpg";

import { NavItem, Project } from "@/types";

export const navItems: NavItem[] = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const projectsData: Project[] = [
  {
    id: "1",
    title: "InteriorFirm",
    image: img1,
    link: "https://interiorfirm-landing-kohl.vercel.app",
  },
  {
    id: "2",
    title: "Musician Portfolio",
    image: img2,
    link: "https://mia-reynolds-musician.vercel.app",
  },
  {
    id: "3",
    title: "UrbanBuild",
    image: img3,
    link: "https://urban-build-alpha.vercel.app",
  },
  {
    id: "4",
    title: "Venoma Sport",
    image: img4,
    link: "https://venoma-sport.vercel.app",
  },
  {
    id: "5",
    title: "PizzaLand",
    image: img5,
    link: "https://pizza-land-food.vercel.app",
  },
  {
    id: "6",
    title: "Zenbrew",
    image: img6,
    link: "https://coffee-joy-xi.vercel.app",
  },
  {
    id: "7",
    title: "FitPhysique",
    image: img7,
    link: "https://fit-physique-delta.vercel.app",
  },
  {
    id: "8",
    title: "Alina Lee Portfolio",
    image: img8,
    link: "https://alina-lee-photographer.vercel.app",
  },
  {
    id: "9",
    title: "Bistro Cafe",
    image: img9,
    link: "https://bistro-cafe-inky.vercel.app",
  },
  {
    id: "10",
    title: "Serene Beauty",
    image: img10,
    link: "https://serene-beauty-orpin.vercel.app",
  },
];
