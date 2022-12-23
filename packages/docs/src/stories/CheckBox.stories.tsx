import type { Meta, StoryObj } from "@storybook/react";
import { Text, Checkbox, CheckboxProps } from "@josafa/react";
import React from "react";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          {Story()}
          <Text style={{ marginLeft: "1rem" }} size="sm">
            Accept terms of use
          </Text>
        </div>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};
