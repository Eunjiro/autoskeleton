# AutoSkeleton Specification

> **Version:** Draft v1.0
>
> This document defines the public API, component behavior, type definitions, default values, accessibility requirements, and implementation contracts of AutoSkeleton.

---

# Table of Contents

1. Overview
2. Public API
3. Theme Specification
4. Components
5. Shared Props
6. Animations
7. Variants
8. Layout
9. Accessibility
10. Performance
11. TypeScript
12. Package Exports
13. Future Components
14. Semantic Versioning

---

# Overview

AutoSkeleton is composed of small reusable components.

The public API consists of:

```
Skeleton

TextSkeleton

AvatarSkeleton

ButtonSkeleton

ImageSkeleton

CardSkeleton

SkeletonGroup

SkeletonProvider
```

Every public component is fully typed.

---

# Public API

```
@autoskeleton/react

│

├── Skeleton

├── TextSkeleton

├── AvatarSkeleton

├── ButtonSkeleton

├── ImageSkeleton

├── CardSkeleton

├── SkeletonGroup

└── SkeletonProvider
```

Internal utilities are not exported.

---

# Theme Specification

Theme values are inherited through React Context.

Default theme:

```ts
{
  animation: "wave",
  duration: 1.5,
  radius: "md",
  color: "#E5E7EB",
  highlight: "#F3F4F6"
}
```

The provider is optional.

---

# Theme Properties

| Property | Type | Default |
|----------|------|---------|
| animation | SkeletonAnimation | wave |
| duration | number | 1.5 |
| radius | SkeletonRadius | md |
| color | string | #E5E7EB |
| highlight | string | #F3F4F6 |

---

# Skeleton

The primitive building block.

## Props

| Prop | Type | Default |
|------|------|---------|
| width | number \| string | 100% |
| height | number \| string | 16 |
| size | number \| string | - |
| radius | SkeletonRadius | theme.radius |
| animation | SkeletonAnimation | theme.animation |
| variant | SkeletonVariant | rectangle |
| className | string | - |
| style | CSSProperties | - |

### Behavior

- Renders one placeholder.
- Uses theme values automatically.
- Supports inline overrides.
- Decorative only.

---

# TextSkeleton

Represents multiple text lines.

## Props

| Prop | Type | Default |
|------|------|---------|
| lines | number | 3 |
| gap | number \| string | 8 |
| lineHeight | number | 16 |
| lastLineWidth | number \| string | 70% |
| randomizeWidths | boolean | false |
| minLineWidth | number | 30 |
| maxLineWidth | number | 100 |
| className | string | - |

### Behavior

- Generates multiple Skeleton components.
- Supports random line widths.
- Last line may use a custom width.

---

# AvatarSkeleton

Circular profile placeholder.

## Props

| Prop | Type | Default |
|------|------|---------|
| size | number | 48 |
| className | string | - |
| style | CSSProperties | - |

### Behavior

Always renders:

```
variant="circle"
```

---

# ButtonSkeleton

Button placeholder.

## Props

| Prop | Type | Default |
|------|------|---------|
| width | number \| string | 120 |
| height | number | 40 |
| className | string | - |

### Behavior

Uses rounded corners by default.

---

# ImageSkeleton

Image placeholder.

## Props

| Prop | Type | Default |
|------|------|---------|
| width | number \| string | 100% |
| height | number | 180 |
| className | string | - |

---

# CardSkeleton

Composite loading component.

## Props

| Prop | Type | Default |
|------|------|---------|
| direction | row \| column | column |
| showImage | boolean | true |
| showAvatar | boolean | false |
| showButton | boolean | true |
| imageWidth | number \| string | 100% |
| imageHeight | number | 180 |
| avatarSize | number | 48 |
| lines | number | 3 |

Additionally inherits:

- gap
- padding
- direction
- align
- justify
- animation
- duration
- radius
- color
- highlight

through SkeletonGroup.

### Behavior

Internally composed from:

```
ImageSkeleton

↓

TextSkeleton

↓

ButtonSkeleton
```

---

# SkeletonGroup

Theme scope and layout container.

## Props

| Prop | Type | Default |
|------|------|---------|
| gap | number \| string | 16 |
| padding | number \| string | 0 |
| direction | row \| column | column |
| align | CSS alignItems | stretch |
| justify | CSS justifyContent | flex-start |
| className | string | - |
| style | CSSProperties | - |

Also accepts:

```
Partial<SkeletonTheme>
```

for local theme overrides.

---

# SkeletonProvider

Provides a global theme.

## Props

Accepts:

```
Partial<SkeletonTheme>
```

plus:

```
children
```

### Behavior

Merges:

```
DEFAULT_THEME

+

User Theme
```

before providing context.

---

# Shared Props

Several components share common props.

| Prop | Description |
|------|-------------|
| className | CSS class |
| style | Inline styles |
| animation | Override animation |
| radius | Override border radius |
| width | Width |
| height | Height |

Shared naming keeps the API predictable.

---

# Animations

Supported animations:

```
wave

pulse

fade

none
```

Animation implementation is CSS-based.

JavaScript animation should not be introduced.

---

# Variants

Supported variants:

```
rectangle

circle

rounded

pill
```

Future variants should remain backward compatible.

---

# Layout

SkeletonGroup provides layout.

Supported properties:

```
gap

padding

direction

align

justify
```

No dedicated layout component exists.

---

# Accessibility

Skeletons are decorative.

Requirements:

- aria-hidden="true"
- No interactive behavior
- No keyboard focus

Loading announcements remain the application's responsibility.

---

# Performance

Requirements:

- CSS animations
- Minimal DOM
- No unnecessary providers
- Tree-shakable exports
- Small bundle size

Composite components should reuse primitives.

---

# TypeScript

Public APIs are fully typed.

The library exports:

- component props
- theme types
- animation types
- radius types
- variant types

Type inference should work without manual generics.

---

# Package Exports

Public exports include:

```
Skeleton

TextSkeleton

AvatarSkeleton

ButtonSkeleton

ImageSkeleton

CardSkeleton

SkeletonGroup

SkeletonProvider
```

Internal files remain private.

---

# Future Components

Primitive:

```
DividerSkeleton

ChipSkeleton

BadgeSkeleton
```

Composite:

```
ProfileSkeleton

ArticleSkeleton

DashboardSkeleton

TableSkeleton

FormSkeleton

CommentSkeleton
```

Future additions should follow the same design principles and architectural guidelines.

---

# Semantic Versioning

AutoSkeleton follows Semantic Versioning.

## Major

Breaking API changes.

Example:

```
1.x.x → 2.0.0
```

---

## Minor

New components.

New props.

Backward-compatible improvements.

Example:

```
1.2.0 → 1.3.0
```

---

## Patch

Bug fixes.

Performance improvements.

Documentation updates.

Example:

```
1.2.3 → 1.2.4
```

---

# Compatibility

Supported environments:

- React 18+
- React 19+
- TypeScript 5+
- Modern evergreen browsers

The library is designed to remain framework-friendly and tree-shakable while maintaining a stable and predictable public API.