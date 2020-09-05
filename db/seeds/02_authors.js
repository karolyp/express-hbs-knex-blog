exports.seed = async function (knex) {
  const authors = [
    "József", "Áron", "István", "Lőrinc", "Viktor"
  ];

  await knex('authors').del();

  await knex('authors').insert(
    authors.map(author => ({ full_name: author }))
  );
};
