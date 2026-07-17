import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

import "../src/index.css";
import { CardSkeleton } from "../src/components/CardSkeleton";
import { SkeletonProvider } from "../src/context/SkeletonProvider";
import { DARK_THEME } from "../src/constants/defaultTheme";

const meta: Meta<typeof CardSkeleton> = {
  title: "Composite/CardSkeleton",
  component: CardSkeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: 340, padding: 16 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CardSkeleton>;

export const Default: Story = {};

export const WithAvatar: Story = {
  args: { showAvatar: true },
};

export const WithoutImage: Story = {
  args: { showImage: false },
};

export const WithoutButton: Story = {
  args: { showButton: false },
};

export const HorizontalCard: Story = {
  args: {
    direction: "row",
    imageWidth: 120,
    imageHeight: 120,
    lines: 2,
  },
};

export const DarkTheme: Story = {
  decorators: [
    (Story: ComponentType) => (
      <SkeletonProvider {...DARK_THEME}>
        <div style={{ background: "#111827", padding: 16, borderRadius: 12 }}>
          <Story />
        </div>
      </SkeletonProvider>
    ),
  ],
};
