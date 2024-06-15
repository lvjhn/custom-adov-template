// Update with your config settings.
import { database as dbCfg } from "./config/aovd"

const cfg = dbCfg.databases[dbCfg.default]

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
    development: cfg
};
  