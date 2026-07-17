import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { ProfileSkeleton } from "../components/ProfileSkeleton";
import { ArticleSkeleton } from "../components/ArticleSkeleton";
import { TableSkeleton } from "../components/TableSkeleton";
import { ListSkeleton } from "../components/ListSkeleton";
import { DashboardSkeleton } from "../components/DashboardSkeleton";
import { FormSkeleton } from "../components/FormSkeleton";
import { StatisticCardSkeleton } from "../components/StatisticCardSkeleton";
import { MediaObjectSkeleton } from "../components/MediaObjectSkeleton";
import { CommentSkeleton } from "../components/CommentSkeleton";
import { ChatMessageSkeleton } from "../components/ChatMessageSkeleton";
import { ProductCardSkeleton } from "../components/ProductCardSkeleton";
import { GallerySkeleton } from "../components/GallerySkeleton";
import { SidebarSkeleton } from "../components/SidebarSkeleton";
import { NavbarSkeleton } from "../components/NavbarSkeleton";
import { PricingCardSkeleton } from "../components/PricingCardSkeleton";
import { TimelineSkeleton } from "../components/TimelineSkeleton";

const smokeTest = (name: string, element: React.ReactElement) => {
  it(`${name} renders without crashing`, () => {
    expect(() => render(element)).not.toThrow();
  });

  it(`${name} renders at least one skeleton element`, () => {
    const { container } = render(element);
    expect(container.querySelectorAll(".skeleton").length).toBeGreaterThan(0);
  });
};

describe("New composite components — smoke tests", () => {
  smokeTest("ProfileSkeleton", <ProfileSkeleton />);
  smokeTest("ArticleSkeleton", <ArticleSkeleton />);
  smokeTest("TableSkeleton", <TableSkeleton />);
  smokeTest("ListSkeleton", <ListSkeleton />);
  smokeTest("DashboardSkeleton", <DashboardSkeleton />);
  smokeTest("FormSkeleton", <FormSkeleton />);
  smokeTest("StatisticCardSkeleton", <StatisticCardSkeleton />);
  smokeTest("MediaObjectSkeleton", <MediaObjectSkeleton />);
  smokeTest("CommentSkeleton", <CommentSkeleton />);
  smokeTest("ChatMessageSkeleton", <ChatMessageSkeleton />);
  smokeTest("ProductCardSkeleton", <ProductCardSkeleton />);
  smokeTest("GallerySkeleton", <GallerySkeleton />);
  smokeTest("SidebarSkeleton", <SidebarSkeleton />);
  smokeTest("NavbarSkeleton", <NavbarSkeleton />);
  smokeTest("PricingCardSkeleton", <PricingCardSkeleton />);
  smokeTest("TimelineSkeleton", <TimelineSkeleton />);
});

describe("ProfileSkeleton", () => {
  it("renders no stats when statsCount=0", () => {
    const { container } = render(<ProfileSkeleton statsCount={0} />);
    // Still renders avatar + name + bio
    expect(container.querySelectorAll(".skeleton").length).toBeGreaterThan(0);
  });
});

describe("TableSkeleton", () => {
  it("renders the correct number of row groups", () => {
    // 5 rows × 4 columns = 20 skeleton cells + header row cells
    const { container } = render(<TableSkeleton rows={5} columns={4} />);
    const cells = container.querySelectorAll(".skeleton");
    // header (4) + data (5×4=20) = 24
    expect(cells.length).toBe(24);
  });

  it("omits header row when showHeader=false", () => {
    const { container } = render(
      <TableSkeleton rows={3} columns={3} showHeader={false} />,
    );
    const cells = container.querySelectorAll(".skeleton");
    expect(cells.length).toBe(9);
  });
});

describe("GallerySkeleton", () => {
  it("renders the correct number of image placeholders", () => {
    const { container } = render(<GallerySkeleton items={6} columns={3} />);
    expect(container.querySelectorAll(".skeleton").length).toBe(6);
  });
});

describe("FormSkeleton", () => {
  it("renders the correct number of inputs", () => {
    const { container } = render(
      <FormSkeleton fields={3} showLabels={false} showSubmitButton={false} />,
    );
    // 3 input skeletons only
    expect(container.querySelectorAll(".skeleton").length).toBe(3);
  });
});
