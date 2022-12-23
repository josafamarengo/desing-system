import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextInput, TextInputProps } from "@josafa/react";
import React from "react";

export default {
  title: "Form/Text Input",
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <div
          style={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </div>
      );
    },
  ],
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: "Type your name",
  },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: "cal.com/",
  },
};
