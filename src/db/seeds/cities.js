
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cities').del()
    .then(function () {
      // Inserts seed entries
      return knex('cities').insert([
        {id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bee', name: 'Toronto', countryId: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bee', coordinates: '{"lat":"43.651070","lng":"-79.347015"}',  created_at: '2020-5-24', updated_at: '2020-5-24'},
        {id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bey', name: 'Vancouver', countryId: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bee', coordinates: '{"lat":"43.651070","lng":"-79.347015"}',  created_at: '2020-5-24', updated_at: '2020-5-24'},
        {id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4beu', name: 'New York', countryId: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4beg', coordinates: '{"lat":"43.651070","lng":"-79.347015"}',  created_at: '2020-5-24', updated_at: '2020-5-24'},
        {id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bej', name: 'Seoul', countryId: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed', coordinates: '{"lat":"43.651070","lng":"-79.347015"}',  created_at: '2020-5-24', updated_at: '2020-5-24'},
      ]);
    });
};
