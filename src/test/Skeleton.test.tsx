import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Skeleton } from "../components/Skeleton";
import { SkeletonProvider } from "../context/SkeletonProvider";
import { DARK_THEME } from "../constants/defaultTheme";

describe("Skeleton", () => {
  it("renders a div element", () => {
    const { container } = render(<Skeleton data-testid="sk" />);
    const el = container.firstChild as HTMLElement;
    expect(el.tagName).toBe("DIV");
  });

  it("is aria-hidden by default", () => {
    const { container } = render(<Skeleton />);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveAttribute("aria-hidden", "true");
  });

  it("uses role=status when aria-label is supplied", () => {
    render(<Skeleton aria-label="Loading user avatar" />);
    const el = screen.getByRole("status");
    expect(el).toHaveAttribute("aria-label", "Loading user avatar");
  });

  it("applies wave animation class by default", () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toHaveClass("skeleton-wave");
  });

  it("applies pulse animation class when specified", () => {
    const { container } = render(<Skeleton animation="pulse" />);
    expect(container.firstChild).toHaveClass("skeleton-pulse");
  });

  it("applies none animation class when specified", () => {
    const { container } = render(<Skeleton animation="none" />);
    expect(container.firstChild).toHaveClass("skeleton-none");
  });

  it("merges custom className", () => {
    const { container } = render(<Skeleton className="my-custom" />);
    expect(container.firstChild).toHaveClass("skeleton", "my-custom");
  });

  it("forwards data-testid", () => {
    render(<Skeleton data-testid="my-skeleton" />);
    expect(screen.getByTestId("my-skeleton")).toBeInTheDocument();
  });

  it("applies inline width and height styles", () => {
    const { container } = render(<Skeleton width={200} height={50} />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.width).toBe("200px");
    expect(el.style.height).toBe("50px");
  });

  it("applies circle variant with size", () => {
    const { container } = render(<Skeleton variant="circle" size={48} />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.borderRadius).toBe("50%");
  });

  it("inherits color from SkeletonProvider", () => {
    const { container } = render(
      <SkeletonProvider color="#FF0000">
        <Skeleton />
      </SkeletonProvider>,
    );
    // Context.Provider renders no DOM node — the Skeleton is the first child.
    const el = container.firstChild as HTMLElement;
    expect(el.style.backgroundColor).toBe("rgb(255, 0, 0)");
  });

  it("overrides animation from SkeletonProvider", () => {
    const { container } = render(
      <SkeletonProvider animation="pulse">
        <Skeleton animation="fade" />
      </SkeletonProvider>,
    );
    // The local animation prop wins over the provider
    expect(container.firstChild).toHaveClass("skeleton-fade");
  });
});

describe("SkeletonProvider", () => {
  it("renders children", () => {
    render(
      <SkeletonProvider>
        <div data-testid="child">Hello</div>
      </SkeletonProvider>,
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("accepts DARK_THEME spread without throwing", () => {
    expect(() =>
      render(
        <SkeletonProvider {...DARK_THEME}>
          <Skeleton />
        </SkeletonProvider>,
      ),
    ).not.toThrow();
  });
});
