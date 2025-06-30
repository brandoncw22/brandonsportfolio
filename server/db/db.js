const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./portfolio.db', (err) => {
  if (err) return console.error(err.message);
  console.log('Connected to SQLite database.');
  Setup();
});

function Setup () {
    db.run(`
        CREATE TABLE IF NOT EXISTS image_gallery(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            src TEXT NOT NULL,
            alt TEXT NOT NULL,
            desc TEXT NOT NULL
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS project(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            STATUS INTEGER NOT NULL,
            techstack TEXT NOT NULL,
            github TEXT,
            live TEXT,
            desc TEXT NOT NULL
        )
    `);
}

module.exports = db
