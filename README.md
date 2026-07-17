# AutoSkeleton

**Beautiful, composable loading skeletons for React.**

A modern skeleton loading library built with React + TypeScript.

Create beautiful loading states with primitive skeletons or ready-made components like cards, avatars, text blocks, and images.

Lightweight • TypeScript First • Customizable • Tree-shakable

---

# Features

✨ Beautiful default skeleton animations  
⚡ Lightweight and fast  
🧩 Fully composable components  
🔷 TypeScript first  
🎨 Customizable themes  
🌊 Multiple animations  
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

# Quick Start

```tsx
import {
  Skeleton
} from "@gyojiro/autoskeleton-react";

export default function App() {

  return (
    <Skeleton
      width={300}
      height={20}
    />
  );

}
```

AutoSkeleton works immediately without any setup.

---

# Real Data Loading Example

AutoSkeleton is designed for real loading states.

Example:

```tsx
function UserProfile(){

const [user,setUser] = useState(null);


useEffect(()=>{

fetch("/api/user")
.then(res=>res.json())
.then(data=>setUser(data))

},[]);


if(!user){

return (
<CardSkeleton />
)

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

)

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

## Skeleton

The core primitive component.

```tsx
<Skeleton
 width={200}
 height={20}
/>
```

Props:

```tsx
<Skeleton

width="100%"

height={20}

variant="default"

animation="wave"

radius="md"

/>
```

---

# TextSkeleton

Generate loading text blocks.

```tsx
<TextSkeleton />
```

Multiple lines:

```tsx
<TextSkeleton
 lines={5}
/>
```

Random text widths:

```tsx
<TextSkeleton

lines={5}

randomizeWidths

/>
```

Example output:

```
██████████████

████████████

████████████████

████████
```

---

# AvatarSkeleton

Circular user avatar loading.

```tsx
<AvatarSkeleton />
```

Custom size:

```tsx
<AvatarSkeleton
 size={80}
/>
```

---

# ImageSkeleton

Image placeholder.

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

---

# ButtonSkeleton

Button loading state.

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

---

# CardSkeleton

Complete card loading UI.

```tsx
<CardSkeleton />
```

Example:

```tsx
<CardSkeleton

showAvatar

showButton

lines={4}

/>
```

Output:

```
[ IMAGE ]

[ AVATAR ]

████████████

████████

██████


[ BUTTON ]
```

---

# SkeletonGroup

Create your own skeleton layouts.

```tsx
<SkeletonGroup gap={16}>

<AvatarSkeleton/>

<TextSkeleton lines={3}/>

<ButtonSkeleton/>

</SkeletonGroup>
```

Useful for:

- Profiles
- Dashboards
- Lists
- Custom layouts

---

# SkeletonProvider

Customize your application skeleton theme.

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

<TextSkeleton/>

</SkeletonGroup>
```

---

# Why AutoSkeleton?

Most skeleton libraries only provide:

```
<Skeleton />
```

and developers manually build every loading screen.

AutoSkeleton provides:

```
Primitive Components
        |
        |
        v

Composite Components

TextSkeleton
AvatarSkeleton
CardSkeleton
ImageSkeleton
DashboardSkeleton
```

Benefits:

✅ Less repeated code  
✅ Faster loading UI development  
✅ Consistent design system  
✅ Easy customization  
✅ Better user experience  

---

# Example Use Cases

AutoSkeleton works well for:

## User Profiles

```tsx
<CardSkeleton showAvatar/>
```

## Blog Articles

```tsx
<TextSkeleton lines={8}/>
```

## Dashboards

```tsx
<SkeletonGroup>

<CardSkeleton/>

<CardSkeleton/>

<CardSkeleton/>

</SkeletonGroup>
```

## Ecommerce Products

```tsx
<ImageSkeleton/>

<TextSkeleton/>

<ButtonSkeleton/>
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

More documentation:

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
