import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

import "../src/index.css";
import { TableSkeleton } from "../src/components/TableSkeleton";

const meta: Meta<typeof TableSkeleton> = {
  title: "Composite/TableSkeleton",
  component: TableSkeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: 600, padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TableSkeleton>;

export const Default: Story = {};

export const NoHeader: Story = {
  args: { showHeader: false },
};

export const WideTable: Story = {
  args: { rows: 8, columns: 6 },
};
