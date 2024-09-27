import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
// eslint-disable-next-line react-refresh/only-export-components
export const buttonStyles = cva(
  // ["hover:bg-secondary-hover", "transition-colors"],
  ["transition-colors", "font-medium font-['Noto Sans SC']"],
  {
    variants: {
      variant: {
        default: ["hover:text-neutral-600"],
        ghost: ["hover:transparent-600"],
        language: [
          "border-b-2 border-neutral-600 hover:text-neutral-600 transition hover:border-neutral-900",
        ],

        underline: [
          "relative overflow-hidden",
          "before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-neutral-600 before:origin-left",
          "hover:before:scale-x-100 before:transition-transform before:duration-300 before:ease-in-out",
          "hover:text-neutral-600 transition duration-300 ease-in-out",
          "pb-[2px]", // 增加下边距，使文字与下划线保持距离
        ],
        dark: [
          "bg-secondary-dark",
          "hover:bg-secondary-dark-hover",
          "text-secondary",
        ],
      },
      size: {
        default: ["rounded", "p-2"],
        icon: [
          "rounded-full",
          "w-[24px]",
          "h-[24px]",
          "flex",
          "items-center",
          "justify-center",
        ],
        btnL: [
          "flex",
          "items-center",
          "justify-center",
          "whitespace-nowrap",
          "text-[15px]",
          "max-w-[64px]",
          "h-[28px]",
        ],
        btnS: [
          "h-[28px]",
          "text-[12px]",
          "max-w-[54px]",
          "flex",
          "items-center",
          "justify-center",
          "whitespace-nowrap",
        ],
        btnMS: [
          "h-[28px]",
          "text-[12px]",
          "flex",
          "items-center",
          "justify-center",
          "whitespace-nowrap",
          "text-neutral-600",
        ],
        language: [
          "h-[28px]",
          "text-[14px]",
          "max-w-[24px]",
          "flex",
          "items-center",
          "justify-center",
          "whitespace-nowrap",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
//set the secondary color in talewind.config.js

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    />
  );
}
