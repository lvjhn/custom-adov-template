import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("users", (table) => {
        table.bigIncrements("id")
        table.string("email", 255)
        table.string("username", 255)
        table.string("password", 255)
        table.bigInteger("failed_logins")
        table.bigInteger("notified_failed_logins")
        table.boolean("disabled_at")
        table.timestamp("email_verified_at") 
        table.timestamps() 
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("users")
}

