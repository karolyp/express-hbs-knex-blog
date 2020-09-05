exports.up = function(knex) {
    return knex.schema.createTable('comments', table => {
        table.increments(); // id int auto_increment
        table.text('comment').notNull();
        table.string('sender').notNull();
        table.integer('like_count').unsigned().defaultTo(0);
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.integer('blogpost_id').unsigned().references('id').inTable('blogposts');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('comments');
};
