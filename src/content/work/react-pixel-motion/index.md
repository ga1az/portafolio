---
title: "React Pixel Motion"
date: "2025-03-17 09:38:14"
tags: ["code", "typescript", "react", "library","motion", "animation", "Sprite Animation"]
language: "en"
description: "A library for React that allows you to create Sprites animations."
href: "https://react-pixel-motion.ga1az.com"
hasBlog: true
---

# React Pixel Motion

<div class="mb-10">
  A lightweight React component for creating smooth, pixelated sprite animations. Perfect for games, retro-style interfaces, and pixel art animations. The library is built with TypeScript and React, the npm package is available at <a href="https://npmjs.com/package/@ga1az/react-pixel-motion" class="font-bold underline">npmjs.com/package/@ga1az/react-pixel-motion</a>.
</div>

## Features

- 🎮 Easy-to-use React component
- 🖼️ Support for sprite sheets and individual frames
- ⚡ Lightweight with minimal dependencies
- 📱 Responsive and customizable
- 🧩 TypeScript support

## Installation

```bash
npm install @ga1az/react-pixel-motion
# or
yarn add @ga1az/react-pixel-motion
# or
pnpm add @ga1az/react-pixel-motion
# or
bun add @ga1az/react-pixel-motion
```

## Quick Example

```jsx
import { PixelMotion } from '@ga1az/react-pixel-motion';

function App() {
  return (
    <PixelMotion
      src="/path/to/sprite-sheet.png"
      width={24} // Width of each frame in pixels
      height={31} // Height of each frame in pixels
      frameCount={3} // Total number of frames in the sprite sheet
      fps={10} // Frames per second for the animation
      scale={5} // Scale factor for the sprite
      startFrame={0} // Initial frame to start the animation
      loop={true} // Whether the animation should loop
      shouldAnimate={true} // Whether the animation should play
      direction="horizontal" // Direction of the sprite sheet
    />
  );
}
```

[Interactive Playground 🎮](https://react-pixel-motion.ga1az.com/)

<div class="mt-2 border rounded-lg overflow-hidden">
  <iframe src="https://react-pixel-motion.ga1az.com/" class="w-full h-[800px] rounded-lg" />
</div>