import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

import "../src/index.css";
import { FormSkeleton } from "../src/components/FormSkeleton";

const meta: Meta<typeof FormSkeleton> = {
  title: "Composite/FormSkeleton",
  component: FormSkeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: 400, padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FormSkeleton>;

export const Default: Story = {};

export const NoLabels: Story = {
  args: { showLabels: false, fields: 6 },
};

export const NoSubmitButton: Story = {
  args: { showSubmitButton: false },
};
