const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./db/practice.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the practice database.');
});

let sql = `SELECT rowid AS id, * FROM test`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.name);
    console.log(row.number);
  });
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});