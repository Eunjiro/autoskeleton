# ARCHITECTURE.md

# AutoSkeleton Architecture

Version: 0.1.0

---

# Purpose

This document describes how AutoSkeleton is built internally.

Unlike DESIGN.md, which defines the public API, this document explains:

- Project structure
- Rendering pipeline
- Detection engine
- Theme system
- Future expansion

---

# High-Level Architecture

                     User Component
                           │
                           ▼
                  <AutoSkeleton />
                           │
        ┌──────────────────┴──────────────────┐
        │                                     │
 loading === false                    loading === true
        │                                     │
        ▼                                     ▼
 Render Children                  Skeleton Engine
                                              │
                                              ▼
                                  Skeleton Renderer
                                              │
                                              ▼
                                      React Elements

---

# Rendering Flow

The rendering flow is intentionally simple.

```
User Component

↓

AutoSkeleton

↓

Loading?

↓

Yes

↓

Skeleton Renderer

↓

Display Skeleton
```

Otherwise

```
Render Children
```

There should never be additional render passes.

---

# Directory Structure

```
autoskeleton/

├── src/
│
├── components/
│   ├── AutoSkeleton/
│   ├── SkeletonProvider/
│   ├── TextSkeleton/
│   ├── AvatarSkeleton/
│   ├── CardSkeleton/
│   ├── ButtonSkeleton/
│   ├── ImageSkeleton/
│   ├── TableSkeleton/
│   ├── ListSkeleton/
│   └── InputSkeleton/
│
├── context/
│
├── hooks/
│
├── renderer/
│
├── detectors/
│
├── animations/
│
├── themes/
│
├── utils/
│
├── types/
│
├── constants/
│
└── index.ts
```

Every folder has exactly one responsibility.

---

# Component Layer

Responsible only for rendering UI.

Components never:

- Detect HTML
- Read DOM
- Parse React trees

They receive already prepared data.

Example

```
TextSkeleton

↓

Render lines
```

Nothing more.

---

# Provider Layer

SkeletonProvider stores global configuration.

```
Animation

Duration

Radius

Base Color

Highlight Color
```

Implementation

```
React Context
```

Every component consumes this context.

---

# Hook Layer

Contains reusable logic.

Example

```
useSkeleton()

↓

Returns current theme.
```

Future

```
useAnimation()

useTheme()

useDetection()
```

Hooks should never render UI.

---

# Renderer Layer

The renderer is the heart of AutoSkeleton.

Its responsibility is converting information into skeleton components.

Input

```
Detected Node
```

Output

```
<TextSkeleton />

<CardSkeleton />

<ImageSkeleton />
```

The renderer never scans React components.

It only renders.

---

# Detection Layer

Version 0.1

No detection.

Version 0.3

React Element Detection.

Version 0.5

Automatic Layout Detection.

Future

AI Detection.

---

# Detection Pipeline

React Children

↓

Walk Tree

↓

Identify Node

↓

Determine Skeleton Type

↓

Renderer

↓

React Skeleton Components

---

# Supported Detection

Future support

```
img

↓

ImageSkeleton
```

```
button

↓

ButtonSkeleton
```

```
input

↓

InputSkeleton
```

```
textarea

↓

TextSkeleton
```

```
h1-h6

↓

TextSkeleton
```

```
p

↓

Multiple TextSkeleton
```

```
table

↓

TableSkeleton
```

```
ul

↓

ListSkeleton
```

```
svg

↓

RectangleSkeleton
```

---

# Animation Layer

Animations are completely independent.

Each animation exports

```
name

keyframes

CSS variables
```

Example

```
wave.ts

pulse.ts

fade.ts
```

Adding a new animation should require zero component changes.

---

# Theme Layer

Responsible for styling.

Theme contains

```
radius

animation

duration

baseColor

highlightColor

speed
```

Theme is immutable.

Components receive theme values.

---

# Utility Layer

Contains helper functions.

Examples

```
mergeProps()

clamp()

createGradient()

isHTMLElement()

isReactElement()

flattenChildren()
```

Utilities should never import React components.

---

# Type Layer

Contains shared TypeScript interfaces.

Example

```
SkeletonTheme

AnimationType

DetectionNode

RendererOptions

SkeletonProps
```

No implementation logic.

Only types.

---

# Constants

Contains shared values.

Examples

```
Default Radius

Default Animation

Default Colors

Animation Duration

Class Names
```

Never hardcode values inside components.

---

# Internal Data Flow

```
User

↓

AutoSkeleton

↓

SkeletonProvider

↓

Renderer

↓

Skeleton Components

↓

React DOM
```

Everything flows in one direction.

No circular dependencies.

---

# Dependency Rules

Allowed

```
Components

↓

Hooks

↓

Context

↓

Types
```

Allowed

```
Renderer

↓

Components
```

Not Allowed

```
Components

↓

Renderer
```

Not Allowed

```
Renderer

↓

Provider
```

This prevents circular imports.

---

# Performance Goals

AutoSkeleton should

✅ Avoid unnecessary rerenders

✅ Avoid layout shifts

✅ Avoid runtime DOM measurements

✅ Avoid MutationObserver

✅ Avoid expensive recursion

Rendering should be O(n).

Where n is the number of detected nodes.

---

# Future CLI

Architecture

```
TypeScript Parser

↓

AST

↓

Component Tree

↓

Skeleton Generator

↓

Generated Component
```

CLI never runs inside the browser.

---

# Future VSCode Extension

```
VSCode

↓

Current File

↓

CLI Engine

↓

Generated Skeleton

↓

Insert File
```

The extension should reuse the CLI.

Never duplicate logic.

---

# Plugin System (Future)

Possible architecture

```
AutoSkeleton

↓

Plugin Manager

↓

React Plugin

↓

Next.js Plugin

↓

Tailwind Plugin

↓

Custom Plugin
```

Plugins should extend behavior without modifying the core.

---

# Error Handling

The library should fail gracefully.

If detection fails

↓

Render children.

Never crash the application.

If rendering fails

↓

Fallback Skeleton.

If fallback fails

↓

Render children.

---

# Testing Strategy

Every module should be tested independently.

```
Components

↓

Snapshot Tests
```

```
Hooks

↓

Unit Tests
```

```
Renderer

↓

Integration Tests
```

```
Detection

↓

Tree Tests
```

---

# Build Pipeline

```
TypeScript

↓

Bundle

↓

ESM

+

CJS

↓

npm
```

Future

```
Types

↓

Documentation

↓

Storybook

↓

Release
```

---

# Guiding Principle

Every new feature must answer one question:

> "Does this reduce the amount of code developers have to write?"

If the answer is no, it probably does not belong in AutoSkeleton.

The internal architecture should remain modular, predictable, and easy to extend without introducing breaking changes.