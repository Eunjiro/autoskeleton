import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";
import { expect } from "storybook/test";

import "../src/index.css";
import { SkeletonGroup } from "../src/components/SkeletonGroup";
import { Skeleton } from "../src/components/Skeleton";
import { AvatarSkeleton } from "../src/components/AvatarSkeleton";
import { TextSkeleton } from "../src/components/TextSkeleton";

const meta: Meta<typeof SkeletonGroup> = {
  title: "Primitives/SkeletonGroup",
  component: SkeletonGroup,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: 320, padding: 16 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SkeletonGroup>;

export const Column: Story = {
  args: { gap: 12 },
  render: (args) => (
    <SkeletonGroup {...args}>
      <Skeleton height={16} />
      <Skeleton height={16} width="75%" />
      <Skeleton height={16} width="50%" />
    </SkeletonGroup>
  ),
};

export const Row: Story = {
  args: { direction: "row", gap: 12, align: "center" },
  render: (args) => (
    <SkeletonGroup {...args}>
      <AvatarSkeleton size={48} />
      <TextSkeleton lines={2} />
    </SkeletonGroup>
  ),
};

/**
 * Regression test for a bug where a row-direction `SkeletonGroup` rendered
 * only its fixed-size children (e.g. an avatar) and silently collapsed
 * anything with a percentage width (e.g. `TextSkeleton`) to 0px.
 *
 * `src/test/*` runs under jsdom, which never runs real box-model/flex
 * layout — a component can pass every jsdom assertion while rendering
 * invisibly. This story runs in an actual Chromium instance (via
 * `@storybook/addon-vitest` + Playwright, see `vitest.config.ts`'s
 * "storybook" project / `npm run test:storybook`), so `getBoundingClientRect`
 * here reflects real rendered layout and would have caught this bug.
 */
export const RowLayoutDoesNotCollapse: Story = {
  args: { direction: "row", gap: 12, align: "center" },
  render: (args) => (
    <SkeletonGroup {...args} aria-label="Loading profile">
      <AvatarSkeleton size={48} data-testid="avatar" />
      <TextSkeleton lines={2} />
    </SkeletonGroup>
  ),
  play: async ({ canvasElement }) => {
    const group = canvasElement.querySelector('[aria-label="Loading profile"]');
    await expect(group).not.toBeNull();

    // 1 avatar + 2 text lines.
    const placeholders = group!.querySelectorAll(".skeleton");
    await expect(placeholders.length).toBe(3);

    for (const el of placeholders) {
      const { width } = el.getBoundingClientRect();
      await expect(width).toBeGreaterThan(0);
    }

    const avatar = canvasElement.querySelector('[data-testid="avatar"]');
    await expect(avatar!.getBoundingClientRect().width).toBe(48);

    // Regression: the text lines' *height* must stay at their specified
    // 16px too. An earlier version of the width fix collapsed each line to
    // ~1px tall instead, because the line (inside TextSkeleton's column
    // wrapper) inherited the outer row's flex-fill signal from context and
    // misapplied it to its own main axis — height, not width. Caught only
    // by running this in a real app, not by any width-only assertion.
    const [, firstLine, secondLine] = Array.from(placeholders);
    await expect(firstLine.getBoundingClientRect().height).toBe(16);
    await expect(secondLine.getBoundingClientRect().height).toBe(16);
  },
};

/**
 * Verifies that `columns`'s `@container` breakpoints actually respond to the
 * group's own width, not the viewport's. jsdom can't evaluate `@container`
 * at all, so this only means anything running in a real browser (Chromium,
 * via `@storybook/addon-vitest` — see `npm run test:storybook`).
 *
 * Also guards a real bug caught while implementing this: the base value
 * must live in the generated stylesheet, not inline `style` — an inline
 * style value always out-ranks a stylesheet rule (including `@container`
 * ones) regardless of specificity, so the breakpoint override would
 * silently never apply if the base were left inline.
 */
export const GridRespondsToContainerWidth: Story = {
  decorators: [],
  render: () => (
    <div data-testid="resizer" style={{ width: 300 }}>
      <SkeletonGroup
        layout="grid"
        columns={{ base: 1, md: 3 }}
        className="responsive-grid"
      >
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
      </SkeletonGroup>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const resizer = canvasElement.querySelector(
      '[data-testid="resizer"]',
    ) as HTMLElement;
    const grid = canvasElement.querySelector(".responsive-grid") as HTMLElement;

    const trackCount = () =>
      getComputedStyle(grid).gridTemplateColumns.trim().split(/\s+/).length;

    // 300px is below the "md" (640px) container breakpoint: base (1 column).
    await expect(trackCount()).toBe(1);

    // Widen past 640px: the @container rule should switch to 3 columns.
    resizer.style.width = "700px";
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await expect(trackCount()).toBe(3);

    // Narrow back below 640px: should revert to the base value.
    resizer.style.width = "300px";
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await expect(trackCount()).toBe(1);
  },
};
