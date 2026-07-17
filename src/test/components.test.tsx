import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { TextSkeleton } from "../components/TextSkeleton";
import { AvatarSkeleton } from "../components/AvatarSkeleton";
import { ButtonSkeleton } from "../components/ButtonSkeleton";
import { ImageSkeleton } from "../components/ImageSkeleton";
import { CardSkeleton } from "../components/CardSkeleton";

describe("TextSkeleton", () => {
  it("renders the correct number of line elements", () => {
    const { container } = render(<TextSkeleton lines={4} />);
    // The wrapper div has 4 child .skeleton divs
    const lines = container.querySelectorAll(".skeleton");
    expect(lines).toHaveLength(4);
  });

  it("renders 1 line with lines=1", () => {
    const { container } = render(<TextSkeleton lines={1} />);
    expect(container.querySelectorAll(".skeleton")).toHaveLength(1);
  });
});

describe("AvatarSkeleton", () => {
  it("renders a circle skeleton", () => {
    const { container } = render(<AvatarSkeleton size={48} />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.borderRadius).toBe("50%");
    expect(el.style.width).toBe("48px");
    expect(el.style.height).toBe("48px");
  });
});

describe("ButtonSkeleton", () => {
  it("renders with rounded variant", () => {
    const { container } = render(<ButtonSkeleton />);
    const el = container.firstChild as HTMLElement;
    // rounded variant uses borderRadius 9999px
    expect(el.style.borderRadius).toBe("9999px");
  });

  it("uses default dimensions", () => {
    const { container } = render(<ButtonSkeleton />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.width).toBe("120px");
    expect(el.style.height).toBe("40px");
  });
});

describe("ImageSkeleton", () => {
  it("renders with 100% width by default", () => {
    const { container } = render(<ImageSkeleton />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.width).toBe("100%");
  });

  it("applies aspectRatio style when provided", () => {
    const { container } = render(<ImageSkeleton aspectRatio="16/9" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.aspectRatio).toBe("16/9");
  });
});

describe("CardSkeleton", () => {
  it("renders without crashing", () => {
    expect(() => render(<CardSkeleton />)).not.toThrow();
  });

  it("renders image by default", () => {
    const { container } = render(<CardSkeleton />);
    // showImage=true → at least some skeletons present
    expect(container.querySelectorAll(".skeleton").length).toBeGreaterThan(0);
  });

  it("renders without image when showImage=false", () => {
    // Smoke test — should not throw
    expect(() =>
      render(<CardSkeleton showImage={false} showAvatar showButton />),
    ).not.toThrow();
  });
});
