
exports.up = function(knex) {
  return knex.schema.createTable('categories', (table) => {
    table.uuid('id').primary()
    table.string('name').notNullable()
    table.uuid('expenseItemId').references('expenseItems.id')
    table.timestamps(true, true)
  }) 
}

exports.down = function(knex) {
  return knex.schema.dropTable('categories')
}

