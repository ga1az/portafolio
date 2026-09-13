---
title: "Snippet Manager"
date: "2025-05-12 09:38:14"
tags: ["Next.js",
    "Shadcn UI",
    "Drizzle ORM",
    "Elysia",
    "AI",
    "Zustand",
    "React Query",
    "Zod"]
language: "en"
icon: "snippet"
description: "A modern, AI-powered code snippet management application that enables you to create, organize, and share your code snippets."
href: "https://editor.ga1az.com/es/login"
hasBlog: true
---

Snippet Manager is the best alternative to GitHub Gist. Keep all your code snippets neatly organized, group them into folders, share snippets with your friends, explore public snippets, and have them reviewed by AI.

[Live demo without AI](https://editor.ga1az.com/es/login)

![Login screen](./login.png "Login")

<figure>
  <video autoplay loop muted playsinline controls preload="metadata" poster="/snippet-manager/ai-improvement.jpg" width="1202" height="720">
    <source src="/snippet-manager/ai-improvement.mp4" type="video/mp4">
  </video>
  <figcaption>AI improvements</figcaption>
</figure>

<figure>
  <video autoplay loop muted playsinline controls preload="metadata" poster="/snippet-manager/folder.jpg" width="1186" height="720">
    <source src="/snippet-manager/folder.mp4" type="video/mp4">
  </video>
  <figcaption>Folders</figcaption>
</figure>

## Tech Stack

This application is built with:

- **Next.js**  
- **Elysia**  
- **Drizzle ORM**  
- **PostgreSQL**  
- **Shadcn UI**  
- **AI SDK VERCEL**  
- **BetterAuth**  

The database is structured as a multi-tenant system, partitioning data securely on the backend so each user’s snippets remain isolated.