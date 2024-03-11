---
title: "Maneja variables de entorno en Javascript o Typescript"
date: "2024-03-10 22:31:14"
tags: ["code", "Javascript", "typescript", "Nodejs", "env"]
language: "es"
description: "Maneja variables de entorno de manera fácil en Javascript y Typescript"
---

![.env](./env.png)

Sin duda, algo que hacemos siempre al crear un proyecto de JavaScript, Node.js, Bun, etc. es manejar variables de entorno. Para ello, creamos un archivo `.env` y lo leemos con `process.env`. Sin embargo, esto puede ser un poco tedioso, validar que existan todas las variables, que tengan un valor por defecto, etc.

## Requerimientos

- Lo primero es tener un proyecto de JavaScript, Node.js, Bun, etc.
- Instalar la libreria [zod](https://zod.dev)

## Pasos

1. Instalar la libreria zod

```bash frame="code" title="bash"
npm install zod       # npm
yarn add zod          # yarn
bun add zod           # bun
pnpm add zod          # pnpm
```

2. Crear un archivo `.env` con las variables de entorno

```env frame="code" title=".env"
PORT=3000
DB_HOST=
```

3. Crear un archivo `env.ts` o `env.js` con el siguiente contenido

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

// Si ocupas Bun puedes cambiar el process.env por Bun.env
export const env = envSchema.parse(process.env);
```

Gracias a zod, podemos validar que las variables de entorno existan y tengan un valor por defecto. Si no existen, se usará el valor por defecto.
También podemos decir que sean opcionales con `z.string().optional()`.
o que tengan un mínimo de caracteres con `z.string().min(3)`.

4. Usar las variables de entorno

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

De esta manera, podemos manejar las variables de entorno de manera fácil y segura.
