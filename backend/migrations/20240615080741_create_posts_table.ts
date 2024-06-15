import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("posts", (table) => {
        table.increments("id")
        table.string("title")
        table.string("content")
        table.integer("author_id")
        table.timestamps()
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("users")
}

