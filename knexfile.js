module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/quicksearch',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
  },
}
