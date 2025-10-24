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
import testimonialImage1 from "@/public/assets/testimonial-1.jpg";
import testimonialImage2 from "@/public/assets/testimonial-2.jpg";
import testimonialImage3 from "@/public/assets/testimonial-3.jpg";

import { Faq, NavItem, Project, Testimonial } from "@/types";

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

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Charlotte Hughes",
    company: "Pixel Perfect",
    role: "Head of Design",
    quote:
      "Alex's exceptional skills in web development and UI/UX design delivered a visually stunning and high-performing website that exceeded our expectations.",
    image: testimonialImage1,
    imagePositionY: 0.2,
  },
  {
    id: "2",
    name: "Oliver Bennett",
    company: "Craft Coffee Co.",
    role: "Founder",
    quote:
      "Alex completely revitalised our coffee brand online, creating a user-friendly website that combines elegant design with seamless functionality.",
    image: testimonialImage2,
    imagePositionY: 0.1,
  },
  {
    id: "3",
    name: "Amelia Wright",
    company: "Studio Minimal",
    role: "Creative Director",
    quote:
      "Working with Alex was a game-changer. Their innovative web solutions and fresh design insights helped us achieve a modern, responsive, and SEO-friendly website.",
    image: testimonialImage3,
    imagePositionY: 0.55,
  },
];

export const faqsData: Faq[] = [
  {
    id: "1",
    question: "How long does it take to build a professional website?",
    answer:
      "The timeline for building a website varies depending on its complexity, number of pages, and required features. Typically, small business websites take 3-6 weeks, while more complex e-commerce or custom web applications may take 2-3 months.",
  },
  {
    id: "2",
    question: "What is your web development process?",
    answer:
      "I follow a structured web development process that includes initial project planning, UI/UX design, front-end and back-end development, testing, and regular client check-ins. This ensures a responsive, SEO-friendly, and user-friendly website.",
  },
  {
    id: "3",
    question: "Do you provide services for international clients?",
    answer:
      "Absolutely! I collaborate with clients worldwide, managing different time zones efficiently. My workflow includes online meetings, project management tools, and seamless communication to deliver high-quality web solutions globally.",
  },
  {
    id: "4",
    question: "Which industries do you have experience in?",
    answer:
      "I have worked with clients across various industries such as technology, e-commerce, hospitality, professional services, and creative agencies. Each project benefits from a tailored approach and innovative digital solutions.",
  },
  {
    id: "5",
    question: "Can you create SEO-friendly websites?",
    answer:
      "Yes, every website I build is optimized for search engines using best practices, including responsive design, fast loading times, semantic HTML, meta tags, and structured content to improve online visibility.",
  },
  {
    id: "6",
    question: "Do you offer website maintenance and support?",
    answer:
      "Yes, I provide ongoing website maintenance and support, including updates, security monitoring, backups, and performance optimization to ensure your website runs smoothly and stays up-to-date.",
  },
];
