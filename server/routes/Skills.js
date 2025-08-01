const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.get('/loadskills', (req, res) => {
  db.all('SELECT * FROM skills', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

module.exports = router;