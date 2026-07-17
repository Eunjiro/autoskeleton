import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

import "../src/index.css";
import { Skeleton } from "../src/components/Skeleton";
import { SkeletonProvider } from "../src/context/SkeletonProvider";
import { DARK_THEME } from "../src/constants/defaultTheme";

const meta: Meta<typeof Skeleton> = {
  title: "Primitives/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: 400, padding: 16 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: { width: 300, height: 20 },
};

export const Circle: Story = {
  args: { variant: "circle", size: 56 },
};

export const Rounded: Story = {
  args: { variant: "rounded", width: 120, height: 36 },
};

export const Pulse: Story = {
  args: { width: 300, height: 20, animation: "pulse" },
};

export const Fade: Story = {
  args: { width: 300, height: 20, animation: "fade" },
};

export const None: Story = {
  args: { width: 300, height: 20, animation: "none" },
};

export const CustomRadius: Story = {
  args: { width: 200, height: 60, radius: "6px 24px" },
};

export const FullWidth: Story = {
  args: { height: 20 },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: 400, padding: 16 }}>
        <Story />
      </div>
    ),
  ],
};

export const DarkTheme: Story = {
  args: { width: 300, height: 20 },
  decorators: [
    (Story: ComponentType) => (
      <SkeletonProvider {...DARK_THEME}>
        <div style={{ background: "#1f2937", padding: 24, borderRadius: 8 }}>
          <Story />
        </div>
      </SkeletonProvider>
    ),
  ],
};
