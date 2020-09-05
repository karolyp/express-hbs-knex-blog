exports.seed = async function (knex) {
  const categories = [
    'átverés',
    'befektetés',
    'Biztosítás',
    'csalás',
    'Egyéb',
    'hitel',
    'ingatlan',
    'jog',
    'könyvelés',
    'lakástakarék',
    'mobil',
    'Nincs kategorizálva',
    'pénzügyi tanácsadás',
    'pénzváltás',
    'personal finance',
  ];

  await knex('categories').del();

  await knex('categories').insert(
    categories.map(category => ({ name: category }))
  );
};
