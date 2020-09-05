const blogposts = require('./assets/blogposts.json');

exports.seed = async function (knex) {
  await knex('blogposts').del();
  await knex('blogposts').insert(blogposts);
};
