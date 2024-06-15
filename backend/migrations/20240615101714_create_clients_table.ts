import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("_clients", (table) => {
        table.uuid("id").primary().unique()
        table.uuid("_user_agent_id")            // foreign
        table.bigInteger("access_count")
        table.bigInteger("user_count")

        table
            .foreign("_user_agent_id")
            .references("_user_agents.id")
            .deferrable('deferred')
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("_clients")
}

