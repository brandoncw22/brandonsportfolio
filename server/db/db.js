const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.resolve(__dirname, '../portfolio.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) return console.error(err.message);
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
    db.run(`
        CREATE TABLE IF NOT EXISTS project_images(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            src TEXT NOT NULL,
            alt TEXT NOT NULL,
            desc TEXT NOT NULL,
            projID INTEGER NOT NULL,
            FOREIGN KEY (projID) REFERENCES project(id)
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS experience(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            jobTitle TEXT NOT NULL,
            jobCompany TEXT NOT NULL,
            beginDate TEXT NOT NULL,
            endDate TEXT NOT NULL,
            imageSrc TEXT NOT NULL,
            imgAlt TEXT NOT NULL,
            desc TEXT NOT NULL
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS skills(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            skill TEXT NOT NULL,
            imageSrc TEXT NOT NULL,
            imgAlt TEXT NOT NULL
        )
    `);
}

module.exports = db;
