import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("_ip_addresses", (table) => {
        table.bigIncrements("id")
        table.string("ip", 15).notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
}

