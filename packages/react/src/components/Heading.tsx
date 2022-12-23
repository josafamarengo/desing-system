import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Heading = styled("h2", {
  fontFamily: "$default",
  lineHeight: "$shorter",
  margin: 0,
  color: "$gray100",

  variants: {
    size: {
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      "xl": { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "3xl": { fontSize: "$3xl" },
      "4xl": { fontSize: "$4xl" },
    },
  },

  defaultVariants: {
    size: "xl",
  },
});

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType;
}

Heading.displayName = "Heading";
