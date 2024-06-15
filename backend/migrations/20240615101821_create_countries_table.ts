import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("countries", (table) => {
        table.increments("id")
        table.string("name", 64)
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("countries")
}

