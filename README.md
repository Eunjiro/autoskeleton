<div align="center">

# AutoSkeleton

**Beautiful, composable loading skeletons for React.**

Lightweight • TypeScript First • Customizable • Tree-shakable

</div>

---

##  Features

-  Beautiful default skeletons
-  Lightweight and fast
-  Fully composable components
-  TypeScript first
-  Multiple animation styles
-  Global and local theming
-  Tree-shakable
-  Accessibility friendly
-  Zero configuration

---

## Installation

```bash
npm install @autoskeleton/react
```

or

```bash
yarn add @autoskeleton/react
```

or

```bash
pnpm add @autoskeleton/react
```

---

# Quick Start

```tsx
import { Skeleton } from "@autoskeleton/react";

export default function App() {
  return (
    <Skeleton
      width={200}
      height={20}
    />
  );
}
```

No provider required.

AutoSkeleton works out of the box.

---

# Components

## Skeleton

```tsx
<Skeleton />
```

Basic loading placeholder.

---

## TextSkeleton

```tsx
<TextSkeleton />
```

Generate multiple text lines.

---

## AvatarSkeleton

```tsx
<AvatarSkeleton />
```

Circular avatar placeholder.

---

## ImageSkeleton

```tsx
<ImageSkeleton />
```

Responsive image placeholder.

---

## ButtonSkeleton

```tsx
<ButtonSkeleton />
```

Button loading placeholder.

---

## CardSkeleton

```tsx
<CardSkeleton />
```

Complete loading card built from primitive components.

---

## SkeletonGroup

```tsx
<SkeletonGroup gap={16}>
    <AvatarSkeleton />

    <TextSkeleton />
</SkeletonGroup>
```

Arrange skeletons while applying local theme overrides.

---

## SkeletonProvider

```tsx
<SkeletonProvider animation="pulse">
    <App />
</SkeletonProvider>
```

Globally customize the loading theme.

Using the provider is optional.

---

# Animations

```tsx
<Skeleton animation="wave" />

<Skeleton animation="pulse" />

<Skeleton animation="fade" />

<Skeleton animation="none" />
```

---

# Variants

```tsx
<Skeleton variant="rectangle" />

<Skeleton variant="rounded" />

<Skeleton variant="circle" />

<Skeleton variant="pill" />
```

---

# Theming

Global theme:

```tsx
<SkeletonProvider
    animation="pulse"
    color="#E5E7EB"
    highlight="#F8FAFC"
>
    <App />
</SkeletonProvider>
```

Local override:

```tsx
<SkeletonGroup
    animation="wave"
    gap={20}
>
    <TextSkeleton />
</SkeletonGroup>
```

---

# Why AutoSkeleton?

Most skeleton libraries provide only low-level placeholder components.

AutoSkeleton provides both:

- Primitive components
- Composite loading components

Everything is built through composition.

```
Skeleton
        │
        ▼
TextSkeleton
        │
        ▼
CardSkeleton
```

This keeps the library flexible while avoiding duplicated rendering logic.

---

# Built With

- React
- TypeScript
- CSS
- React Context

---

# Documentation

- 📖 DESIGN.md
- 🏗 ARCHITECTURE.md
- 📚 SPECIFICATION.md

---

# Roadmap

- ✅ Skeleton
- ✅ TextSkeleton
- ✅ AvatarSkeleton
- ✅ ImageSkeleton
- ✅ ButtonSkeleton
- ✅ CardSkeleton
- ⏳ ProfileSkeleton
- ⏳ ArticleSkeleton
- ⏳ TableSkeleton
- ⏳ DashboardSkeleton
- ⏳ Storybook
- ⏳ Unit Tests
- ⏳ Visual Regression Tests

---

# Contributing

Contributions, issues, and feature requests are welcome.

Please read the documentation before submitting a pull request.

---

# License

MIT License.

---

<div align="center">

Made with love using React and TypeScript.

</div>