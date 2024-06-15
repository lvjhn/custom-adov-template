import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("profiles", (table) => {
        table.bigIncrements("id")
        table.bigInteger("user_id")         // foreign 
        table.string("first_name", 128)
        table.string("middle_name", 128)
        table.string("last_name", 128)
        table.integer("country_id")         // foreign 
        table.date("birthdate") 
        table.string("gender", 4) 


        table 
            .foreign("user_id")
            .references("users.id")
            .deferrable("deferred")
    })
}


export async function down(knex: Knex): Promise<void> {
}

