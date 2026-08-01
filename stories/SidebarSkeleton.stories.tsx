import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

import "../src/index.css";
import { SidebarSkeleton } from "../src/components/SidebarSkeleton";

const meta: Meta<typeof SidebarSkeleton> = {
  title: "Composite/SidebarSkeleton",
  component: SidebarSkeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: 240, height: 500, padding: 16, border: "1px solid #e5e7eb" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SidebarSkeleton>;

export const Default: Story = {};

export const WithSectionHeadings: Story = {
  args: { showSectionHeadings: true, navItems: 9 },
};

export const NoProfile: Story = {
  args: { showProfile: false },
};
