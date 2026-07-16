# AutoSkeleton Design

> **Version:** Draft v1.0
>
> This document describes the design philosophy, goals, and guiding principles behind AutoSkeleton.

---

# Table of Contents

1. Introduction
2. Vision
3. Design Goals
4. Non-Goals
5. Core Principles
6. Component Philosophy
7. Composition Philosophy
8. Theming Philosophy
9. Developer Experience
10. API Design
11. Naming Conventions
12. Performance Philosophy
13. Accessibility
14. Future Vision

---

# Introduction

AutoSkeleton is a lightweight React library for building beautiful, reusable loading skeletons.

Unlike traditional skeleton libraries that only expose low-level placeholders, AutoSkeleton provides a complete design system for loading states through composable primitives and higher-level components.

The library is designed around one principle:

> Every loading UI should be easy to build, customize, and maintain.

---

# Vision

Our vision is to become the most developer-friendly skeleton loading library for React.

AutoSkeleton aims to provide:

- Beautiful default components
- Powerful customization
- Zero unnecessary configuration
- Excellent TypeScript support
- Minimal API surface
- High performance
- Composable architecture

The goal is not to provide hundreds of pre-built skeletons.

Instead, AutoSkeleton provides a small set of primitives that can be combined to create virtually any loading UI.

---

# Design Goals

AutoSkeleton is built around the following goals.

## 1. Simplicity

A skeleton should be easy to render.

```tsx
<Skeleton />
```

No provider should be required.

No configuration should be necessary.

---

## 2. Composability

Small components should compose into larger loading interfaces.

Example:

```
Skeleton
      ↓
AvatarSkeleton
      ↓
ProfileSkeleton
```

Rather than creating large monolithic components, AutoSkeleton encourages composition.

---

## 3. Consistency

Every skeleton should share:

- animations
- colors
- border radius
- timing
- spacing

through a unified theme system.

---

## 4. Customization

Every default should be overridable.

Developers should never feel locked into one design.

---

## 5. Type Safety

Every public API should provide excellent TypeScript support.

AutoSkeleton should minimize runtime errors by leveraging compile-time validation.

---

## 6. Performance

Skeletons should render quickly.

The library should avoid unnecessary re-renders and minimize DOM complexity.

---

# Non-Goals

AutoSkeleton intentionally does not attempt to become:

- a CSS framework
- a component framework
- a design system
- an animation library

Those responsibilities belong to other tools.

AutoSkeleton focuses exclusively on loading placeholders.

---

# Core Principles

Every feature added to AutoSkeleton should follow these principles.

## Primitive First

Everything starts with the primitive `Skeleton` component.

Higher-level components should reuse primitives instead of implementing their own rendering logic.

---

## Composition Over Duplication

Instead of creating many specialized implementations, components should compose existing primitives.

Example:

```
CardSkeleton

↓

ImageSkeleton

↓

Skeleton
```

Animation logic should never be duplicated.

---

## Sensible Defaults

AutoSkeleton should look good without configuration.

Developers should be able to install the library and immediately obtain attractive loading placeholders.

---

## Progressive Customization

The API should remain simple for beginners while exposing advanced customization for experienced users.

Example:

Simple:

```tsx
<Skeleton />
```

Advanced:

```tsx
<SkeletonGroup
    animation="pulse"
    color="#ddd"
    gap={16}
>
```

---

# Component Philosophy

AutoSkeleton separates components into two categories.

## Primitive Components

Primitive components are the foundation of the library.

Examples:

- Skeleton
- TextSkeleton
- AvatarSkeleton
- ButtonSkeleton
- ImageSkeleton
- SkeletonGroup

Primitive components should remain:

- reusable
- predictable
- independent

---

## Composite Components

Composite components are built entirely from primitives.

Examples:

- CardSkeleton
- ProfileSkeleton
- ProductCardSkeleton
- ArticleSkeleton
- DashboardSkeleton

Composite components should never duplicate primitive logic.

---

# Composition Philosophy

AutoSkeleton embraces composition over inheritance.

Example:

```
CardSkeleton

├── ImageSkeleton
├── TextSkeleton
└── ButtonSkeleton
```

Each child remains reusable independently.

This approach reduces maintenance while increasing flexibility.

---

# Theming Philosophy

The library ships with sensible defaults.

Every skeleton automatically uses the default theme.

Global customization is optional.

Developers may override the theme using `SkeletonProvider`.

Local customization may be achieved using `SkeletonGroup`.

Theme inheritance follows React Context.

---

# Developer Experience

Developer experience is a primary design objective.

The library should:

- require minimal boilerplate
- expose intuitive APIs
- provide helpful TypeScript autocompletion
- support tree shaking
- remain framework-friendly

A developer should be productive within minutes.

---

# API Design

The public API follows several rules.

## Consistency

Components should expose similar prop names whenever possible.

Examples:

- width
- height
- animation
- radius
- className
- style

---

## Predictability

Components should behave consistently.

A prop should have the same meaning across the library.

---

## Extensibility

Future components should integrate naturally without introducing breaking API changes.

---

# Naming Conventions

Component names follow PascalCase.

Examples:

```
Skeleton
TextSkeleton
CardSkeleton
```

Props follow camelCase.

Examples:

```
showAvatar
imageHeight
animation
```

Internal utilities remain implementation details and are not part of the public API.

---

# Performance Philosophy

Performance is considered during every design decision.

AutoSkeleton prioritizes:

- minimal DOM nodes
- memoized computations where appropriate
- CSS animations over JavaScript animations
- lightweight rendering
- efficient theme propagation

The library should remain suitable for large applications.

---

# Accessibility

Skeletons are decorative loading placeholders.

They should not interfere with assistive technologies.

Components should:

- use `aria-hidden="true"` where appropriate
- avoid misleading semantics
- allow developers to provide accessible loading states

Accessibility is considered a core feature rather than an afterthought.

---

# Future Vision

The long-term goal is to build a complete loading UI toolkit.

Future additions may include:

Primitive Components

- DividerSkeleton
- BadgeSkeleton
- ChipSkeleton

Composite Components

- ProfileSkeleton
- ProductCardSkeleton
- ArticleSkeleton
- DashboardSkeleton
- TableSkeleton
- FormSkeleton
- CommentSkeleton

Additional Features

- Layout presets
- Animation presets
- Responsive skeletons
- Storybook documentation
- Theme presets
- Custom animations
- Framework adapters

The architecture should continue to evolve while preserving a stable and intuitive API.