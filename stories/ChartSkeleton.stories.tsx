import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

import "../src/index.css";
import { ChartSkeleton } from "../src/components/ChartSkeleton";

const meta: Meta<typeof ChartSkeleton> = {
  title: "Composite/ChartSkeleton",
  component: ChartSkeleton,
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
type Story = StoryObj<typeof ChartSkeleton>;

export const Bar: Story = {
  args: { type: "bar" },
};

export const Line: Story = {
  args: { type: "line" },
};

export const Donut: Story = {
  args: { type: "donut", height: 180 },
};

export const ManyBars: Story = {
  args: { type: "bar", points: 14 },
};
