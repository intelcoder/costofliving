
exports.up = function(knex) {
  return knex.schema.createTable('expensePrices', (table) => {
    table.uuid('id').primary()
    table.float('price').notNullable()
    table.uuid('citiesExpenseItemId').references('citiesExpenseItems.id')
    table.timestamps(true, true)
  }) 
};

exports.down = function(knex) {
  return knex.schema.dropTable('expense_prices');
};
