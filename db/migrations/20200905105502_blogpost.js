exports.up = async function (knex) {
    await createAuthorsTable(knex);
    await createBlogpostsTable(knex);
};

exports.down = async function (knex) {
    await dropBlogpostsTable(knex);
    await dropAuthorsTable(knex);
};

function createAuthorsTable(knex) {
    return knex.schema.createTable('authors', table => {
        table.increments();
        table.string('full_name').notNullable();
    });
}

function createBlogpostsTable(knex) {
    return knex.schema.createTable('blogposts', table => {
        table.increments();
        table.string('title').notNullable();
        table.text('description').notNullable();
        table.timestamps(true, true);
        table.integer('category_id').unsigned().references('id').inTable('categories');
        table.integer('author_id').unsigned().references('id').inTable('authors');
    });
}

function dropAuthorsTable(knex) {
    return knex.schema.dropTable('authors');
}

function dropBlogpostsTable(knex) {
    return knex.schema.dropTable('blogposts');
}
