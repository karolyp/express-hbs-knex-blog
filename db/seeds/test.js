exports.seed = async (knex) => {
  await knex('test').del();

  const names = [
    { name: 'William' },
    { name: 'Steve' },
    { name: 'Tony' },
    { name: 'Alise' },
    { name: 'Bob' },
  ];

  return knex('test').insert(names);
};
