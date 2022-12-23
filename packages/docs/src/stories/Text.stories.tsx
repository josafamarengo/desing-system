import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@josafa/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    size: "md",
    children:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro reprehenderit est veniam? Rem recusandae sint perspiciatis debitis corrupti. Deserunt neque exercitationem illo voluptatum laudantium culpa suscipit accusantium blanditiis voluptas numquam.",
  },
  argTypes: {
    size: {
      options: [
        "2xs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
      ],
      control: {
        type: "inline-radio",
      },
    },
    fontWeight: {
        options: ["normal", "medium", "bold"],
        control: {
            type: "inline-radio",
        },
    },
    letterSpacing: {
        options: ["tighter", "tight", "normal", "wide", "wider", "widest"],
        control: {
            type: "inline-radio",
        },
    },
    lineHeight: {
        options: ["none", "shorter", "short", "base", "tall", "taller"],
        control: {
            type: "inline-radio",
        },
    },
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
};
