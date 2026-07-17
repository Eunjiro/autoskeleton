# Contributing to AutoSkeleton

First off, thank you for considering contributing to AutoSkeleton!

Whether you're fixing a bug, improving documentation, suggesting a feature, or writing code, every contribution helps make the project better.

---

# Table of Contents

- Code of Conduct
- Ways to Contribute
- Development Setup
- Project Structure
- Coding Guidelines
- Pull Request Process
- Reporting Bugs
- Suggesting Features
- Questions

---

# Code of Conduct

Please be respectful and constructive.

We aim to build an inclusive and welcoming community.

Examples of positive behavior include:

- Respectful communication
- Constructive feedback
- Helping new contributors
- Being patient during reviews

---

# Ways to Contribute

You can contribute by:

- Fixing bugs
- Improving documentation
- Creating new skeleton components
- Improving accessibility
- Improving performance
- Writing tests
- Creating Storybook examples
- Reporting issues
- Suggesting new features

Not every contribution needs to involve code.

---

# Development Setup

Clone the repository.

```bash
git clone https://github.com/Eunjiro/autoskeleton.git
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

Build the library.

```bash
npm run build
```

---

# Project Structure

```
src/

components/

context/

hooks/

constants/

types/
```

Each component owns:

- implementation
- types
- utilities
- styles
- exports

---

# Coding Guidelines

## TypeScript

Use TypeScript for all source files.

Avoid using `any`.

Prefer explicit types.

---

## Components

Each component should live inside its own folder.

Example:

```
ButtonSkeleton/

ButtonSkeleton.tsx

ButtonSkeleton.types.ts

ButtonSkeleton.css

index.ts
```

---

## Reuse Existing Components

Avoid duplicating rendering logic.

Instead of creating new placeholder implementations, compose existing primitives.

Good:

```
CardSkeleton

↓

TextSkeleton

↓

Skeleton
```

Bad:

```
CardSkeleton

↓

Custom rectangle implementation
```

---

## Styling

Prefer CSS for animations.

Avoid JavaScript-based animations.

---

## Naming

Components:

```
PascalCase
```

Props:

```
camelCase
```

Constants:

```
UPPER_CASE
```

---

# Pull Requests

Before opening a pull request:

- Ensure the project builds successfully.
- Follow the existing coding style.
- Keep pull requests focused.
- Update documentation when necessary.
- Add tests when applicable.

---

# Reporting Bugs

Please include:

- React version
- Browser
- TypeScript version
- Steps to reproduce
- Expected behavior
- Actual behavior

Screenshots are appreciated.

---

# Suggesting Features

Before requesting a feature:

- Check existing issues.
- Explain the use case.
- Describe the proposed API.
- Explain why it belongs in AutoSkeleton.

---

# Documentation

Documentation improvements are always welcome.

Examples:

- Better examples
- Improved explanations
- Fixing typos
- API clarification

---

# Questions

If you're unsure where to start, open an issue and we'll be happy to help.

---

Thank you for helping improve AutoSkeleton ❤️
