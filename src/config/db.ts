import knex from "knex";
import config from "../../knexfile";

const db = knex(config);
db.migrate.latest(config.migrations);

export default db;