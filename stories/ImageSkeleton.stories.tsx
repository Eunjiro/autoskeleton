import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";
import { expect } from "storybook/test";

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

/**
 * Regression test: `aspectRatio` used to render as a thin ~16px-tall bar
 * (Skeleton's internal "no height given" default) instead of a properly
 * proportioned box, because that hardcoded 16px height blocked the CSS
 * `aspect-ratio` from ever computing a real height. jsdom doesn't run real
 * layout, so this only means anything running in a real browser (Chromium,
 * via `@storybook/addon-vitest` — see `npm run test:storybook`).
 */
export const AspectRatioRendersARealBox: Story = {
  args: { aspectRatio: "16/9" },
  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector(".skeleton") as HTMLElement;
    const { width, height } = el.getBoundingClientRect();
    await expect(width).toBeGreaterThan(0);
    await expect(height).toBeGreaterThan(0);
    // width:320 decorator / (16/9) ≈ 180 — nowhere near the old 16px bug.
    await expect(height).toBeGreaterThan(100);
    await expect(Math.abs(width / height - 16 / 9)).toBeLessThan(0.05);
  },
};
