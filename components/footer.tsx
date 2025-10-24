"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "motion/react";

import { Button } from "@/components/button";

import { footerLinks } from "@/lib/data";
import { useTextRevealAnimation } from "@/hooks/use-text-reveal-animation";

export const Footer = () => {
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope);

  useEffect(() => {
    if (!inView) return;
    entranceAnimation();
  }, [entranceAnimation, inView]);

  const handleClickNavItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const url = new URL(e.currentTarget.href);
    const hash = url.hash;

    const target = document.querySelector(hash);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-stone-900 text-white" id="contact">
      <div className="container">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-green-400 animate-pulse" />
            <span className="uppercase">One spot available for next month</span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2 className="mt-8 h2 font-extralight" ref={scope}>
                Enough talk. Let&apos;s make something great together.
              </h2>
              <Link href="mailto:info@alextaylor.site">
                <Button
                  className="mt-8"
                  variant="secondary"
                  iconAfter={
                    <div className="size-6 overflow-hidden">
                      <div className="h-6 w-12 flex transition-transform duration-300 group-hover/button:-translate-x-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </div>
                    </div>
                  }
                >
                  info@alextaylor.dev
                </Button>
              </Link>
            </div>
            <nav>
              <ul className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                {footerLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} onClick={handleClickNavItem}>
                      <Button variant="text" className="text-lg">
                        {label}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <p className="py-8 border-t border-stone-400/10 text-white/30 text-sm">
          Copyright &copy; 2025 Alex Taylor &bull; All rights reserved
        </p>
      </div>
    </footer>
  );
};
