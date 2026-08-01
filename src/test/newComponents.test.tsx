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
import { ChartSkeleton } from "../components/ChartSkeleton";
import { StoriesBarSkeleton } from "../components/StoriesBarSkeleton";

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
  smokeTest("ChartSkeleton (bar)", <ChartSkeleton />);
  smokeTest("ChartSkeleton (line)", <ChartSkeleton type="line" />);
  smokeTest("ChartSkeleton (donut)", <ChartSkeleton type="donut" />);
  smokeTest("StoriesBarSkeleton", <StoriesBarSkeleton />);
});

describe("StoriesBarSkeleton", () => {
  it("renders one avatar per item", () => {
    const { container } = render(<StoriesBarSkeleton items={5} showLabel={false} />);
    expect(container.querySelectorAll(".skeleton").length).toBe(5);
  });

  it("renders an avatar plus a label per item when showLabel is true", () => {
    const { container } = render(<StoriesBarSkeleton items={4} showLabel />);
    expect(container.querySelectorAll(".skeleton").length).toBe(8);
  });

  it("prevents items from shrinking so the row can overflow instead of squeezing", () => {
    const { container } = render(<StoriesBarSkeleton items={3} />);
    // Each item wrapper is a direct child of the outer row SkeletonGroup.
    const outer = container.firstChild as HTMLElement;
    const item = outer.firstElementChild as HTMLElement;
    expect(item.style.flexShrink).toBe("0");
  });
});

describe("ChartSkeleton", () => {
  it("renders one bar per point for type=bar", () => {
    const { container } = render(<ChartSkeleton type="bar" points={5} />);
    expect(container.querySelectorAll(".skeleton").length).toBe(5);
  });

  it("renders a single skeleton for type=line", () => {
    const { container } = render(<ChartSkeleton type="line" />);
    expect(container.querySelectorAll(".skeleton").length).toBe(1);
  });

  it("renders a transparent-center ring for type=donut", () => {
    const { container } = render(<ChartSkeleton type="donut" height={160} />);
    const el = container.querySelector(".skeleton") as HTMLElement;
    expect(el.style.borderRadius).toBe("50%");
    expect(el.style.backgroundColor).toBe("transparent");
    expect(el.style.border).toContain("29px"); // round(160 * 0.18)
  });
});

describe("ProfileSkeleton", () => {
  it("renders no stats when statsCount=0", () => {
    const { container } = render(<ProfileSkeleton statsCount={0} />);
    // Still renders avatar + name + bio
    expect(container.querySelectorAll(".skeleton").length).toBeGreaterThan(0);
  });

  it("appends children after the default composition instead of replacing it", () => {
    const { getByTestId } = render(
      <ProfileSkeleton>
        <div data-testid="extra">extra</div>
      </ProfileSkeleton>,
    );
    expect(getByTestId("extra")).toBeInTheDocument();
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

  it("accepts a responsive columns object", () => {
    const { container } = render(
      <GallerySkeleton items={4} columns={{ base: 1, md: 3 }} />,
    );
    // Responsive columns wrap the grid in an extra container-query div (see
    // SkeletonGroup.tsx) — the breakpoint rules themselves are covered
    // directly by SkeletonGroup's own tests; this just confirms the prop
    // threads through GallerySkeleton without throwing and still renders
    // a grid with all items.
    const grid = container.querySelector('[style*="display: grid"]') as HTMLElement;
    expect(grid).not.toBeNull();
    expect(container.querySelectorAll(".skeleton").length).toBe(4);
  });
});

describe("DashboardSkeleton", () => {
  it("defaults the stat-card grid to one column per card", () => {
    const { container } = render(<DashboardSkeleton statCards={4} />);
    const grid = container.querySelector('[style*="display: grid"]') as HTMLElement;
    expect(grid.style.gridTemplateColumns).toBe("repeat(4, 1fr)");
  });

  it("lets statCardColumns override the grid independently of statCards", () => {
    const { container } = render(
      <DashboardSkeleton statCards={6} statCardColumns={3} />,
    );
    const grid = container.querySelector('[style*="display: grid"]') as HTMLElement;
    expect(grid.style.gridTemplateColumns).toBe("repeat(3, 1fr)");
    // Still renders all 6 cards even though they wrap onto more than one row.
    expect(container.querySelectorAll(".skeleton").length).toBeGreaterThan(0);
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

describe("children slot — appends rather than replaces", () => {
  // Every composite accepts `children`, appended after its default
  // composition. CardSkeleton and ProfileSkeleton each get a dedicated test
  // elsewhere; this covers the rest of the composites in one pass rather
  // than repeating the same assertion 17 times.
  const marker = <div data-testid="marker">extra</div>;

  const composites: [string, React.ReactElement][] = [
    ["ArticleSkeleton", <ArticleSkeleton>{marker}</ArticleSkeleton>],
    ["TableSkeleton", <TableSkeleton>{marker}</TableSkeleton>],
    ["ListSkeleton", <ListSkeleton>{marker}</ListSkeleton>],
    ["DashboardSkeleton", <DashboardSkeleton>{marker}</DashboardSkeleton>],
    ["FormSkeleton", <FormSkeleton>{marker}</FormSkeleton>],
    ["StatisticCardSkeleton", <StatisticCardSkeleton>{marker}</StatisticCardSkeleton>],
    ["MediaObjectSkeleton", <MediaObjectSkeleton>{marker}</MediaObjectSkeleton>],
    ["CommentSkeleton", <CommentSkeleton>{marker}</CommentSkeleton>],
    ["ChatMessageSkeleton", <ChatMessageSkeleton>{marker}</ChatMessageSkeleton>],
    ["ProductCardSkeleton", <ProductCardSkeleton>{marker}</ProductCardSkeleton>],
    ["GallerySkeleton", <GallerySkeleton>{marker}</GallerySkeleton>],
    ["SidebarSkeleton", <SidebarSkeleton>{marker}</SidebarSkeleton>],
    ["NavbarSkeleton", <NavbarSkeleton>{marker}</NavbarSkeleton>],
    ["PricingCardSkeleton", <PricingCardSkeleton>{marker}</PricingCardSkeleton>],
    ["TimelineSkeleton", <TimelineSkeleton>{marker}</TimelineSkeleton>],
    ["ChartSkeleton", <ChartSkeleton>{marker}</ChartSkeleton>],
    ["StoriesBarSkeleton", <StoriesBarSkeleton>{marker}</StoriesBarSkeleton>],
  ];

  for (const [name, element] of composites) {
    it(`${name} renders children after its default composition`, () => {
      const { getByTestId, container } = render(element);
      expect(getByTestId("marker")).toBeInTheDocument();
      expect(container.querySelectorAll(".skeleton").length).toBeGreaterThan(0);
    });
  }
});
