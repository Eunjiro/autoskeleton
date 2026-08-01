import type { Meta, StoryObj } from "@storybook/react-vite";

import "../src/index.css";
import { AvatarSkeleton } from "../src/components/AvatarSkeleton";

const meta: Meta<typeof AvatarSkeleton> = {
  title: "Primitives/AvatarSkeleton",
  component: AvatarSkeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof AvatarSkeleton>;

export const Default: Story = {};

export const Small: Story = {
  args: { size: 24 },
};

export const Large: Story = {
  args: { size: 96 },
};
