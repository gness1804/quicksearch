
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('session', function(table) {
      table.increments('id').primary();
      table.string('user_email');
      table.string('user_first_name');
      table.string('user_last_name');
      table.integer('screen_width');
      table.integer('screen_height');
      table.integer('visits');
      table.integer('page_response');
      table.string('domain');
      table.string('path');
    }),
  ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
      knex.scheme.dropTable('session')
    ])
};
