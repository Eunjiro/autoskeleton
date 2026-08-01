import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";
import { expect } from "storybook/test";

import "../src/index.css";
import { StoriesBarSkeleton } from "../src/components/StoriesBarSkeleton";

const meta: Meta<typeof StoriesBarSkeleton> = {
  title: "Composite/StoriesBarSkeleton",
  component: StoriesBarSkeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: 360, padding: 16, border: "1px solid #e5e7eb" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof StoriesBarSkeleton>;

export const Default: Story = {
  args: { items: 10 },
};

export const NoLabels: Story = {
  args: { items: 10, avatarSize: 40, showLabel: false },
};

/**
 * Verifies items actually overflow into a scrollable row instead of
 * shrinking to fit — the whole point of this component versus a plain
 * `direction="row"` `SkeletonGroup`. jsdom doesn't run real layout, so
 * `scrollWidth`/`clientWidth` are meaningless there; this only means
 * anything running in a real browser (see `npm run test:storybook`).
 */
export const OverflowsRatherThanShrinking: Story = {
  args: { items: 10 },
  play: async ({ canvasElement }) => {
    const row = canvasElement.querySelector(
      '[style*="overflow-x"]',
    ) as HTMLElement;
    await expect(row).not.toBeNull();

    // 10 items at 64px avatars + gap comfortably exceed the 360px decorator.
    await expect(row.scrollWidth).toBeGreaterThan(row.clientWidth);

    const firstAvatar = row.querySelector(".skeleton") as HTMLElement;
    await expect(firstAvatar.getBoundingClientRect().width).toBe(64);
  },
};
