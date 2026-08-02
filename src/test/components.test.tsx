import { renderToString } from "react-dom/server";
import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

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

  describe("randomizeWidths (SSR hydration safety)", () => {
    it("never calls Math.random() while server-rendering, so SSR output is deterministic", () => {
      // Regression test for a bug where randomized widths were computed
      // directly in render via Math.random(). Since Math.random() isn't
      // seeded, every renderToString() call (and the client's first render
      // pass during hydration) produced different markup for the same
      // props — exactly the condition that causes React hydration mismatches
      // in a real browser. The fix defers randomization to an effect, which
      // never runs during renderToString(), so the SSR markup for
      // randomizeWidths={true} must be byte-for-byte identical to
      // randomizeWidths={false} — and identical across repeated calls.
      const randomSpy = vi.spyOn(Math, "random").mockReturnValue(0.1);

      const randomizedHtml = renderToString(
        <TextSkeleton lines={4} randomizeWidths minLineWidth={20} maxLineWidth={80} />,
      );
      const plainHtml = renderToString(
        <TextSkeleton lines={4} minLineWidth={20} maxLineWidth={80} />,
      );
      expect(randomizedHtml).toBe(plainHtml);

      randomSpy.mockReturnValue(0.9);
      const randomizedHtmlAgain = renderToString(
        <TextSkeleton lines={4} randomizeWidths minLineWidth={20} maxLineWidth={80} />,
      );
      expect(randomizedHtmlAgain).toBe(randomizedHtml);

      expect(randomSpy).not.toHaveBeenCalled();

      randomSpy.mockRestore();
    });

    it("still applies randomized widths after mount", async () => {
      const randomSpy = vi.spyOn(Math, "random").mockReturnValue(0.5);

      const { container } = render(
        <TextSkeleton lines={3} randomizeWidths minLineWidth={20} maxLineWidth={80} />,
      );

      const lineEls = container.querySelectorAll<HTMLElement>(".skeleton");
      expect(lineEls[0].style.width).toBe("100%");
      // minLineWidth=20, maxLineWidth=80, Math.random()=0.5 -> floor(0.5*61+20) = 50%
      expect(lineEls[1].style.width).toBe("50%");

      randomSpy.mockRestore();
    });
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

  it("renders a rectangular button when radius is overridden", () => {
    const { container } = render(<ButtonSkeleton radius="md" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.borderRadius).toBe("8px");
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

  it("forces height:auto when aspectRatio is set, instead of Skeleton's default 16px", () => {
    // Regression test: Skeleton's own "no height given" fallback is 16px,
    // which used to render as an explicit `height: 16px` inline style that
    // silently defeated the `aspect-ratio` CSS property (aspect-ratio only
    // computes a dimension left as "auto" — it never overrides one that's
    // already definite). The rendered box looked like a thin text line
    // instead of an image placeholder. jsdom doesn't run real layout, so
    // this only checks the mechanism; see ImageSkeleton.stories.tsx's
    // "AspectRatioRendersARealBox" story for the real-browser confirmation.
    const { container } = render(<ImageSkeleton aspectRatio="16/9" />);
    const el = container.firstChild as HTMLElement;
    expect(el.style.height).toBe("auto");
    expect(el.style.aspectRatio).toBe("16/9");
  });

  it("still lets an explicit style.height win over the aspectRatio default", () => {
    const { container } = render(
      <ImageSkeleton aspectRatio="16/9" style={{ height: 300 }} />,
    );
    const el = container.firstChild as HTMLElement;
    expect(el.style.height).toBe("300px");
  });

  it("does not drop aspectRatio when the caller also passes a style prop", () => {
    // Regression test: `{...skeletonProps}` used to spread after the
    // computed `style`, so a caller-provided `style` object silently
    // clobbered the merged aspectRatio/height instead of extending it.
    const { container } = render(
      <ImageSkeleton aspectRatio="4/3" style={{ border: "1px solid red" }} />,
    );
    const el = container.firstChild as HTMLElement;
    expect(el.style.aspectRatio).toBe("4/3");
    expect(el.style.border).toBe("1px solid red");
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

  it("appends children after the default composition instead of replacing it", () => {
    const { container, getByTestId } = render(
      <CardSkeleton>
        <div data-testid="badge">extra</div>
      </CardSkeleton>,
    );
    // The default button (default showButton=true) and the extra child both render.
    expect(getByTestId("badge")).toBeInTheDocument();
    expect(container.querySelectorAll(".skeleton").length).toBeGreaterThan(0);
  });
});
