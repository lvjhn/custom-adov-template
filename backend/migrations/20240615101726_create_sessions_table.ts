import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("_sessions", (table) => {
        table.uuid("id").primary() 
        table.uuid("_client_id")                   // foreign
        table.string("token", 7)        
        table.bigInteger("user_id")                // foreign
        table.bigInteger("_ip_address_id")         // foreign
        table.timestamps()

        table.unique("id")

        table
            .foreign("_client_id")
            .references("_clients.id")
            .deferrable("deferred") 

        table 
            .foreign("user_id")
            .references("users.id") 
            .deferrable("deferred") 

        table
            .foreign("_ip_address_id") 
            .references("_ip_addresses.id")
            .deferrable("deferred")  
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("_sessions")
}

