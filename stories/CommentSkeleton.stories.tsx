import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

import "../src/index.css";
import { CommentSkeleton } from "../src/components/CommentSkeleton";

const meta: Meta<typeof CommentSkeleton> = {
  title: "Composite/CommentSkeleton",
  component: CommentSkeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: 480, padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CommentSkeleton>;

export const Default: Story = {
  args: { items: 3 },
};

export const WithActions: Story = {
  args: { items: 3, showActions: true },
};

export const LongerComments: Story = {
  args: { items: 2, lines: 4 },
};
