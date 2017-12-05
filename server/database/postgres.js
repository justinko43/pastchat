const keys = require('../../keys.js');
const { Client } = require('pg');

const db = new Client({
  user: keys.POSTGRES_USERNAME,
  host: keys.POSTGRES_URI,
  database: keys.POSTGRES_DBNAME,
  password: keys.POSTGRES_PASSWORD,
  port: keys.POSTGRES_PORT
})

module.exports = db;