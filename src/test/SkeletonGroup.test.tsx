import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { SkeletonGroup } from "../components/SkeletonGroup";
import { Skeleton } from "../components/Skeleton";
import { AvatarSkeleton } from "../components/AvatarSkeleton";
import { TextSkeleton } from "../components/TextSkeleton";

describe("SkeletonGroup", () => {
  it("renders children", () => {
    render(
      <SkeletonGroup>
        <Skeleton data-testid="child" />
      </SkeletonGroup>,
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("renders as a flex column by default", () => {
    const { container } = render(
      <SkeletonGroup>
        <Skeleton />
      </SkeletonGroup>,
    );
    const el = container.firstChild as HTMLElement;
    expect(el.style.flexDirection).toBe("column");
  });

  it("renders as flex row when direction=row", () => {
    const { container } = render(
      <SkeletonGroup direction="row">
        <Skeleton />
      </SkeletonGroup>,
    );
    const el = container.firstChild as HTMLElement;
    expect(el.style.flexDirection).toBe("row");
  });

  it("applies aria-label and role=status when aria-label is provided", () => {
    render(
      <SkeletonGroup aria-label="Loading section">
        <Skeleton />
      </SkeletonGroup>,
    );
    const el = screen.getByRole("status");
    expect(el).toHaveAttribute("aria-label", "Loading section");
  });

  it("propagates theme color to child Skeleton", () => {
    const { container } = render(
      <SkeletonGroup color="#123456">
        <Skeleton data-testid="sk" />
      </SkeletonGroup>,
    );
    const skEl = screen.getByTestId("sk");
    expect(skEl.style.backgroundColor).toBe("rgb(18, 52, 86)");
    // Wrapper div is the SkeletonGroup — its first child is the Context Provider div
    void container;
  });

  describe("row layout — percentage-width children don't collapse", () => {
    // Regression coverage for a bug where a row-direction SkeletonGroup
    // rendered only its fixed-size children (e.g. an avatar) and silently
    // dropped anything with a percentage width (e.g. TextSkeleton), because
    // a flex item's main-axis size defaults to content size, which a
    // percentage width can't contribute to. jsdom doesn't run real layout,
    // so these assertions check the underlying flex-fill mechanism directly
    // rather than rendered pixel widths.

    it("gives a default (100%-width) Skeleton flex-fill styles in a row group", () => {
      render(
        <SkeletonGroup direction="row">
          <Skeleton data-testid="fill" />
        </SkeletonGroup>,
      );
      const el = screen.getByTestId("fill");
      expect(el.style.flexGrow).toBe("1");
      expect(el.style.flexBasis).toBe("0px");
    });

    it("does not apply flex-fill to a Skeleton with an explicit pixel width", () => {
      render(
        <SkeletonGroup direction="row">
          <Skeleton data-testid="fixed" width={48} />
        </SkeletonGroup>,
      );
      const el = screen.getByTestId("fixed");
      expect(el.style.flexGrow).toBe("");
    });

    it("does not apply flex-fill to a full-width Skeleton in the default column layout", () => {
      render(
        <SkeletonGroup>
          <Skeleton data-testid="col" />
        </SkeletonGroup>,
      );
      const el = screen.getByTestId("col");
      expect(el.style.flexGrow).toBe("");
    });

    it("gives TextSkeleton's wrapper flex-fill styles next to a fixed-size AvatarSkeleton in a row", () => {
      const { container } = render(
        <SkeletonGroup direction="row">
          <AvatarSkeleton size={48} />
          <TextSkeleton lines={2} />
        </SkeletonGroup>,
      );
      const lines = container.querySelectorAll(".skeleton");
      // Avatar is the first .skeleton; the first text line's parent is the
      // TextSkeleton wrapper that used to collapse to 0 width.
      const textWrapper = lines[1].parentElement as HTMLElement;
      expect(textWrapper.style.flexGrow).toBe("1");
      expect(textWrapper.style.flexBasis).toBe("0px");
    });

    it("does not apply the row flex-fill treatment to TextSkeleton's individual lines (only to its wrapper)", () => {
      // Regression test: TextSkeleton's line Skeletons sit inside a column
      // flex wrapper, not directly inside the row SkeletonGroup. If a line
      // reads "row" from the ambient context (inherited from the outer
      // group instead of being reset by the wrapper) and applies
      // flex-basis:0/flex-grow:1 to itself, that governs its *height*
      // (the column wrapper's main axis) instead of width, collapsing each
      // line to ~1px tall even though its width renders correctly.
      const { container } = render(
        <SkeletonGroup direction="row">
          <AvatarSkeleton size={48} />
          <TextSkeleton lines={2} lineHeight={16} />
        </SkeletonGroup>,
      );
      const lines = container.querySelectorAll(".skeleton");
      const firstLine = lines[1] as HTMLElement;
      expect(firstLine.style.height).toBe("16px");
      expect(firstLine.style.flexGrow).toBe("");
      expect(firstLine.style.flexBasis).toBe("");
    });
  });

  describe("grid layout", () => {
    it("renders display:grid with an N-column template when columns is a number", () => {
      const { container } = render(
        <SkeletonGroup layout="grid" columns={3}>
          <Skeleton />
        </SkeletonGroup>,
      );
      const el = container.firstChild as HTMLElement;
      expect(el.style.display).toBe("grid");
      expect(el.style.gridTemplateColumns).toBe("repeat(3, 1fr)");
    });

    it("passes a string columns value through as a raw grid-template-columns", () => {
      const { container } = render(
        <SkeletonGroup layout="grid" columns="200px 1fr 1fr">
          <Skeleton />
        </SkeletonGroup>,
      );
      const el = container.firstChild as HTMLElement;
      expect(el.style.gridTemplateColumns).toBe("200px 1fr 1fr");
    });

    it("does not set flexDirection in grid mode", () => {
      const { container } = render(
        <SkeletonGroup layout="grid" columns={2}>
          <Skeleton />
        </SkeletonGroup>,
      );
      const el = container.firstChild as HTMLElement;
      expect(el.style.flexDirection).toBe("");
    });

    it("does not apply row flex-fill to percentage-width children in grid mode", () => {
      render(
        <SkeletonGroup layout="grid" columns={2}>
          <Skeleton data-testid="cell" />
        </SkeletonGroup>,
      );
      const el = screen.getByTestId("cell");
      expect(el.style.flexGrow).toBe("");
    });

    it("still allows a consumer style override to win, same as flex mode", () => {
      const { container } = render(
        <SkeletonGroup layout="grid" columns={2} style={{ gap: 24 }}>
          <Skeleton />
        </SkeletonGroup>,
      );
      const el = container.firstChild as HTMLElement;
      expect(el.style.gap).toBe("24px");
    });
  });

  describe("responsive columns/direction", () => {
    // jsdom doesn't evaluate @container queries (it doesn't run real
    // layout at all — see the row-collapse regression tests above), so
    // these only check that the right CSS is generated and scoped. The
    // "GridRespondsToContainerWidth" story in stories/SkeletonGroup.stories.tsx
    // verifies the query actually fires, in real Chromium.

    it("does not add a wrapper or <style> tag for non-responsive props", () => {
      const { container } = render(
        <SkeletonGroup layout="grid" columns={3}>
          <Skeleton />
        </SkeletonGroup>,
      );
      expect(container.querySelector("style")).toBeNull();
      // The group div is still the direct child, same as the non-responsive tests above.
      const el = container.firstChild as HTMLElement;
      expect(el.style.display).toBe("grid");
    });

    it("wraps in a container-query context and injects scoped @container rules for responsive columns", () => {
      const { container } = render(
        <SkeletonGroup
          layout="grid"
          columns={{ base: 1, sm: 2, lg: 4 }}
          className="my-grid"
        >
          <Skeleton />
        </SkeletonGroup>,
      );

      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper.style.containerType).toBe("inline-size");

      const styleTag = wrapper.querySelector("style");
      expect(styleTag).not.toBeNull();
      expect(styleTag!.textContent).toContain("@container (min-width: 480px)");
      expect(styleTag!.textContent).toContain("@container (min-width: 800px)");
      // md/xl weren't set, so they shouldn't produce rules.
      expect(styleTag!.textContent).not.toContain("min-width: 640px");
      expect(styleTag!.textContent).not.toContain("min-width: 1024px");

      // The base value must live in the stylesheet too, not inline style —
      // an inline style would out-rank every @container rule below,
      // regardless of what they say, since inline style always wins over
      // stylesheet rules no matter the specificity or container condition.
      const groupEl = container.querySelector(".my-grid") as HTMLElement;
      expect(groupEl.style.gridTemplateColumns).toBe("");

      const scopedClass = groupEl.className
        .split(" ")
        .find((c) => c.startsWith("sg-"));
      expect(scopedClass).toBeDefined();
      expect(styleTag!.textContent).toContain(
        `.${scopedClass} { grid-template-columns: repeat(1, 1fr); }`,
      );
      expect(styleTag!.textContent).toContain("grid-template-columns: repeat(2, 1fr)");
      expect(styleTag!.textContent).toContain("grid-template-columns: repeat(4, 1fr)");
    });

    it("injects scoped @container rules for responsive direction", () => {
      const { container } = render(
        <SkeletonGroup direction={{ base: "column", md: "row" }} className="my-flex">
          <Skeleton />
        </SkeletonGroup>,
      );

      const styleTag = container.querySelector("style");
      expect(styleTag).not.toBeNull();
      expect(styleTag!.textContent).toContain("@container (min-width: 640px)");
      expect(styleTag!.textContent).toContain("flex-direction: row");

      const groupEl = container.querySelector(".my-flex") as HTMLElement;
      expect(groupEl.style.flexDirection).toBe("");
      expect(styleTag!.textContent).toContain("flex-direction: column");
    });
  });
});
