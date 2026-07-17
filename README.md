# AutoSkeleton

**Beautiful, composable loading skeletons for React.**

A modern skeleton loading library built with React + TypeScript.

Create beautiful loading states with primitive skeleton components or ready-made components like cards, avatars, text blocks, images, and custom layouts.

Lightweight • TypeScript First • Customizable • Tree-shakable

---

# Features

✨ Beautiful default skeleton animations  
⚡ Lightweight and fast  
🧩 Fully composable components  
🔷 TypeScript first  
🎨 Customizable themes  
🌊 Multiple animation styles  
🌳 Tree-shakable  
♿ Accessibility friendly  
🚀 Zero configuration required  

---

# Installation

```bash
npm install @gyojiro/autoskeleton-react
```

or

```bash
yarn add @gyojiro/autoskeleton-react
```

or

```bash
pnpm add @gyojiro/autoskeleton-react
```

---

# Setup

Import the AutoSkeleton stylesheet once in your application:

```tsx
import "@gyojiro/autoskeleton-react/dist/index.css";
```

After that, all components are ready to use.

---

# Quick Start

```tsx
import {
  Skeleton,
  TextSkeleton,
  AvatarSkeleton,
  CardSkeleton
} from "@gyojiro/autoskeleton-react";


export default function App() {

  return (
    <div>

      <Skeleton
        width={300}
        height={20}
      />

      <TextSkeleton
        lines={4}
      />

      <AvatarSkeleton
        size={60}
      />

      <CardSkeleton />

    </div>
  );

}
```

AutoSkeleton works immediately without any required setup.

---

# Real Data Loading Example

AutoSkeleton is designed for real application loading states.

Example:

```tsx
import { useEffect, useState } from "react";

import {
  CardSkeleton
} from "@gyojiro/autoskeleton-react";


function UserProfile(){

  const [user, setUser] = useState(null);


  useEffect(() => {

    fetch("/api/user")
      .then(res => res.json())
      .then(data => setUser(data));

  }, []);



  if(!user){

    return (
      <CardSkeleton />
    );

  }



  return (

    <div>

      <h2>
        {user.name}
      </h2>

      <p>
        {user.email}
      </p>

    </div>

  );

}
```

Before data loads:

```
CardSkeleton
```

After loading:

```
Real Content
```

---

# Components

# Skeleton

The core primitive component.

Everything in AutoSkeleton is built from this component.

Example:

```tsx
<Skeleton
  width={300}
  height={20}
/>
```

## Props

```tsx
<Skeleton

  width="100%"

  height={20}

  variant="default"

  animation="wave"

  radius="md"

/>
```

Available options:

| Prop | Description |
|---|---|
| width | Skeleton width |
| height | Skeleton height |
| size | Used for circle skeletons |
| variant | Shape of skeleton |
| animation | Loading animation |
| radius | Border radius |
| style | Custom CSS styles |

---

# TextSkeleton

Generate multiple text loading blocks.

Basic:

```tsx
<TextSkeleton />
```

Multiple lines:

```tsx
<TextSkeleton
  lines={5}
/>
```

Custom spacing:

```tsx
<TextSkeleton

  lines={5}

  gap={12}

  lineHeight={18}

/>
```

Short last line:

```tsx
<TextSkeleton

  lines={5}

  lastLineWidth="60%"

/>
```

Random widths:

```tsx
<TextSkeleton

  lines={5}

  randomizeWidths

  minLineWidth={50}

  maxLineWidth={90}

/>
```

Example output:

```
████████████████

████████████

███████████████

███████
```

Useful for:

- Articles
- Comments
- User descriptions
- Messages

---

# AvatarSkeleton

Circular user avatar loading.

Basic:

```tsx
<AvatarSkeleton />
```

Custom size:

```tsx
<AvatarSkeleton

  size={80}

/>
```

Useful for:

- Profiles
- User cards
- Chat applications

---

# ImageSkeleton

Responsive image placeholder.

Basic:

```tsx
<ImageSkeleton />
```

Custom dimensions:

```tsx
<ImageSkeleton

  width="100%"

  height={300}

/>
```

Using aspect ratio:

```tsx
<ImageSkeleton

  width="100%"

  aspectRatio="16/9"

/>
```

Useful for:

- Product images
- Video thumbnails
- Blog covers
- Galleries

---

# ButtonSkeleton

Button loading state.

Basic:

```tsx
<ButtonSkeleton />
```

Custom size:

