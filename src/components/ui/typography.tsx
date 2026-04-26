import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const getDefaultElement = (
  variant: string | null | undefined,
): React.ElementType => {
  switch (variant) {
    case "h1":
      return "h1";
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "h4":
      return "h4";
    case "h5":
      return "h5";
    case "h6":
      return "h6";
    case "lead":
    case "large":
    case "body":
    case "bodyLarge":
    case "bodySmall":
      return "p";
    case "caption":
    case "muted":
    case "small":
      return "span";
    case "code":
      return "code";
    case "label":
      return "label";
    default:
      return "p";
  }
};

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl lg:text-6xl font-bold lg:font-semibold tracking-tight",
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-sm lg:text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-sm lg:text-xl font-semibold tracking-tight",
      h5: "scroll-m-20 text-lg font-semibold tracking-tight",
      h6: "scroll-m-20 text-base font-semibold tracking-tight",
      body: "text-sm lg:text-base leading-7",
      bodyLarge: "text-lg leading-7",
      bodySmall: "text-sm leading-6",
      caption: "text-sm text-muted-foreground",
      label:
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      link: "text-sm font-medium hover:text-foreground transition-colors",
      muted: "text-sm text-muted-foreground",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
    },
    textColor: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-foreground",
      secondary: "text-secondary-foreground",
      destructive: "text-destructive",
      accent: "text-accent-foreground",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
  },
  defaultVariants: {
    variant: "body",
    textColor: "default",
    align: "left",
  },
});

export interface TypographyProps
  extends
    Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, textColor, align, as, children, ...props }, ref) => {
    const Comp = as || getDefaultElement(variant);

    return React.createElement(
      Comp,
      {
        className: cn(
          typographyVariants({ variant, textColor, align, className }),
        ),
        ref,
        ...props,
      },
      children,
    );
  },
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
