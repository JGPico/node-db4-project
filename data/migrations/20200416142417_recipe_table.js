
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.string('id', 128)
      .unique()
      .notNullable();
  })
};

exports.down = function(knex) {
    // drop in reverse order
  return knex.schema.dropTableIfExits('recipes');
};
