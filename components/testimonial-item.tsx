"use client";

import Image from "next/image";
import { useEffect } from "react";
import { usePresence, motion } from "motion/react";

import { type Testimonial } from "@/types";
import { useTextRevealAnimation } from "@/hooks/use-text-reveal-animation";

interface TestimonialItemProps {
  testimonial: Testimonial;
}

export const TestimonialItem = ({ testimonial }: TestimonialItemProps) => {
  const { quote, name, role, company, image, imagePositionY } = testimonial;
  const {
    scope: quoteScope,
    entranceAnimation: quoteEntranceAnimation,
    exitAnimation: quoteExitAnimation,
  } = useTextRevealAnimation();
  const {
    scope: citeScope,
    entranceAnimation: citeEntranceAnimation,
    exitAnimation: citeExitAnimation,
  } = useTextRevealAnimation();
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (isPresent) {
      quoteEntranceAnimation().then(() => {
        citeEntranceAnimation();
      });
    } else {
      Promise.all([quoteExitAnimation(), citeExitAnimation()]).then(() => {
        safeToRemove();
      });
    }
  }, [
    citeEntranceAnimation,
    citeExitAnimation,
    isPresent,
    quoteEntranceAnimation,
    quoteExitAnimation,
    safeToRemove,
  ]);

  return (
    <article className="grid md:grid-cols-5 md:gap-8 lg:gap-16 md:items-center">
      <div className="relative aspect-square md:aspect-9/16 md:col-span-2">
        <motion.div
          className="absolute h-full bg-stone-900"
          initial={{ width: "100%" }}
          animate={{ width: 0 }}
          exit={{ width: "100%" }}
          transition={{ duration: 0.5 }}
        />
        <Image
          src={image}
          alt={name}
          className="size-full object-cover"
          style={{
            objectPosition: `50% ${imagePositionY * 100}%`,
          }}
        />
      </div>
      <blockquote className="md:col-span-3">
        <div
          className="text-3xl md:text-4xl lg:text-6xl mt-8 md:mt-0"
          ref={quoteScope}
        >
          <span>&ldquo;</span>
          {quote}
          <span>&rdquo;</span>
        </div>
        <cite
          className="mt-4 md:mt-8 block not-italic md:text-lg lg:text-xl"
          ref={citeScope}
        >
          {name}, {role} at {company}
        </cite>
      </blockquote>
    </article>
  );
};
