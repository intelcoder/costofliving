
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('cities', (table) => {
      table.uuid('id').primary()
      table.string('name').notNullable()
      table.uuid('countryId').references('countries.id');
      table.json('coordinates')
      table.timestamps(true, true)
    }),
    knex.schema.createTable('citiesExpenseItems', (table) => {
      table.increments('id').primary()
      table.uuid('cityId').references('cities.id');
      table.uuid('expenseItemId').references('expenseItems.id');
      
    }),
    knex.schema.createTable('expenseItems', (table) => {
      table.uuid('id').primary()
      table.string('name').notNullable()
      table.string('measurements')
      table.string('measurementUnit')
      table.timestamps(true, true)
    }) 
  ])
}

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('cities'),
    knex.schema.dropTable('citiesExpenseItems'),
    knex.schema.dropTable('expenseItem')
  ])
}
