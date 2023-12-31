import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { ComponentProps } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      ghost: ["hover:bg-gray-100"],
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
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

const Button = ({
  variant = "default",
  size = "default",
  className,
  ...props
}: ButtonProps) => {
  const styles = twMerge(buttonStyles({ variant, size }), className);
  return <button className={styles} {...props} />;
};

export default Button;
