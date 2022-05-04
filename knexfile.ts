import "dotenv/config";
import type { Knex } from "knex";

// Update with your config settings.
const config: Knex.Config = {
  client: "postgresql",
  connection: {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "src/migrations",
  },
};

export default config;
