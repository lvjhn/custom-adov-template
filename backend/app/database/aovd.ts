import Knex from "knex"
import { Model } from "objection"
import { database as dbCfg } from '#config/aovd'
import { writeFileSync } from "fs"

// @ts-ignore
const cfg = dbCfg.databases[dbCfg.default]

export const db = Knex(cfg)