```tsx
<ButtonSkeleton

  width={150}

  height={45}

/>
```

Useful for:

- Forms
- Authentication pages
- Action buttons

---

# CardSkeleton

Complete loading card UI.

Basic:

```tsx
<CardSkeleton />
```

With avatar:

```tsx
<CardSkeleton

  showAvatar

/>
```

Full card:

```tsx
<CardSkeleton

  showImage

  showAvatar

  showButton

  lines={4}

/>
```

Example output:

```
+----------------+

[ IMAGE ]

[ AVATAR ]

██████████████

██████████

██████


[ BUTTON ]

+----------------+
```

CardSkeleton is built using:

```
ImageSkeleton
AvatarSkeleton
TextSkeleton
ButtonSkeleton
SkeletonGroup
```

---

# SkeletonGroup

Create custom skeleton layouts.

Example:

```tsx
<SkeletonGroup

  gap={16}

>

  <AvatarSkeleton />

  <TextSkeleton
    lines={3}
  />

  <ButtonSkeleton />

</SkeletonGroup>
```

Change direction:

```tsx
<SkeletonGroup

  direction="row"

  gap={20}

>

  <CardSkeleton />

  <CardSkeleton />

</SkeletonGroup>
```

Useful for:

- Profiles
- Dashboards
- Lists
- Custom layouts

---

# SkeletonProvider

Customize the global skeleton theme.

Example:

```tsx
<SkeletonProvider

  animation="pulse"

  color="#E5E7EB"

  highlight="#F8FAFC"

>

<App/>

</SkeletonProvider>
```

Provider is optional.

Without a provider, AutoSkeleton uses default settings.

---

# Animations

Supported animations:

```tsx
<Skeleton animation="wave"/>

<Skeleton animation="pulse"/>

<Skeleton animation="fade"/>

<Skeleton animation="none"/>
```

---

# Variants

Available shapes:

```tsx
<Skeleton variant="default"/>

<Skeleton variant="rounded"/>

<Skeleton variant="circle"/>
```

---

# Custom Theme

Global theme:

```tsx
<SkeletonProvider

  color="#ddd"

  highlight="#fff"

  duration={1.5}

  radius="lg"

  animation="wave"

>

<App/>

</SkeletonProvider>
```

---

Local override:

```tsx
<SkeletonGroup

  animation="pulse"

  gap={20}

>

<TextSkeleton />

</SkeletonGroup>
```

---

# Why AutoSkeleton?

Most skeleton libraries only provide:

```tsx
<Skeleton />
```

Developers then manually build every loading state.

AutoSkeleton provides both:

## Primitive Components

```
Skeleton
```

and:

## Composite Components

```
TextSkeleton

AvatarSkeleton

ImageSkeleton

ButtonSkeleton

CardSkeleton
```

Everything is created through composition.

Benefits:

✅ Less repeated code  
✅ Faster loading UI development  
✅ Consistent design system  
✅ Easy customization  
✅ Better user experience  

---

# Example Use Cases

## User Profiles

```tsx
<CardSkeleton

  showAvatar

/>
```

---

## Blog Articles

```tsx
<TextSkeleton

  lines={8}

/>
```

---

## Dashboards

```tsx
<SkeletonGroup

  direction="row"

>

<CardSkeleton />

<CardSkeleton />

<CardSkeleton />

</SkeletonGroup>
```

---

## Ecommerce Products

```tsx
<ImageSkeleton />

<TextSkeleton />

<ButtonSkeleton />
```

---

# Built With

- React
- TypeScript
- CSS
- React Context
- Vite

---

# Roadmap

## Completed

✅ Skeleton  
✅ TextSkeleton  
✅ AvatarSkeleton  
✅ ImageSkeleton  
✅ ButtonSkeleton  
✅ CardSkeleton  
✅ SkeletonGroup  
✅ Theme Provider  

---

## Planned

⏳ ProfileSkeleton  
⏳ ArticleSkeleton  
⏳ TableSkeleton  
⏳ DashboardSkeleton  
⏳ FormSkeleton  
⏳ Storybook Documentation  
⏳ Unit Tests  
⏳ Visual Regression Testing  

---

# Documentation

Additional documentation:

- DESIGN.md
- ARCHITECTURE.md
- SPECIFICATION.md

---

# Contributing

Issues, suggestions, and pull requests are welcome.

Before contributing, please read the project documentation.

---

# License

MIT License.

---

Made with ❤️ using React and TypeScript.
