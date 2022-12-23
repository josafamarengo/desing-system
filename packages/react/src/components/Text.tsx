import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Text = styled("p", {
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",

  variants: {
    size: {
      "2xs": { fontSize: "$2xs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "3xl": { fontSize: "$3xl" },
      "4xl": { fontSize: "$4xl" },
    },
    fontWeight: {
      normal: { fontWeight: "$normal" },
      medium: { fontWeight: "$medium" },
      bold: { fontWeight: "$bold" },
    },
    letterSpacing: {
      tighter: { letterSpacing: "-0.05em" },
      tight: { letterSpacing: "-0.025em" },
      normal: { letterSpacing: "0" },
      wide: { letterSpacing: "0.025em" },
      wider: { letterSpacing: "0.05em" },
      widest: { letterSpacing: "0.1em" },
    },
    lineHeight: {
      none: { lineHeight: "1" },
      shorter: { lineHeight: "1.25" },
      short: { lineHeight: "1.375" },
      base: { lineHeight: "1.5" },
      tall: { lineHeight: "1.625" },
      taller: { lineHeight: "2" },
    },
  },

  defaultVariants: {
    size: "md",
    fontWeight: "normal",
    letterSpacing: "normal",
    lineHeight: "none",
  },
});

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType;
}

Text.displayName = "Text";
