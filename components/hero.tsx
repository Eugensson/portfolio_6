"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { Button } from "@/components/button";
import heroImage from "@/public/assets/hero-image.jpg";

import { handleClickNavItem } from "@/lib/utils";
import { useTextRevealAnimation } from "@/hooks/use-text-reveal-animation";

export const Hero = () => {
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const scrollingDiv = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ["start end", "end end"],
  });

  const portraitWidth = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]);

  useEffect(() => {
    entranceAnimation();
  }, [entranceAnimation]);

  return (
    <section id="home">
      <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="pl-4 lg:pl-12 max-w-200">
            <motion.h1
              ref={scope}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h1 mt-40 md:mt-0"
            >
              Crafting digital experiences through
              <br />
              code and creative design
            </motion.h1>
            <div className="mt-10 flex flex-col md:flex-row items-start md:items-center gap-6">
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.75 }}
              >
                <Link href="#projects" onClick={handleClickNavItem}>
                  <Button
                    variant="secondary"
                    iconAfter={
                      <div className="size-5 overflow-hidden">
                        <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                            />
                          </svg>
                        </div>
                      </div>
                    }
                  >
                    <span>View my work</span>
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.25 }}
              >
                <Link href="#contact" onClick={handleClickNavItem}>
                  <Button variant="text">Let&apos;s talk</Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="relative md:col-span-5">
          <motion.div
            className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:w-full!"
            style={{
              width: portraitWidth,
            }}
          >
            <Image
              src={heroImage}
              alt="Developer image"
              className="size-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      <div className="md:h-[200vh]" ref={scrollingDiv} />
    </section>
  );
};
