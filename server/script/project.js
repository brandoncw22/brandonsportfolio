// server/script/project.js
const fs = require('fs');
const path = require('path');
const db = require('../db/db');

/**
 * Read a UTF‑8 text file and return the full string with whitespace preserved.
 * - Strips BOM if present
 * - Normalizes CRLF/CR to LF so it renders consistently
 * - DOES NOT trim or collapse blank lines/indentation
 */
function readTextPreserveWhitespace(filePath) {
  const absolute = path.resolve(filePath);

  if (!fs.existsSync(absolute)) {
    throw new Error(`Description file not found: ${absolute}`);
  }

  let text = fs.readFileSync(absolute, 'utf8');

  // Remove BOM + normalize line endings
  text = text.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  return text;
}


/**
 * Insert a project into the database.
 * @param {string} title
 * @param {string} status - e.g. "complete" or 1
 * @param {string} techstack - e.g. "React, Express, Node, SQLite"
 * @param {string} descFile - path to .txt file
 * @param {string|null} github - optional URL
 * @param {string|null} live   - optional URL
 */
function project(title, status, techstack, descFile, github = null, live = null) {
  // Basic validation/usage
  if (!title || !status || !techstack || !descFile) {
    console.log(
      'Usage: project "Title" <status|1|0> "React, Express, ..." "/path/to/desc.txt" ["https://github.com/..." ["https://live.url"]]'
    );
    return;
  }

  let description;
  try {
    description = readTextPreserveWhitespace(descFile);
  } catch (err) {
    console.error('❌ Failed to read description file:', err.message);
    return;
  }

  const sql = `
    INSERT INTO project (title, STATUS, techstack, github, live, desc)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.run(
    sql,
    [title, status, techstack, github, live, description],
    function (err) {
      if (err) {
        console.error('DB insert error:', err.message);
        return;
      }
      console.log(`Inserted project id: ${this.lastID}\n`);
    }
  );
}

module.exports = project;
