import type { Meta, StoryObj } from "@storybook/react-vite";

import "../src/index.css";
import { TextSkeleton } from "../src/components/TextSkeleton";

const meta: Meta<typeof TextSkeleton> = {
  title: "Primitives/TextSkeleton",
  component: TextSkeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div style={{ width: 400, padding: 16 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TextSkeleton>;

export const Default: Story = {};

export const OneLineHeading: Story = {
  args: { lines: 1, lineHeight: 28 },
};

export const Paragraph: Story = {
  args: { lines: 5, lineHeight: 15, gap: 10 },
};

export const RandomWidths: Story = {
  args: { lines: 4, randomizeWidths: true },
};

export const LongLastLine: Story = {
  args: { lines: 3, lastLineWidth: "90%" },
};
