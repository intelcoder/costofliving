
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('expenseItems').del()
    .then(function () {
      // Inserts seed entries
      return knex('expenseItems').insert([
        {id: '1b9d6bcd-bbfa-4b2d-9b5d-ab8dfbbd4bee', name: 'Room', measurements: null, measurementUnit: null},
        {id: '1b9d6bcd-bbfb-4b2d-9b5d-ab8dfbbd4bee', name: 'Living Room', measurements: null, measurementUnit: null},
        {id: '1b9d6bcd-bbfc-4b2d-9b5d-ab8dfbbd4bee', name: 'Studio', measurements: null, measurementUnit: null},
        {id: '1b9d6bcd-bbft-4b2d-9b5d-ab8dfbbd4bee', name: 'Fried Chicken', measurements: null, measurementUnit: null},
        {id: '1b9d6bcd-bbff-4b2d-9b5d-ab8dfbbd4bee', name: 'Kimchi', measurements: '1', measurementUnit: 'Kg'},
        {id: '1b9d6bcd-bbef-4b2d-9b5d-ab8dfbbd4bee', name: 'Beer', measurements: '500', measurementUnit: 'ml'},
      ]);
    });
};
