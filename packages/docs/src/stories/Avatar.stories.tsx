import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarProps } from "@josafa/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/josafamarengo.png",
    alt: "Josafá Marengo",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
