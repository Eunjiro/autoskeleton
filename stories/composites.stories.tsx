import type { StoryObj } from "@storybook/react-vite";

import "../src/index.css";
import { ProfileSkeleton } from "../src/components/ProfileSkeleton";
import { ArticleSkeleton } from "../src/components/ArticleSkeleton";
import { TableSkeleton } from "../src/components/TableSkeleton";
import { ListSkeleton } from "../src/components/ListSkeleton";
import { DashboardSkeleton } from "../src/components/DashboardSkeleton";
import { FormSkeleton } from "../src/components/FormSkeleton";
import { CommentSkeleton } from "../src/components/CommentSkeleton";
import { ChatMessageSkeleton } from "../src/components/ChatMessageSkeleton";
import { ProductCardSkeleton } from "../src/components/ProductCardSkeleton";
import { GallerySkeleton } from "../src/components/GallerySkeleton";
import { SidebarSkeleton } from "../src/components/SidebarSkeleton";
import { NavbarSkeleton } from "../src/components/NavbarSkeleton";
import { PricingCardSkeleton } from "../src/components/PricingCardSkeleton";
import { TimelineSkeleton } from "../src/components/TimelineSkeleton";

// ─── ProfileSkeleton ──────────────────────────────────────────────────────────

export default {
  title: "Composite/ProfileSkeleton",
  component: ProfileSkeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story: React.FC) => (
      <div style={{ width: 320, padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};

export const ProfileDefault: StoryObj<typeof ProfileSkeleton> = { name: "Default" };
export const ProfileNoStats: StoryObj<typeof ProfileSkeleton> = {
  name: "No Stats",
  args: { statsCount: 0 },
};

// These are additional standalone stories exported from this same file just
// for convenience. In a real project each would have its own file.
export const ArticleDefault: StoryObj<typeof ArticleSkeleton> = {
  name: "ArticleSkeleton",
  render: () => (
    <div style={{ width: 560, padding: 24 }}>
      <ArticleSkeleton />
    </div>
  ),
};

export const TableDefault: StoryObj<typeof TableSkeleton> = {
  name: "TableSkeleton",
  render: () => (
    <div style={{ width: 600, padding: 24 }}>
      <TableSkeleton />
    </div>
  ),
};

export const ListDefault: StoryObj<typeof ListSkeleton> = {
  name: "ListSkeleton",
  render: () => (
    <div style={{ width: 360, padding: 24 }}>
      <ListSkeleton />
    </div>
  ),
};

export const DashboardDefault: StoryObj<typeof DashboardSkeleton> = {
  name: "DashboardSkeleton",
  render: () => (
    <div style={{ width: 800, padding: 24 }}>
      <DashboardSkeleton />
    </div>
  ),
};

export const FormDefault: StoryObj<typeof FormSkeleton> = {
  name: "FormSkeleton",
  render: () => (
    <div style={{ width: 400, padding: 24 }}>
      <FormSkeleton />
    </div>
  ),
};

export const CommentsDefault: StoryObj<typeof CommentSkeleton> = {
  name: "CommentSkeleton",
  render: () => (
    <div style={{ width: 480, padding: 24 }}>
      <CommentSkeleton items={3} showActions />
    </div>
  ),
};

export const ChatDefault: StoryObj<typeof ChatMessageSkeleton> = {
  name: "ChatMessageSkeleton",
  render: () => (
    <div style={{ width: 360, padding: 24 }}>
      <ChatMessageSkeleton messages={5} />
    </div>
  ),
};

export const ProductGridDefault: StoryObj<typeof ProductCardSkeleton> = {
  name: "ProductCardSkeleton Grid",
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 220px)",
        gap: 20,
        padding: 24,
      }}
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  ),
};

export const GalleryDefault: StoryObj<typeof GallerySkeleton> = {
  name: "GallerySkeleton",
  render: () => (
    <div style={{ width: 480, padding: 24 }}>
      <GallerySkeleton items={9} columns={3} />
    </div>
  ),
};

export const SidebarDefault: StoryObj<typeof SidebarSkeleton> = {
  name: "SidebarSkeleton",
  render: () => (
    <div style={{ width: 240, height: 500, padding: 16, border: "1px solid #e5e7eb" }}>
      <SidebarSkeleton />
    </div>
  ),
};

export const NavbarDefault: StoryObj<typeof NavbarSkeleton> = {
  name: "NavbarSkeleton",
  render: () => (
    <div style={{ width: 800, padding: 16, border: "1px solid #e5e7eb" }}>
      <NavbarSkeleton />
    </div>
  ),
};

export const PricingDefault: StoryObj<typeof PricingCardSkeleton> = {
  name: "PricingCardSkeleton",
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 240px)",
        gap: 24,
        padding: 24,
      }}
    >
      <PricingCardSkeleton />
      <PricingCardSkeleton showBadge />
      <PricingCardSkeleton />
    </div>
  ),
};

export const TimelineDefault: StoryObj<typeof TimelineSkeleton> = {
  name: "TimelineSkeleton",
  render: () => (
    <div style={{ width: 400, padding: 24 }}>
      <TimelineSkeleton events={5} />
    </div>
  ),
};
