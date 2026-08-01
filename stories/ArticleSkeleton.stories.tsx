import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";

import "../src/index.css";
import { ArticleSkeleton } from "../src/components/ArticleSkeleton";

const meta: Meta<typeof ArticleSkeleton> = {
  title: "Composite/ArticleSkeleton",
  component: ArticleSkeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: 560, padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ArticleSkeleton>;

export const Default: Story = {};

export const NoHeroImage: Story = {
  args: { showHeroImage: false },
};

export const NoAuthorOrSubheading: Story = {
  args: { showAuthor: false, showHeading: false },
};
