const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.get('/load_experience', (req, res) => {
  db.all('SELECT * FROM experience', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

module.exports = router;