exports.up = function(knex) {
    return knex.schema.createTable('blogposts', table => {
        table.increments();
        table.string('title').notNullable();
        table.text('description').notNullable();
        table.timestamps(true, true);
        table.integer('category_id').unsigned().references('id').inTable('categories');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('blogposts');
};
