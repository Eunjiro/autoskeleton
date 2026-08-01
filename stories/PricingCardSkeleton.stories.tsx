import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

import "../src/index.css";
import { PricingCardSkeleton } from "../src/components/PricingCardSkeleton";

const meta: Meta<typeof PricingCardSkeleton> = {
  title: "Composite/PricingCardSkeleton",
  component: PricingCardSkeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: 240, padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PricingCardSkeleton>;

export const Default: Story = {};

export const WithBadge: Story = {
  args: { showBadge: true },
};

export const ThreeTierGrid: Story = {
  decorators: [],
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 240px)",
        gap: 24,
        padding: 24,
      }}
    >
      <PricingCardSkeleton />
      <PricingCardSkeleton showBadge />
      <PricingCardSkeleton />
    </div>
  ),
};
