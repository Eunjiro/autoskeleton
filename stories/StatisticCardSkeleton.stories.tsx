import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

import "../src/index.css";
import { StatisticCardSkeleton } from "../src/components/StatisticCardSkeleton";

const meta: Meta<typeof StatisticCardSkeleton> = {
  title: "Composite/StatisticCardSkeleton",
  component: StatisticCardSkeleton,
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
type Story = StoryObj<typeof StatisticCardSkeleton>;

export const Default: Story = {};

export const NoIcon: Story = {
  args: { showIcon: false },
};

export const KPIRowGrid: Story = {
  decorators: [],
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 16,
        width: 720,
        padding: 24,
      }}
    >
      {Array.from({ length: 4 }).map((_, i) => (
        <StatisticCardSkeleton key={i} />
      ))}
    </div>
  ),
};
