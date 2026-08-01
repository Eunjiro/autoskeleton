import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

import "../src/index.css";
import { ProductCardSkeleton } from "../src/components/ProductCardSkeleton";

const meta: Meta<typeof ProductCardSkeleton> = {
  title: "Composite/ProductCardSkeleton",
  component: ProductCardSkeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: 220, padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProductCardSkeleton>;

export const Default: Story = {};

export const NoRating: Story = {
  args: { showRating: false },
};

export const ProductGrid: Story = {
  decorators: [],
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 220px)",
        gap: 20,
        padding: 24,
      }}
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  ),
};
