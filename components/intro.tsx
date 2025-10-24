"use client";

import { useInView } from "motion/react";
import { useEffect, useRef } from "react";

import { useTextRevealAnimation } from "@/hooks/use-text-reveal-animation";

export const Intro = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scope, entranceAnimation } = useTextRevealAnimation();

  const inView = useInView(scope, { once: true });

  useEffect(() => {
    if (!inView) return;

    entranceAnimation();
  }, [entranceAnimation, inView]);

  return (
    <section
      className="section mt-12 md:mt-16 lg:mt-20"
      id="intro"
      ref={sectionRef}
    >
      <div className="container">
        <h2 className="h2 lg:w-4/5" ref={scope}>
          Building beautiful websites with clean code and thoughtful design to
          help your business grow and stand out online.
        </h2>
      </div>
    </section>
  );
};
