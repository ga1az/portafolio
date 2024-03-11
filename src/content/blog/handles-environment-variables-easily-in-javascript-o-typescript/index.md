---
title: "Handles environment variables in Javascript or Typescript"
date: "2024-03-10 22:31:14"
tags: ["code", "Javascript", "typescript", "Nodejs", "env"]
language: "en"
description: "Manage environment variables easily in Javascript and Typescript"
---

![.env](./env.png)

Of course, one thing we always do when creating a JavaScript, Node.js, Bun, etc. project is to handle environment variables. To do this, we create an `.env` file and read it with `process.env`. However, this can be a bit tedious, validating that all variables exist, that they have a default value, etc.

## Requirements

- The first thing is to have a JavaScript, Node.js, Bun, etc. project.
- Install the [zod](https://zod.dev) library.

## Steps

1. Install the zod library

```bash frame="code" title="bash"
npm install zod       # npm
yarn add zod          # yarn
bun add zod           # bun
pnpm add zod          # pnpm
```

2. Create a `.env` file with the environment variables

```env frame="code" title=".env"
PORT=3000
DB_HOST=
```

3. Create an `env.ts` or `env.js` file with the following content

```js frame="code" title="env.js"
const z = require("zod");

const envSchema = z.object({
  PORT: z.string().default("3000"),
  DB_HOST: z.string().default("localhost"),
});

const env = envSchema.parse(process.env);

module.exports = env;
```

<br>

```typescript frame="code" title="env.ts"
import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().default("3000"),
  DB_HOST: z.string().default("localhost"),
});

// If you need Bun you can change the process.env to Bun.env
export const env = envSchema.parse(process.env);
```

Thanks to zod, we can validate that environment variables exist and have a default value. If they do not exist, the default value will be used.
We can also say that they are optional with `z.string().optional()`.
or that they have a minimum number of characters with `z.string().min(3)`.

4. Using environment variables

```js frame="code" title="index.js"
const env = require("./env.js");

console.log(env.PORT); // "3000"
console.log(env.DB_HOST); // "localhost"
```

<br>

```typescript frame="code" title="index.ts"
import { env } from "./env";

console.log(env.PORT); // "3000"
console.log(env.DB_HOST); // "localhost"
```

In this way, we can manage environment variables easily and safely.
