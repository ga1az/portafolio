---
title: "How to configurate Next.js and Kysely"
date: "2024-02-28 09:38:14"
tags: ["code", "nextjs", "kysely", "typescript", "sql", "database"]
language: "en"
description: "Configurate Next.js and Kysely easily for your project"
---

In this article we are going to see how to use [Nextjs](https://nextjs.org/) and [Kysely](https://kysely.dev/) to easily query a database, create tables, create migrations, transactions, etc.

## Installation

The first thing we need is our project created from [Nextjs](https://nextjs.org/), for that we execute the following command:

```bash
npx create-next-app nextjs-kysely
```

After our project has been created, we are going to install the Kysely dependencies, in this case I will also install pg to be able to connect to a postgresql database.

```bash
npm install kysely pg
```

> Note: if you are using a database other than postgresql, you can install the driver for your database, for example for mysql it would be `npm install mysql2` and for sqlite it would be `better-sqlite3`.

## Configuration

We will use this structure to order our files:

```bash
├── lib
│   ├── database
│   │   ├── db.ts
│   │   └── migrations.ts
│   │   └── types.ts
```

In the `db.ts` file we are going to create our database connection, in my case I will occupy (Supabase)[https://supabase.io/], but you can occupy any database you want.

```ts
import { Database } from "./types"; // we define our data types, later on we will see how to create them.
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

Now we will have to create an `.env` file in order to save our environment variables, in this case we will use the following variables:

```env
DB_DATABASE=nextjs_kysely
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=postgres
DB_PORT=5432
```

we are also going to create a `types.ts` file to define our data types

> Note: in this case we are going to use `Generated` to define the data type of a column that is automatically generated, for example an ID.

These data types will help us to have a better autocompletion when writing our queries.

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

## Migrations

Now we are going to create a `migrations.ts` file in order to create our tables in the database.

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

In this file we have 2 parts, the first one is the `up` function that is in charge of creating the table in the database, and the second part is the `executeMigration` function that is in charge of executing the migrations.

We could divide these 2 parts in 2 different files, but for this example I will leave it in only one file.

## Execute migrations

To execute our migrations, let's create a script in our `package.json`.

```json
{
  "scripts": {
    "migrate": "bun run lib/database/migrations.ts"
  }
}
```

we will use [bun](https://bun.sh/) to be able to run our typescript file, because with [bun](https://bun.sh/) we can run typescript files without compiling them.

to install `bun` we execute the following command:

```bash
curl -fsSL https://bun.sh/install | bash
```

and then run the following command to execute our migrations:

```bash
npm run migrate
```

## Execute queries

To test that everything is working correctly, I will create a new folder in the root of my project called `actions` and inside this folder I will create a `user.ts` file with the following content:

```ts
"use server";
import { db } from "@/lib/database/db";

export async function getUsers() {
  try {
    return await await db.selectFrom("user").selectAll().execute();
  } catch (error) {
    return "Error getting users";
  }
}
```

in this file we are exporting a function called `getUsers` which is in charge of getting all the users from the database.

> Note: we are using `use server` so we can run this file on the server.

Now if we go to our `app/page.tsx` file and we are going to import our `getUsers` function and we are going to execute it.

```ts
import { getUsers } from `/actions/user`;

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

If everything is working correctly, we should see in our browser console an array with all the users in our database.

## Conclusion

As we can see using [Kysely](https://kysely.dev/) with [Nextjs](https://nextjs.org/) is very simple, and it allows us to create queries in a simple way, create tables, create migrations, transactions, etc.

Kysely is for me the best library to create SQL queries, since being written in typescript allows us to have a better autocompletion when writing our queries, and also allows us to have a better error control.

[Repository with the code](https://github.com/ga1az/next-kysely)
