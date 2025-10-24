import { useEffect } from "react";
import SplitType from "split-type";
import { stagger, useAnimate } from "motion/react";

export const useTextRevealAnimation = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!scope.current) return;

    const split = new SplitType(scope.current, {
      types: "lines,words",
      tagName: "span",
    });

    split.words?.forEach((word) => {
      word.style.display = "inline-block";
      word.style.transform = "translateY(100%)";
      word.style.opacity = "0";
    });

    return () => split.revert();
  }, [scope]);

  const entranceAnimation = async () => {
    if (!scope.current) return;
    const words = scope.current.querySelectorAll(".word");

    if (!words.length) return;

    await animate(
      words,
      { transform: "translateY(0%)", opacity: 1 },
      { duration: 0.5, delay: stagger(0.08) }
    );
  };

  const exitAnimation = async () => {
    if (!scope.current) return;
    const words = scope.current.querySelectorAll(".word");

    if (!words.length) return;

    await animate(
      words,
      { transform: "translateY(100%)", opacity: 0 },
      { duration: 0.4, delay: stagger(0.05, { startDelay: 0.15 }) }
    );
  };

  return {
    scope,
    entranceAnimation,
    exitAnimation,
  };
};
