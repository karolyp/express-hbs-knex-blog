exports.up = function (knex) {
    return knex.schema.createTable('categories', table => {
        table.increments(); // id int auto_increment
        table.string('name').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('categories');
};
