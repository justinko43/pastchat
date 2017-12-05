const db = require('../postgres.js');

db.connect(async () => {
  await db.query('INSERT INTO posts (columntest) values (\'test\')');
  const result = await db.query('SELECT * FROM posts;');
  console.log(result.rows);
  db.end();
});