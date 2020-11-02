
require('dotenv').config()

module.exports = {
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  dialect: 'mysql',
  logging: (sql) => {
    if (process.env.LOG_SQL) console.log(sql) // eslint-disable-line no-console
  },
}
