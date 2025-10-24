"use client";

import { useRef, useState } from "react";
import { useScroll, motion, useTransform, AnimatePresence } from "motion/react";

import { TestimonialItem } from "@/components/testimonial-item";

import { testimonialsData } from "@/lib/data";

export const Testimonials = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });

  const transformTop = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  const [testimonialIndex, setTestimonialIndex] = useState<number>(0);

  const handleClickPrevious = () => {
    setTestimonialIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleClickNext = () => {
    setTestimonialIndex((prevIndex) =>
      prevIndex < testimonialsData.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <section className="section" id="testimonials">
      <h2 className="h2 flex flex-col overflow-hidden" ref={titleRef}>
        <motion.span
          className="whitespace-nowrap"
          style={{
            x: transformTop,
          }}
        >
          Some nice words from my past clients
        </motion.span>
        <motion.span
          className="whitespace-nowrap self-end text-red-orange-500"
          style={{
            x: transformBottom,
          }}
        >
          Some nice words from my past clients
        </motion.span>
      </h2>
      <div className="container">
        <ul className="mt-20">
          <AnimatePresence mode="wait" initial={false}>
            {testimonialsData.map(
              (testimonial, index) =>
                index === testimonialIndex && (
                  <li key={testimonial.id}>
                    <TestimonialItem testimonial={testimonial} />
                  </li>
                )
            )}
          </AnimatePresence>
        </ul>
        <div className="mt-6 lg:mt-10 flex items-center gap-4">
          <button
            className="inline-flex items-center justify-center border border-stone-400 size-11 rounded-full hover:bg-red-orange-500 hover:border-red-orange-500 hover:text-white transition-all duration-300"
            onClick={handleClickPrevious}
          >
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex items-center justify-center border border-stone-400 size-11 rounded-full hover:bg-red-orange-500 hover:border-red-orange-500 hover:text-white transition-all duration-300"
            onClick={handleClickNext}
          >
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
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
