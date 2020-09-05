const comments = require('./assets/comments.json');

exports.seed = async function(knex) {
    await knex('comments').del();
    await knex('comments').insert(comments);
};
