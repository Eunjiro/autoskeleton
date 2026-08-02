# Changelog

All notable changes to this project are documented here. Format loosely
follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/); versioning
follows [Semantic Versioning](https://semver.org/).

For the version-by-version history before this file existed (`0.1.0` →
`1.0.1`), see [docs/ROADMAP.md](https://github.com/Eunjiro/autoskeleton-web/blob/master/docs/ROADMAP.md).

## [1.1.1]

### Fixed

- `ImageSkeleton`'s `aspectRatio` prop rendered as a thin ~16px-tall bar
  instead of a properly proportioned box. `Skeleton`'s own "no height
  given" fallback (16px) was setting an explicit `height: 16px` inline
  style, which silently blocked the CSS `aspect-ratio` property — it only
  computes a dimension left as `auto`, never overrides one that's already
  definite. Fixed by forcing `height: "auto"` whenever `aspectRatio` is
  set. This also fixes `GallerySkeleton`, which uses `aspectRatio` for
  every cell by default — its whole grid was rendering as thin bars, not
  square image placeholders.
- `ImageSkeleton`'s own `style` prop, when passed alongside `aspectRatio`,
  used to silently drop the `aspectRatio`/height styling entirely instead
  of merging with it.

## [1.1.0]

### Fixed

- `SkeletonGroup` row layouts no longer collapse percentage-width children
  (e.g. `TextSkeleton` next to `AvatarSkeleton`) to 0 width. A flex item's
  main-axis size defaults to content size, which a percentage width can't
  contribute to — fixed at the primitive level (`Skeleton`, `TextSkeleton`)
  via layout-direction context, rather than the five separate `flex: 1`
  workarounds previously scattered across composites.
- `TextSkeleton` lines nested inside a row `SkeletonGroup` no longer
  collapse to ~1px tall. Regression caught while implementing the fix
  above: a line inside `TextSkeleton`'s column wrapper was inheriting the
  outer row's flex-fill signal from context and misapplying it to its own
  height instead of width.
- `variant="rounded"` (and `ButtonSkeleton`, which uses it) now respects an
  explicit `radius` prop instead of always hardcoding a pill shape,
  regardless of what was passed. `variant="circle"` still ignores `radius`
  by design — it must stay a perfect circle.
- `TableSkeleton`'s per-row `SkeletonGroup` now carries a stable `key`
  (previously only its children did), fixing a React list-reconciliation
  warning.

### Added

- `layout="grid"` mode on `SkeletonGroup`, with a `columns` prop — replaces
  the `style={{ display: "grid" }}` override previously needed for grid
  layouts (as `GallerySkeleton` and `DashboardSkeleton` both did).
- Responsive `columns`/`direction` on `SkeletonGroup` via CSS container
  queries (`{ base, sm, md, lg, xl }`) — responds to the group's own
  rendered width, not the viewport, so a grid nested in a narrow sidebar
  or modal responds correctly.
- `ChartSkeleton` — bar, line, or donut chart placeholder. Wired into
  `DashboardSkeleton`'s chart region (new `chartType` prop), which
  previously rendered as a single flat rectangle.
- `StoriesBarSkeleton` — horizontally-scrolling avatar row
  (Instagram/Snapchat-style stories bar, or an avatar/chip carousel).
  Items never shrink to fit; the row scrolls instead.
- `children` on every composite component — appended after the default
  composition, for a near-miss layout (the standard card plus a badge)
  without reimplementing it from primitives.
- `statCardColumns` on `DashboardSkeleton` and responsive `columns` on
  `GallerySkeleton`, so both can take advantage of the new grid/responsive
  capability directly instead of only via the underlying `SkeletonGroup`.
- Storybook coverage for every component (was 4 of 22+) — each now has its
  own correctly-attributed story file; `stories/composites.stories.tsx`
  (which had several components mislabeled under the wrong component, and
  two missing entirely) removed as superseded.
- Real-browser (Chromium, via `@storybook/addon-vitest` + Playwright)
  regression tests for layout bugs jsdom can't catch, since jsdom never
  runs actual box-model/flex/grid layout.

### Changed

- `ResponsiveValue<T>` and `SkeletonBreakpoint` are now exported public
  types.
