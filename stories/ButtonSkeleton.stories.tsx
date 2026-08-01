import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

import "../src/index.css";
import { ButtonSkeleton } from "../src/components/ButtonSkeleton";

const meta: Meta<typeof ButtonSkeleton> = {
  title: "Primitives/ButtonSkeleton",
  component: ButtonSkeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof ButtonSkeleton>;

export const Default: Story = {};

export const Rectangular: Story = {
  args: { radius: "md" },
};

export const FullWidth: Story = {
  args: { width: "100%" },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: 280 }}>
        <Story />
      </div>
    ),
  ],
};
