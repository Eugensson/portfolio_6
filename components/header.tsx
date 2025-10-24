"use client";

import Link from "next/link";
import { useAnimate } from "motion/react";
import { Menu, Plus } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/button";

import { navItems } from "@/lib/data";

export const Header = () => {
  const [navScope, navAnimate] = useAnimate();
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      navAnimate(navScope.current, { height: "100%" }, { duration: 0.7 });
    } else {
      navAnimate(navScope.current, { height: "0%" });
    }
  }, [
    isOpen,
    navScope,
    navAnimate,
    topLineScope,
    topLineAnimate,
    bottomLineScope,
    bottomLineAnimate,
  ]);

  const handleClickMobileNavItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);

    const url = new URL(e.currentTarget.href);
    const hash = url.hash;

    const target = document.querySelector(hash);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header>
      <div
        className="fixed top-0 left-0 z-10 w-full h-0 overflow-hidden bg-stone-900"
        ref={navScope}
      >
        <nav className="mt-20">
          <ul className="flex flex-col">
            {navItems.map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={handleClickMobileNavItem}
                  className="relative isolate block border-t last:border-b border-stone-800 py-8 group/nav-item text-stone-200"
                >
                  <div className="max-w-350 mx-auto flex items-center justify-between">
                    <span className="text-3xl group-hover/nav-item:pl-4 transition-all duration-500">
                      {label}
                    </span>
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
                  <div className="absolute -z-10 bottom-0 w-full h-0 bg-stone-800 group-hover/nav-item:h-full transition-all duration-500" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="fixed top-0 left-0 z-10 w-full mix-blend-difference backdrop-blur-md">
        <div className="max-w-350 mx-auto h-20 flex items-center justify-between">
          <span className="text-xl font-bold uppercase text-white">
            Alex&nbsp;&nbsp;Taylor
          </span>
        </div>
      </div>
      <div className="fixed top-0 left-0 z-10 w-full">
        <div className="max-w-350 mx-auto h-20 flex items-center justify-end">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="size-11 border border-stone-400 bg-stone-200 rounded-full inline-flex items-center justify-center cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <Plus size={28} className="rotate-45" /> : <Menu />}
            </button>
            <Button variant="primary" className="hidden md:block">
              Contact me
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
