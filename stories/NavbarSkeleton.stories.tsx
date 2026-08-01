import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

import "../src/index.css";
import { NavbarSkeleton } from "../src/components/NavbarSkeleton";

const meta: Meta<typeof NavbarSkeleton> = {
  title: "Composite/NavbarSkeleton",
  component: NavbarSkeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: 800, padding: 16, border: "1px solid #e5e7eb" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof NavbarSkeleton>;

export const Default: Story = {};

export const Minimal: Story = {
  args: { navLinks: 0, actions: 1 },
};
