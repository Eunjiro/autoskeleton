import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

import "../src/index.css";
import { ImageSkeleton } from "../src/components/ImageSkeleton";

const meta: Meta<typeof ImageSkeleton> = {
  title: "Primitives/ImageSkeleton",
  component: ImageSkeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ImageSkeleton>;

export const Default: Story = {
  args: { height: 200 },
};

export const AspectRatio16x9: Story = {
  args: { aspectRatio: "16/9" },
};

export const AspectRatioSquare: Story = {
  args: { aspectRatio: "1" },
};
