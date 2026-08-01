import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

import "../src/index.css";
import { GallerySkeleton } from "../src/components/GallerySkeleton";

const meta: Meta<typeof GallerySkeleton> = {
  title: "Composite/GallerySkeleton",
  component: GallerySkeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: 480, padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof GallerySkeleton>;

export const Default: Story = {};

export const FourColumnLandscape: Story = {
  args: { columns: 4, aspectRatio: "4/3", items: 12 },
};

export const TwoColumns: Story = {
  args: { columns: 2, items: 4 },
};
