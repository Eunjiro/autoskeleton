import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { SkeletonGroup } from "../components/SkeletonGroup";
import { Skeleton } from "../components/Skeleton";

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
});
