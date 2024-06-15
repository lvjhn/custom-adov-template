import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("_user_agents", (table) => {
        table.bigIncrements("id")
        table.string("name", 2048).notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("_user_agents")
}

