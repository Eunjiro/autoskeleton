import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

import "../src/index.css";
import { TimelineSkeleton } from "../src/components/TimelineSkeleton";

const meta: Meta<typeof TimelineSkeleton> = {
  title: "Composite/TimelineSkeleton",
  component: TimelineSkeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: 400, padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TimelineSkeleton>;

export const Default: Story = {
  args: { events: 5 },
};

export const NoTimestamps: Story = {
  args: { events: 4, showTimestamp: false },
};
