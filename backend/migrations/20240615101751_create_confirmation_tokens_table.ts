import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("_confirmation_tokens", (table) => {
        table.uuid("id").primary().unique()
        table.bigInteger("_email_id")           // foreign
        table.string("token", 7)
        table.string("type", 64)
        table.timestamps() 

        table 
            .foreign("_email_id")
            .references("_emails.id")
            .deferrable("deferred")
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("_confirmation_tokens")
}

