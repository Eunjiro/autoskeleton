# AutoSkeleton Architecture

> **Version:** Draft v1.0
>
> This document describes the internal architecture of AutoSkeleton, how components are organized, how data flows through the library, and the architectural decisions that guide development.

---

# Table of Contents

1. Overview
2. Project Structure
3. Architectural Layers
4. Component Hierarchy
5. Theme System
6. Rendering Pipeline
7. Primitive Components
8. Composite Components
9. Context Architecture
10. Hooks
11. Utilities
12. Data Flow
13. Design Decisions
14. Performance
15. Future Architecture

---

# Overview

AutoSkeleton follows a layered architecture built around reusable primitives.

Rather than implementing each skeleton independently, every component is composed from a small set of foundational building blocks.

The architecture emphasizes:

- Composition over duplication
- Reusable primitives
- Optional global configuration
- Predictable rendering
- Type safety
- Separation of concerns

---

# Project Structure

```
src/
│
├── components/
│   │
│   ├── Skeleton/
│   ├── TextSkeleton/
│   ├── AvatarSkeleton/
│   ├── ButtonSkeleton/
│   ├── ImageSkeleton/
│   ├── CardSkeleton/
│   └── SkeletonGroup/
│
├── context/
│   ├── SkeletonContext.tsx
│   └── SkeletonProvider.tsx
│
├── hooks/
│   └── useSkeleton.ts
│
├── constants/
│   └── defaultTheme.ts
│
├── types/
│   └── theme.types.ts
│
└── index.ts
```

Each public component lives inside its own directory.

Every component owns its:

- implementation
- types
- utilities
- styles
- exports

This structure keeps the library modular and scalable.

---

# Architectural Layers

The library can be viewed as four layers.

```
Application
      │
      ▼
Composite Components
      │
      ▼
Primitive Components
      │
      ▼
Theme System
```

Each layer depends only on the layer below it.

---

# Component Hierarchy

```
Skeleton
│
├── AvatarSkeleton
├── ButtonSkeleton
├── ImageSkeleton
├── TextSkeleton
│
└── CardSkeleton
```

Notice that every component ultimately renders one or more primitive `Skeleton` components.

No animation or styling logic is duplicated.

---

# Primitive Components

Primitive components are reusable building blocks.

Current primitives:

```
Skeleton

TextSkeleton

AvatarSkeleton

ButtonSkeleton

ImageSkeleton

SkeletonGroup
```

Responsibilities:

- render loading placeholders
- expose customization
- inherit theme
- remain reusable

Primitive components should never depend on composite components.

---

# Composite Components

Composite components combine primitives into real loading interfaces.

Current composites:

```
CardSkeleton
```

Future composites:

```
ProfileSkeleton

ProductCardSkeleton

ArticleSkeleton

DashboardSkeleton

CommentSkeleton

TableSkeleton
```

Composite components should never implement animation logic.

Instead they compose primitives.

---

# Theme System

The theme system is built around React Context.

```
DEFAULT_THEME
        │
        ▼
SkeletonContext
        │
        ▼
useSkeleton()
        │
        ▼
Skeleton
```

Every component automatically inherits the active theme.

---

# Default Theme

The library ships with a default theme.

This means developers can immediately use:

```tsx
<Skeleton />
```

without wrapping the application inside a provider.

---

# SkeletonProvider

`SkeletonProvider` allows global theme customization.

Example:

```tsx
<SkeletonProvider animation="pulse">

    <App />

</SkeletonProvider>
```

The provider merges user overrides with the default theme.

```
DEFAULT_THEME

        +

User Theme

        ▼

Final Theme
```

---

# SkeletonGroup

`SkeletonGroup` serves two purposes.

## Theme Override

A group may locally override animation, colors, duration, or radius.

Example:

```tsx
<SkeletonGroup animation="pulse">
```

Only descendants inherit the override.

---

## Layout

SkeletonGroup is also responsible for arranging skeleton components.

Supported layout props include:

- gap
- padding
- direction
- align
- justify

This eliminates the need for a separate layout container.

---

# Rendering Pipeline

The rendering flow is intentionally simple.

```
<CardSkeleton>

        │

        ▼

ImageSkeleton

TextSkeleton

ButtonSkeleton

        │

        ▼

Skeleton

        │

        ▼

DOM
```

Every rendered placeholder eventually becomes the primitive `Skeleton`.

---

# Context Architecture

```
createContext(DEFAULT_THEME)

        │

        ▼

SkeletonContext

        │

        ▼

useSkeleton()

        │

        ▼

Skeleton Components
```

Because the context contains a default value, the provider remains optional.

---

# Hooks

Current hooks:

```
useSkeleton()
```

Responsibilities:

- access the active theme
- hide Context implementation
- simplify internal components

Hooks should remain lightweight.

---

# Utilities

Utilities contain reusable logic shared across components.

Examples:

```
getRadiusValue()

getRandomWidth()
```

Utilities should:

- be pure
- avoid side effects
- remain framework-independent

---

# Data Flow

Theme propagation follows this flow.

```
SkeletonProvider

        │

        ▼

SkeletonGroup

        │

        ▼

Skeleton

        │

        ▼

Rendered Placeholder
```

If no provider exists:

```
DEFAULT_THEME

        ▼

Skeleton
```

This keeps configuration optional.

---

# Dependency Graph

```
CardSkeleton

│

├── ImageSkeleton

├── TextSkeleton

├── ButtonSkeleton

└── SkeletonGroup

        │

        ▼

Skeleton

        │

        ▼

Theme
```

Dependencies always point downward.

Circular dependencies should never exist.

---

# Design Decisions

## Primitive First

Every feature should reuse primitives.

Avoid duplicating rendering logic.

---

## Composition Over Inheritance

Components should compose existing components rather than extending them.

---

## Optional Provider

Developers should never be forced to use `SkeletonProvider`.

The library works immediately using `DEFAULT_THEME`.

---

## SkeletonGroup as Layout

Originally, a dedicated layout component was considered.

Instead, SkeletonGroup evolved into both:

- a theme scope
- a layout container

This reduced API complexity while improving flexibility.

---

## Minimal Public API

Only stable components should be exported.

Internal utilities remain private.

---

# Performance

The architecture is optimized for:

- minimal DOM depth
- CSS animations
- reusable rendering logic
- low memory overhead
- tree shaking
- TypeScript inference

Composite components avoid duplicating implementation.

---

# Future Architecture

The architecture is designed to scale.

Future primitives:

```
BadgeSkeleton

DividerSkeleton

ChipSkeleton
```

Future composites:

```
ProfileSkeleton

ArticleSkeleton

DashboardSkeleton

TableSkeleton

FormSkeleton
```

Future infrastructure:

```
Storybook

Unit Tests

Visual Regression Tests

Theme Presets

Plugin System
```

The core architectural principles should remain unchanged regardless of future growth.

- Build primitives first.
- Compose larger components from primitives.
- Keep global configuration optional.
- Prefer composition over duplication.
- Preserve a minimal, intuitive public API.