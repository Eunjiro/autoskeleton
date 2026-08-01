import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

import "../src/index.css";
import { ChatMessageSkeleton } from "../src/components/ChatMessageSkeleton";

const meta: Meta<typeof ChatMessageSkeleton> = {
  title: "Composite/ChatMessageSkeleton",
  component: ChatMessageSkeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: 360, padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ChatMessageSkeleton>;

export const Default: Story = {
  args: { messages: 5 },
};

export const WithoutInputBar: Story = {
  args: { messages: 4, showInput: false },
};
