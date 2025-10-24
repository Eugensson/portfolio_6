"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";
import { faqsData } from "@/lib/data";

export const Faqs = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="section" id="faqs">
      <div className="container">
        <h2 className="h2">FAQs</h2>
        <ul className="mt-10 md:mt-16 lg:mt-20">
          {faqsData.map(({ id, question, answer }, faqIndex) => (
            <li
              key={id}
              onClick={() =>
                setSelectedIndex(selectedIndex === faqIndex ? null : faqIndex)
              }
              className="relative isolate border-t last:border-b border-stone-400 border-dotted py-6 md:py-8 lg:py-10 group/faq cursor-pointer"
            >
              <div
                className={cn(
                  "absolute left-0 bottom-0 -z-10 h-0 w-full bg-stone-300 group-hover/faq:h-full transition-all duration-700",
                  faqIndex === selectedIndex && "h-full"
                )}
              />
              <div
                className={cn(
                  "flex items-center justify-between gap-4 transition-all duration-700 group-hover/faq:lg:px-8",
                  faqIndex === selectedIndex && "lg:px-8"
                )}
              >
                <p className="text-2xl md:text-3xl lg:text-4xl">{question}</p>
                <div
                  className={cn(
                    "inline-flex items-center justify-center border border-stone-400 size-11 rounded-full shrink-0 transition-all duration-300 bg-stone-200",
                    faqIndex === selectedIndex && "rotate-45"
                  )}
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
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="overflow-hidden lg:px-8"
                  >
                    <p className="text-xl mt-4">{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
