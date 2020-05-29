
exports.up = function(knex) {
  return knex.schema.createTable('countries', (table) => {
    table.uuid('id').primary()
    table.string('name').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('users');
}
