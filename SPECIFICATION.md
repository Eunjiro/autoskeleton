# AutoSkeleton Specification

Version: 0.1.0

Status: Draft

---

# Overview

This document defines the public API of AutoSkeleton.

Anything documented here is considered part of the public contract.

Breaking these contracts requires a major version.

---

# Package

```ts
import {
    Skeleton,
    SkeletonProvider,
    TextSkeleton,
    CardSkeleton,
    AvatarSkeleton,
    ButtonSkeleton,
    ImageSkeleton,
    InputSkeleton,
    TableSkeleton,
    ListSkeleton
} from "@autoskeleton/react";
```

---

# Skeleton Component

Primary loading wrapper.

## Props

| Prop | Type | Required | Default |
|-------|------|----------|----------|
| loading | boolean | ✅ | — |
| children | ReactNode | ✅ | — |
| fallback | ReactNode | ❌ | auto generated |

---

## Behavior

loading = false

↓

Render children.

loading = true

↓

Render fallback.

If fallback does not exist

↓

Generate skeleton.

---

## Example

```tsx
<Skeleton loading={loading}>
    <Dashboard />
</Skeleton>
```

---

## Custom Fallback

```tsx
<Skeleton
    loading={loading}
    fallback={<DashboardSkeleton />}
>
    <Dashboard />
</Skeleton>
```

---

# SkeletonProvider

Global configuration.

---

## Props

| Prop | Type | Default |
|-------|------|----------|
| animation | AnimationType | wave |
| duration | number | 1.2 |
| radius | RadiusType | md |
| color | string | #ECECEC |
| highlight | string | #F8F8F8 |

---

Example

```tsx
<SkeletonProvider
    animation="wave"
    duration={1.5}
>
    <App />
</SkeletonProvider>
```

---

# TextSkeleton

---

## Props

| Prop | Type | Default |
|-------|------|----------|
| lines | number | 1 |
| width | number \| string | 100% |
| height | number | 16 |
| animation | AnimationType | provider |
| rounded | boolean | true |

---

Example

```tsx
<TextSkeleton />
```

---

Multiple lines

```tsx
<TextSkeleton
    lines={4}
/>
```

---

# AvatarSkeleton

Props

| Prop | Type | Default |
|-------|------|----------|
| size | number | 40 |
| shape | circle \| rounded | circle |

---

Example

```tsx
<AvatarSkeleton />
```

---

# ButtonSkeleton

Props

| Prop | Type | Default |
|-------|------|----------|
| width | number | 120 |
| height | number | 40 |

---

# ImageSkeleton

Props

| Prop | Type | Default |
|-------|------|----------|
| width | number | 100% |
| height | number | 200 |

---

# InputSkeleton

Props

| Prop | Type | Default |
|-------|------|----------|
| width | number | 100% |
| height | number | 40 |

---

# CardSkeleton

Props

| Prop | Type | Default |
|-------|------|----------|
| avatar | boolean | true |
| lines | number | 3 |
| button | boolean | false |

---

# TableSkeleton

Props

| Prop | Type | Default |
|-------|------|----------|
| rows | number | 5 |
| columns | number | auto |

---

# ListSkeleton

Props

| Prop | Type | Default |
|-------|------|----------|
| items | number | 5 |

---

# Shared Props

Every skeleton component supports

| Prop | Type |
|-------|------|
| className | string |
| style | CSSProperties |
| animation | AnimationType |

---

# AnimationType

```ts
type AnimationType =
    | "wave"
    | "pulse"
    | "fade"
    | "none";
```

---

# RadiusType

```ts
type RadiusType =
    | "none"
    | "sm"
    | "md"
    | "lg"
    | "full";
```

---

# Theme

```ts
interface SkeletonTheme {

    animation: AnimationType;

    duration: number;

    radius: RadiusType;

    color: string;

    highlight: string;

}
```

---

# Hook

```tsx
const theme = useSkeleton();
```

Returns

```ts
interface SkeletonContext {

    animation: AnimationType;

    duration: number;

    radius: RadiusType;

    color: string;

    highlight: string;

}
```

---

# Accessibility

Every skeleton component must

Have

```
aria-hidden="true"
```

Default.

Skeleton wrapper

```
aria-busy=true
```

when loading.

Animations must respect

```
prefers-reduced-motion
```

If reduced motion

↓

Disable animations automatically.

---

# Error Handling

Invalid props

↓

Console warning (development only)

Production

↓

Silently fallback to defaults.

Never throw runtime errors.

---

# CSS Variables

The provider exposes

```css
--as-color

--as-highlight

--as-radius

--as-duration
```

Every component uses these variables.

---

# Performance

Requirements

No DOM measurements.

No ResizeObserver.

No MutationObserver.

No Layout Thrashing.

No forced reflow.

Target

O(n)

render complexity.

---

# Browser Support

Chrome

Firefox

Safari

Edge

Latest two major versions.

---

# TypeScript

All exports must include

100%

TypeScript definitions.

No

```
any
```

in public APIs.

---

# Testing Requirements

Every component

✔ Snapshot

✔ Accessibility

✔ Theme

✔ Animation

Every hook

✔ Unit Test

Every renderer

✔ Integration Test

---

# Future API

Not part of v0.1

```tsx
<Skeleton detect>
```

```tsx
<Skeleton auto>
```

```tsx
<Skeleton strategy="layout">
```

```tsx
generateSkeleton(Component)
```

These APIs are experimental.

---

# Semantic Versioning

Major

Breaking API

Minor

New Features

Patch

Bug Fixes

---

# Stability

Public exports listed in this document are stable.

Anything inside

```
internal/
```

is private

and

may change

without notice.