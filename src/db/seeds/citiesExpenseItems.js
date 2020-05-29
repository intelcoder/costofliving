
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('citiesExpenseItems').del()
    .then(function () {
      // Inserts seed entries
      return knex('citiesExpenseItems').insert([
        {id: 1, cityId: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bee', expenseItemId: '1b9d6bcd-bbfa-4b2d-9b5d-ab8dfbbd4bee'},
        {id: 2, cityId: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bey', expenseItemId: '1b9d6bcd-bbfa-4b2d-9b5d-ab8dfbbd4bee'},
        {id: 3, cityId: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4beu', expenseItemId: '1b9d6bcd-bbft-4b2d-9b5d-ab8dfbbd4bee'},
        {id: 4, cityId: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bej', expenseItemId: '1b9d6bcd-bbft-4b2d-9b5d-ab8dfbbd4bee'},
        {id: 5, cityId: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bee', expenseItemId: '1b9d6bcd-bbff-4b2d-9b5d-ab8dfbbd4bee'},
        {id: 6, cityId: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bee', expenseItemId: '1b9d6bcd-bbef-4b2d-9b5d-ab8dfbbd4bee'},
        {id: 7, cityId: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bey', expenseItemId: '1b9d6bcd-bbef-4b2d-9b5d-ab8dfbbd4bee'},
        {id: 8, cityId: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4beu', expenseItemId: '1b9d6bcd-bbef-4b2d-9b5d-ab8dfbbd4bee'},
        {id: 9, cityId: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bej', expenseItemId: '1b9d6bcd-bbef-4b2d-9b5d-ab8dfbbd4bee'},
        {id: 10, cityId: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bee', expenseItemId: '1b9d6bcd-bbef-4b2d-9b5d-ab8dfbbd4bee'}
      ]);
    });
};
