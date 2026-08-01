import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

import "../src/index.css";
import { ListSkeleton } from "../src/components/ListSkeleton";

const meta: Meta<typeof ListSkeleton> = {
  title: "Composite/ListSkeleton",
  component: ListSkeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: 360, padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ListSkeleton>;

export const Default: Story = {};

export const ChatStyleTwoLines: Story = {
  args: { items: 8, lines: 2, iconSize: 44 },
};

export const WithTrailingElement: Story = {
  args: { showTrailing: true },
};
