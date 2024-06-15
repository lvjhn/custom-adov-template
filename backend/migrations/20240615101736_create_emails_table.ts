import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("_emails", (table) => {
        table.bigIncrements("id")
        table.string("email", 255)
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("_emails")
}

