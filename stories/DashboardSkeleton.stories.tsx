import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

import "../src/index.css";
import { DashboardSkeleton } from "../src/components/DashboardSkeleton";

const meta: Meta<typeof DashboardSkeleton> = {
  title: "Composite/DashboardSkeleton",
  component: DashboardSkeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: 800, padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DashboardSkeleton>;

export const Default: Story = {};

export const CompactNoTable: Story = {
  args: { tableRows: 0, chartHeight: 200 },
};

export const NoChart: Story = {
  args: { showChart: false },
};
