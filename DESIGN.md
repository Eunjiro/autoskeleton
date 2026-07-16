# DESIGN.md

# AutoSkeleton Design Document

Version: 0.1.0

---

# Mission

AutoSkeleton exists to eliminate the repetitive work of creating loading skeletons.

Instead of manually recreating every page with dozens of `<Skeleton />` components, AutoSkeleton provides intelligent, reusable, and eventually automatic skeleton generation.

Our philosophy is simple:

> Write your UI once. Let AutoSkeleton handle the loading state.

---

# Vision

Today's skeleton libraries solve the animation problem.

AutoSkeleton aims to solve the developer experience problem.

Instead of this:

```tsx
<Skeleton className="h-6 w-32" />
<Skeleton className="h-10 w-full" />
<Skeleton className="h-8 w-24" />
```

developers should be able to write:

```tsx
<AutoSkeleton loading={loading}>
    <Dashboard />
</AutoSkeleton>
```

---

# Design Principles

## 1. Minimal Code

Developers should write as little code as possible.

Good

```tsx
<AutoSkeleton loading={loading}>
    <UserProfile />
</AutoSkeleton>
```

Bad

```tsx
<UserProfileSkeleton
    showAvatar
    showBio
    showButtons
    showFooter
/>
```

---

## 2. Beautiful by Default

No configuration should still produce a beautiful loading screen.

Installation should be enough.

---

## 3. Zero Configuration

The library should work immediately.

No configuration files.

No setup wizard.

No CSS required.

---

## 4. Framework Agnostic

The core library should not depend on:

- Next.js
- Remix
- Astro
- Gatsby

Only React.

Framework integrations will live in separate packages.

---

## 5. Progressive Enhancement

Every release should improve developer experience.

Version roadmap:

Manual Components

↓

Smart Components

↓

Automatic Skeleton Detection

↓

CLI Generator

↓

VSCode Extension

↓

AI Generation

---

# Public API

## SkeletonProvider

Provides global configuration.

```tsx
<SkeletonProvider>
    <App />
</SkeletonProvider>
```

Example

```tsx
<SkeletonProvider
    animation="wave"
    duration={1.4}
    radius="md"
    color="#ECECEC"
    highlight="#F8F8F8"
>
    <App />
</SkeletonProvider>
```

---

## AutoSkeleton

Main component.

```tsx
<AutoSkeleton loading={loading}>
    <Dashboard />
</AutoSkeleton>
```

Behavior

loading = false

↓

Render children

loading = true

↓

Render skeleton

---

## Custom Fallback

Developers can provide their own skeleton.

```tsx
<AutoSkeleton
    loading={loading}
    fallback={<DashboardSkeleton />}
>
    <Dashboard />
</AutoSkeleton>
```

---

# Manual Components

AutoSkeleton still supports manual usage.

## TextSkeleton

```tsx
<TextSkeleton />
```

Multiple lines

```tsx
<TextSkeleton lines={4} />
```

---

## AvatarSkeleton

```tsx
<AvatarSkeleton />
```

---

## ButtonSkeleton

```tsx
<ButtonSkeleton />
```

---

## CardSkeleton

```tsx
<CardSkeleton />
```

---

## ImageSkeleton

```tsx
<ImageSkeleton />
```

---

## InputSkeleton

```tsx
<InputSkeleton />
```

---

## TableSkeleton

```tsx
<TableSkeleton rows={5} />
```

---

## ListSkeleton

```tsx
<ListSkeleton items={8} />
```

---

# Future Components

These are planned.

```
FormSkeleton
ModalSkeleton
NavbarSkeleton
SidebarSkeleton
DashboardSkeleton
CalendarSkeleton
ChartSkeleton
```

---

# Hook API

```tsx
const skeleton = useSkeleton();
```

Returns

```tsx
{
    animation,
    duration,
    color,
    highlight,
    radius
}
```

---

# Animation API

Supported animations

```
wave
pulse
fade
none
```

Example

```tsx
<TextSkeleton
    animation="wave"
/>
```

Provider values override local defaults.

Component props override provider values.

Priority

```
Component Props

↓

Provider

↓

Default Values
```

---

# Naming Convention

Every component should follow

```
{Name}Skeleton
```

Examples

```
TextSkeleton
CardSkeleton
ButtonSkeleton
AvatarSkeleton
ImageSkeleton
InputSkeleton
TableSkeleton
ListSkeleton
```

Never

```
SkeletonText

SkeletonButton

LoadingSkeletonText
```

Consistency is more important than brevity.

---

# Package Structure

```
@autoskeleton/core

Contains:

- Context
- Theme
- Utilities
- Shared Logic

No React Components
```

```
@autoskeleton/react

Contains

- AutoSkeleton
- SkeletonProvider
- Components
- Hooks
```

```
@autoskeleton/cli

Future CLI

npx autoskeleton generate
```

```
@autoskeleton/vscode

Future VSCode Extension
```

---

# Default Theme

Animation

```
wave
```

Radius

```
8px
```

Duration

```
1.2s
```

Base Color

```
#ECECEC
```

Highlight

```
#F8F8F8
```

---

# AutoSkeleton Behavior

When loading=false

```
Children render normally.
```

When loading=true

```
Children are hidden.

Skeleton is rendered instead.
```

If fallback exists

```
Render fallback.
```

Otherwise

```
Auto-generate skeleton.
```

---

# Planned Auto Detection

Future versions should recognize

```
<img>

↓

ImageSkeleton
```

```
<button>

↓

ButtonSkeleton
```

```
<input>

↓

InputSkeleton
```

```
<textarea>

↓

TextSkeleton
```

```
<h1>

↓

TextSkeleton
```

```
<p>

↓

Multiple TextSkeleton
```

```
<ul>

↓

ListSkeleton
```

```
<table>

↓

TableSkeleton
```

---

# CLI Roadmap

Future command

```bash
npx autoskeleton generate
```

Scans

```
Dashboard.tsx
```

Produces

```
Dashboard.skeleton.tsx
```

---

# VSCode Roadmap

Future command

```
Generate Skeleton
```

Creates

```
Dashboard.skeleton.tsx
```

Automatically.

---

# Non Goals

AutoSkeleton is NOT

- A UI component library
- A CSS framework
- A Tailwind replacement
- A page builder
- A design system

Its responsibility is only loading skeletons.

---

# Development Philosophy

When deciding between

Option A

More features

Option B

Less code for developers

Always choose Option B.

---

# Success Criteria

AutoSkeleton succeeds if developers can replace

```tsx
if (loading) {
    return <DashboardSkeleton />;
}
```

with

```tsx
<AutoSkeleton loading={loading}>
    <Dashboard />
</AutoSkeleton>
```

and achieve a beautiful loading experience with little to no additional work.