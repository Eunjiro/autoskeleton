# AutoSkeleton

[![npm version](https://img.shields.io/npm/v/@gyojiro/autoskeleton-react.svg)](https://www.npmjs.com/package/@gyojiro/autoskeleton-react)
[![npm downloads](https://img.shields.io/npm/dm/@gyojiro/autoskeleton-react.svg)](https://www.npmjs.com/package/@gyojiro/autoskeleton-react)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@gyojiro/autoskeleton-react)](https://bundlephobia.com/package/@gyojiro/autoskeleton-react)
[![license](https://img.shields.io/npm/l/@gyojiro/autoskeleton-react.svg)](./LICENSE)

**Beautiful, composable loading skeletons for React.**

A production-ready skeleton loading library built with React + TypeScript. Compose rich loading states from a handful of primitives, or drop in one of the 26+ ready-made components for your exact use case.

**Lightweight · TypeScript First · Composable · Zero Dependencies · Tree-shakable**

📖 **[Live docs, interactive demos & full API reference → autoskeleton.com](https://www.autoskeleton.com)**

---

## Features

- ✨ Wave, pulse, and fade animations out of the box
- ⚡ 25 kB ESM / 17 kB CJS — zero runtime dependencies
- 🧩 26+ composable components
- 🧱 Native `layout="grid"` mode on `SkeletonGroup`, plus responsive `columns`/`direction` via CSS container queries — a grid inside a narrow sidebar responds to the sidebar's width, not the viewport
- 🔌 `children` on every composite — append extra content (a badge, a legend row) to a near-miss layout without reimplementing it from primitives
- 🔷 Full TypeScript support with IntelliSense-ready JSDoc
- 🎨 Flexible theming via `SkeletonProvider` and `SkeletonGroup`
- 🌊 Per-component animation overrides (`wave`, `pulse`, `fade`, `none`)
- 🧭 `animationDirection` prop (`normal`, `reverse`, `alternate`, `alternate-reverse`)
- 🌙 Built-in `DARK_THEME` preset
- ♿ `prefers-reduced-motion` respected in CSS
- ⚡ `React.memo` + `useMemo` throughout for optimal render performance
- 🌳 Tree-shakable ESM + CommonJS builds
- 🧪 120+ Vitest + React Testing Library tests, plus real-Chromium Storybook tests for layout behavior jsdom can't verify
- 📖 Storybook stories for every component

---

## Installation

```bash
npm install @gyojiro/autoskeleton-react
```

```bash
yarn add @gyojiro/autoskeleton-react
```

```bash
pnpm add @gyojiro/autoskeleton-react
```

### Peer dependencies

```json
"react": "^18 || ^19",
"react-dom": "^18 || ^19"
```

---

## Setup

Import the stylesheet **once** at your app entry point:

```tsx
import "@gyojiro/autoskeleton-react/style.css";
```

That is it. No provider required. All components work immediately with sensible defaults.

---

## Quick Start

```tsx
import {
  Skeleton,
  TextSkeleton,
  AvatarSkeleton,
  CardSkeleton,
  SkeletonProvider,
} from "@gyojiro/autoskeleton-react";

export default function App() {
  return (
    <SkeletonProvider animation="wave" color="#E5E7EB">
      <Skeleton width={300} height={20} />
      <TextSkeleton lines={4} />
      <AvatarSkeleton size={60} />
      <CardSkeleton />
    </SkeletonProvider>
  );
}
```

---

## Real-world Loading Example

```tsx
import { useState, useEffect } from "react";
import { CardSkeleton } from "@gyojiro/autoskeleton-react";

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/user")
      .then((r) => r.json())
      .then(setUser);
  }, []);

  if (!user) return <CardSkeleton showAvatar />;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>
  );
}
```

---

## Components

### Primitives

| Component | Description |
|---|---|
| `Skeleton` | Core rectangle/circle block — everything else is built from this |
| `SkeletonGroup` | Flex layout wrapper + local theme scope |
| `SkeletonProvider` | Global theme provider |

### Atomic components

| Component | Description |
|---|---|
| `TextSkeleton` | Multi-line text paragraph placeholder |
| `AvatarSkeleton` | Circular avatar placeholder |
| `ButtonSkeleton` | Pill-shaped button placeholder |
| `ImageSkeleton` | Rectangular image placeholder with optional `aspectRatio` |

### Composite components

Every composite accepts `children`, appended after its default composition — for a near-miss layout (the standard card plus a badge, a stat grid plus a footnote) without reimplementing it from primitives:

```tsx
<CardSkeleton showAvatar>
  <Skeleton width={64} height={22} radius="full" />
</CardSkeleton>
```

| Component | Description |
|---|---|
| `CardSkeleton` | Image + text + optional button card |
| `ChartSkeleton` | Bar, line, or donut chart placeholder |
| `ArticleSkeleton` | Hero image + title + author + body |
| `ProfileSkeleton` | Avatar + name + bio + stats + follow button |
| `TableSkeleton` | Header row + configurable data rows |
| `ListSkeleton` | Icon + text list items |
| `DashboardSkeleton` | KPI cards + chart area + table |
| `FormSkeleton` | Label + input field rows + submit button |
| `StatisticCardSkeleton` | KPI metric card with icon |
| `MediaObjectSkeleton` | Thumbnail + text block (horizontal) |
| `CommentSkeleton` | Avatar + username + comment body |
| `ChatMessageSkeleton` | Alternating conversation bubbles |
| `ProductCardSkeleton` | E-commerce product card |
| `GallerySkeleton` | CSS grid of image placeholders |
| `SidebarSkeleton` | Navigation sidebar with logo + nav links + profile |
| `NavbarSkeleton` | Top navigation bar |
| `PricingCardSkeleton` | Plan name + price + feature list + CTA |
| `TimelineSkeleton` | Vertical timeline with dots and content |
| `StoriesBarSkeleton` | Horizontally-scrolling avatar row (Instagram/Snapchat-style stories, or a chip carousel) |

---

## Skeleton

The core primitive. Everything else composes from it.

```tsx
// Rectangle
<Skeleton width={300} height={20} />

// Circle
<Skeleton variant="circle" size={48} />

// Pill / rounded
<Skeleton variant="rounded" width={120} height={36} />

// Custom CSS radius
<Skeleton radius="6px 12px" />

// Static (no animation)
<Skeleton animation="none" />

// Accessible loading indicator
<Skeleton aria-label="Loading avatar" />
```

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `width` | `number \| string` | `"100%"` | CSS width |
| `height` | `number \| string` | `16` | CSS height |
| `size` | `number \| string` | — | Shorthand for width + height (circles) |
| `variant` | `"default" \| "rounded" \| "circle"` | `"default"` | Shape preset |
| `radius` | `SkeletonRadius \| string` | theme | Border radius preset or any CSS string. `variant="rounded"` defaults to `"full"` (pill) instead of the theme radius unless overridden; `variant="circle"` ignores it entirely |
| `animation` | `"wave" \| "pulse" \| "fade" \| "none"` | theme | Animation style |
| `className` | `string` | — | Additional CSS classes |
| `style` | `CSSProperties` | — | Inline style overrides |
| `aria-label` | `string` | — | Exposes the skeleton to screen readers with `role="status"` |
| `data-testid` | `string` | — | For automated testing |

---

## SkeletonProvider

Set global defaults for all skeletons in the subtree.

```tsx
import { SkeletonProvider } from "@gyojiro/autoskeleton-react";

<SkeletonProvider
  animation="wave"
  duration={1.2}
  easing="ease-in-out"
  animationDirection="normal"
  color="#E5E7EB"
  highlight="#F9FAFB"
  radius="md"
>
  <App />
</SkeletonProvider>
```

### Dark mode

```tsx
import { SkeletonProvider, DARK_THEME } from "@gyojiro/autoskeleton-react";

<SkeletonProvider {...DARK_THEME}>
  <App />
</SkeletonProvider>
```

### Theme props

| Prop | Type | Default | Description |
|---|---|---|---|
| `animation` | `SkeletonAnimation` | `"wave"` | Default animation |
| `duration` | `number` | `1.2` | Animation duration (seconds) |
| `easing` | `string` | `"ease-in-out"` | CSS timing function |
| `animationDirection` | `SkeletonAnimationDirection` | `"normal"` | CSS `animation-direction` |
| `radius` | `SkeletonRadius` | `"md"` | Default border radius |
| `color` | `string` | `"#E5E7EB"` | Base skeleton color |
| `highlight` | `string` | `"#F9FAFB"` | Wave shimmer highlight color |

---

## SkeletonGroup

A layout wrapper that arranges children with flexbox (or CSS grid) and optionally overrides the theme for its subtree.

```tsx
// Horizontal row
<SkeletonGroup direction="row" gap={12} align="center">
  <AvatarSkeleton />
  <TextSkeleton lines={2} />
</SkeletonGroup>

// 3-column grid
<SkeletonGroup layout="grid" columns={3} gap={16}>
  <ProductCardSkeleton />
  <ProductCardSkeleton />
  <ProductCardSkeleton />
</SkeletonGroup>

// Responsive: 1 column by default, 3 from a 640px container width —
// this responds to the group's own rendered width via a CSS container
// query, not the viewport, so it works correctly even nested inside a
// narrow sidebar or modal.
<SkeletonGroup layout="grid" columns={{ base: 1, md: 3 }} gap={16}>
  <ProductCardSkeleton />
  <ProductCardSkeleton />
  <ProductCardSkeleton />
</SkeletonGroup>

// Local dark-mode override
<SkeletonGroup color="#374151" highlight="#4B5563">
  <CardSkeleton />
</SkeletonGroup>

// Accessible loading region
<SkeletonGroup aria-label="Loading feed items...">
  <ListSkeleton items={5} />
</SkeletonGroup>
```

Every child in a row automatically fills the remaining space next to fixed-size siblings (like an avatar) — no manual `flex: 1` needed.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `layout` | `"flex" \| "grid"` | `"flex"` | CSS grid instead of flexbox; `direction` is ignored in this mode |
| `columns` | `ResponsiveValue<number \| string>` | — | Grid column count (`repeat(columns, 1fr)`) or a raw `grid-template-columns` value. Only applies when `layout="grid"` |
| `direction` | `ResponsiveValue<"row" \| "column">` | `"column"` | Flex direction |
| `gap` | `number \| string` | `16` | Space between children |
| `padding` | `number \| string` | `0` | Inner padding |
| `align` | `CSSProperties["alignItems"]` | `"stretch"` | Cross-axis alignment |
| `justify` | `CSSProperties["justifyContent"]` | `"flex-start"` | Main-axis alignment |
| `aria-label` | `string` | — | Accessible region label (enables `role="status"`) |
| `aria-busy` | `boolean` | `true` | Marks the region as loading |
| `...SkeletonTheme` | — | inherited | Any theme props override the subtree |

`columns` and `direction` both accept a `ResponsiveValue<T>` — either a constant, or a `{ base, sm, md, lg, xl }` object keyed by container-width breakpoint (`sm`=480px, `md`=640px, `lg`=800px, `xl`=1024px):

```tsx
import type { ResponsiveValue } from "@gyojiro/autoskeleton-react";
```

---

## TextSkeleton

```tsx
<TextSkeleton
  lines={4}
  lineHeight={16}
  gap={8}
  lastLineWidth="70%"
  randomizeWidths={false}
/>
```

| Prop | Type | Default |
|---|---|---|
| `lines` | `number` | `3` |
| `lineHeight` | `number \| string` | `16` |
| `gap` | `number \| string` | `8` |
| `lastLineWidth` | `number \| string` | `"70%"` |
| `randomizeWidths` | `boolean` | `false` |
| `minLineWidth` | `number` | `55` |
| `maxLineWidth` | `number` | `90` |

---

## useSkeleton

Access the current theme from anywhere in the tree:

```tsx
import { useSkeleton } from "@gyojiro/autoskeleton-react";

function MyCustomSkeleton() {
  const theme = useSkeleton();
  return <div style={{ background: theme.color }} />;
}
```

---

## Theming

### Radius presets

| Value | CSS |
|---|---|
| `"none"` | `0` |
| `"sm"` | `4px` |
| `"md"` | `8px` |
| `"lg"` | `12px` |
| `"full"` | `9999px` |

Any CSS string passes through unchanged: `radius="50%"`, `radius="6px 12px"`.

### Animations

| Value | Description |
|---|---|
| `"wave"` | Left-to-right shimmer sweep |
| `"pulse"` | Opacity fade in/out |
| `"fade"` | Softer opacity cycle |
| `"none"` | Static, no animation |

### Dark theme preset

```tsx
import { DARK_THEME } from "@gyojiro/autoskeleton-react";
// { color: "#374151", highlight: "#4B5563" }
```

---

## Accessibility

Skeletons are **decorative** by default (`aria-hidden="true"`).

For meaningful loading announcements:

```tsx
// Option 1 — SkeletonGroup with aria-label (recommended for sections)
<SkeletonGroup aria-label="Loading user profile...">
  <ProfileSkeleton />
</SkeletonGroup>

// Option 2 — native HTML
<div role="status" aria-label="Loading...">
  <CardSkeleton />
</div>

// Option 3 — individual skeleton with label
<Skeleton aria-label="Loading avatar" />
```

All animations are automatically disabled when the user has `prefers-reduced-motion: reduce` set in their OS preferences.

---

## Framework support

| Framework | How to import the stylesheet |
|---|---|
| **Vite** | `src/main.tsx` |
| **Next.js App Router** | `app/layout.tsx` |
| **Next.js Pages Router** | `pages/_app.tsx` |
| **Remix** | `app/root.tsx` |
| **Create React App** | `src/index.tsx` |

---

## Package exports

```json
{
  ".":           { "import": "./dist/index.js", "require": "./dist/index.cjs" },
  "./style.css": "./dist/index.css"
}
```

---

## Links

- 📖 [Live docs & interactive demos](https://www.autoskeleton.com)
- 📦 [npm package](https://www.npmjs.com/package/@gyojiro/autoskeleton-react)
- 🐙 [Source on GitHub](https://github.com/Eunjiro/autoskeleton)
- 📝 [Changelog](./CHANGELOG.md)

---

## License

MIT © [Gyojiro](https://github.com/Eunjiro)
