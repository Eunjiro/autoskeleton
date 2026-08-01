import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

import "../src/index.css";
import { MediaObjectSkeleton } from "../src/components/MediaObjectSkeleton";

const meta: Meta<typeof MediaObjectSkeleton> = {
  title: "Composite/MediaObjectSkeleton",
  component: MediaObjectSkeleton,
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
type Story = StoryObj<typeof MediaObjectSkeleton>;

export const Default: Story = {};

export const CircleAvatar: Story = {
  args: { mediaShape: "circle", mediaSize: 48 },
};

export const MediaOnRight: Story = {
  args: { mediaPosition: "right" },
};
