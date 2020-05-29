
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('countries').del()
    .then(function () {
      // Inserts seed entries
      return knex('countries').insert([
        {id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bee', name: 'Canada', created_at: '2020-5-24', updated_at: '2020-5-24' },
        {id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed', name: 'Korea', created_at: '2020-5-24', updated_at: '2020-5-24'},
        {id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4beg', name: 'USA', created_at: '2020-5-24', updated_at: '2020-5-24'}
      ]);
    });
};
