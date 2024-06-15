import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("_user_clients", (table) => {
        table.bigIncrements("id")
        table.bigInteger("user_id")         // foreign
        table.uuid("_client_id")            // foreign
        table.bigInteger("access_count")
        table.bigInteger("user_count")
        table.timestamp("first_accessed_at")
        table.timestamp("last_accessed_at")

        table   
            .foreign("user_id") 
            .references("users.id") 
            .deferrable("deferred")

        table
            .foreign("_client_id")
            .references("_clients.id")
            .deferrable("deferred")
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("_user_clients")
}

