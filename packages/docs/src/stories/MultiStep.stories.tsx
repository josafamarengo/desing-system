import type { Meta, StoryObj } from "@storybook/react";
import { MultiStep, MultiStepProps } from "@josafa/react";
import React from "react";

export default {
  title: "Form/Multi Step",
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>{Story()}</div>
      );
    },
  ],
} as Meta<MultiStepProps>;

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
};

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
};
