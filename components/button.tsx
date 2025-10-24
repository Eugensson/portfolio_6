import { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export const Button = (
  props: {
    variant: "primary" | "secondary" | "text";
    iconAfter?: React.ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { className, variant, iconAfter, children, ...rest } = props;

  return (
    <button
      className={cn(
        "h-11 px-6 inline-flex items-center gap-2 rounded-xl border border-red-orange-500 uppercase transition-all duration-500 relative group/button cursor-pointer",
        variant === "primary" && "bg-red-orange-500 text-white",
        variant === "secondary" && "hover:bg-red-orange-500 hover:text-white",
        variant === "text" &&
          "h-auto px-0 border-transparent after:transition-all after:duration-500 after:content-[''] after:h-px after:w-0 after:absolute after:top-full after:bg-orange-500 hover:after:w-full",
        className
      )}
      {...rest}
    >
      <span>{children}</span>
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  );
};
