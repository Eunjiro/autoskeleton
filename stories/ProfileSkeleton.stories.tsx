import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

import "../src/index.css";
import { ProfileSkeleton } from "../src/components/ProfileSkeleton";

const meta: Meta<typeof ProfileSkeleton> = {
  title: "Composite/ProfileSkeleton",
  component: ProfileSkeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: 320, padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProfileSkeleton>;

export const Default: Story = {};

export const NoStats: Story = {
  args: { statsCount: 0 },
};

export const CompactNoButton: Story = {
  args: { showButton: false, bioLines: 1 },
};
