---
title: "Configuración de NextJS y Kysely"
date: "2024-02-28 09:38:14"
tags: ["code", "nextjs", "kysely", "typescript", "sql", "database"]
language: "es"
description: "Configuración de NextJS y Kysely para hacer consultas sql."
---

En este artículo vamos a ver como usar [Nextjs](https://nextjs.org/) y [Kysely](https://kysely.dev/) para poder consultar una base de datos de forma sencilla, crear tablas, crear migraciones, transacciones, etc.

## Instalación

Lo primero que necesitamos es nuestro proyecto creado de [Nextjs](https://nextjs.org/), para eso ejecutamos el siguiente comando:

```bash
npx create-next-app nextjs-kysely
```

Luego de que se haya creado nuestro proyecto, vamos a instalar las dependencias de Kysely, en este caso también instalare pg para poder conectarme a una base de datos de postgresql.

```bash
npm install kysely pg
```

> Nota: si estas ocupando una base de datos diferente a postgresql, puedes instalar el driver de tu base de datos, por ejemplo para mysql seria `npm install mysql2` y para sqlite seria `better-sqlite3`.

## Configuración

Ocuparemos esta estructura para ordenar nuestros archivos:

```bash
├── lib
│   ├── database
│   │   ├── db.ts
│   │   └── migrations.ts
│   │   └── types.ts
```

En el archivo `db.ts` vamos a crear nuestra conexión a la base de datos, en mi caso ocuparé (Supabase)[https://supabase.io/], pero puedes ocupar cualquier base de datos que quieras.

```ts
import { Database } from "./types"; // definimos nuestros tipos de datos, más adelante veremos cómo crearlos
import { Pool } from "pg";
import { Kysely, PostgresDialect } from "kysely";

import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

const dialect = new PostgresDialect({
  pool: new Pool({
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    max: 10,
  }),
});

export const db = new Kysely<Database>({
  dialect,
});
```

Ahora tendremos que crear un archivo `.env` para poder guardar nuestras variables de entorno, en este caso ocuparemos las siguientes variables:

```env
DB_DATABASE=nextjs_kysely
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=postgres
DB_PORT=5432
```

también vamos a crear un archivo `types.ts` para definir nuestros tipos de datos

> Nota: en este caso vamos a usar `Generated` para definir el tipo de dato de una columna que se genera automáticamente, por ejemplo un ID.

Estos tipos de datos nos ayudarán a tener un mejor autocompletado al momento de escribir nuestras consultas.

```ts
import { Generated } from "kysely";

export interface Database {
  user: UserTable;
}

export interface UserTable {
  id: Generated<number>;
  name: string;
  email: string;
  created_at: Date;
}
```

## Migraciones

Ahora vamos a crear un archivo `migrations.ts` para poder crear nuestras tablas en la base de datos.

```ts
import { FileMigrationProvider, Kysely, Migrator, sql } from "kysely";
import path from "path";
import { promises as fs } from "fs";
import { db } from "./db";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("user")
    .addColumn("id", "serial", (col) => col.primaryKey())
    .addColumn("first_name", "varchar", (col) => col.notNull())
    .addColumn("email", "varchar", (col) => col.notNull())
    .addColumn("created_at", "timestamp", (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .execute();
}

export async function executeMigration() {
  const migrator = new Migrator({
    db,
    provider: new FileMigrationProvider({
      fs,
      path,
      migrationFolder: path.join(__dirname, "../database"),
    }),
  });

  const { error, results } = await migrator.migrateToLatest();

  results?.forEach((it) => {
    if (it.status === "Success") {
      console.log(`migration "${it.migrationName}" was executed successfully`);
    } else if (it.status === "Error") {
      console.error(`failed to execute migration "${it.migrationName}"`);
    }
  });

  if (error) {
    console.error("failed to migrate");
    console.error(error);
    process.exit(1);
  }

  await db.destroy();
}

executeMigration();
```

En este archivo tenemos 2 partes, la primera es la función `up` que se encarga de crear la tabla en la base de datos, y la segunda parte es la función `executeMigration` que se encarga de ejecutar las migraciones.

Podríamos dividir estas 2 partes en 2 archivos diferentes, pero para este ejemplo lo dejaré en un solo archivo.

## Ejecutar migraciones

Para ejecutar nuestras migraciones, vamos a crear un script en nuestro `package.json`

```json
{
  "scripts": {
    "migrate": "bun run lib/database/migrations.ts"
  }
}
```

utilizaremos [bun](https://bun.sh/) para poder ejecutar nuestro archivo typescript, ya que con [bun](https://bun.sh/) podemos ejecutar archivos typescript sin necesidad de compilarlos.

para instalar `bun` ejecutamos el siguiente comando:

```bash
curl -fsSL https://bun.sh/install | bash
```

y luego ejecutamos el siguiente comando para ejecutar nuestras migraciones:

```bash
npm run migrate
```

## Ejecutar consultas

para probar que todo esté funcionando correctamente, voy a crear una nueva carpeta en la raíz de mi proyecto llamada `actions` y dentro de esta carpeta voy a crear un archivo `user.ts` con el siguiente contenido:

```ts
"use server";
import { db } from "@/lib/database/db";

export async function getUsers() {
  try {
    return await db.selectFrom("user").selectAll().execute();
  } catch (error) {
    return "Error getting users";
  }
}
```

en este archivo estamos exportando una función llamada `getUsers` que se encarga de obtener todos los usuarios de la base de datos.

> Nota: estamos usando `use server` para poder ejecutar este archivo en el servidor

Ahora si vamos a nuestro archivo `app/page.tsx` y vamos a importar nuestra función `getUsers` y la vamos a ejecutar.

```ts
import { getUsers } from "@/actions/user";

export default async function Home() {
  const user = await getUsers();
  console.log(user);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{JSON.stringify(user)}</p>
    </main>
  );
}
```

Si todo está funcionando correctamente, deberíamos ver en la consola de nuestro navegador un array con todos los usuarios de nuestra base de datos.

## Conclusión

Como podemos ver utilizar [Kysely](https://kysely.dev/) con [Nextjs](https://nextjs.org/) es muy sencillo, y nos permite crear consultas de forma sencilla, crear tablas, crear migraciones, transacciones, etc.

Kysely es para mi la mejor librería para crear consultas SQL, ya que al estar escrita en typescript nos permite tener un mejor autocompletado al momento de escribir nuestras consultas, y también nos permite tener un mejor control de errores.

[Repositorio con el código](https://github.com/ga1az/next-kysely)
