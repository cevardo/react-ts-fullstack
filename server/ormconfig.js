require('dotenv').config()
const path = require('path')

module.exports = {
  type: "postgres",
  host: "localhost",
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [path.join(__dirname, 'src', 'entity', '*.{ts, js}')],
  migrations: [path.join(__dirname, 'src', 'migration', '*.{ts, js}')],
  subscribers: [path.join(__dirname, 'src', 'subscribers', '*.{ts, js}')],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber"
  },
  migrationsTableName: "migrations_log"
}
