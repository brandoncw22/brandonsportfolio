const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.get('/load_gallery', (req, res) => {
  db.all('SELECT * FROM image_gallery', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

module.exports = router;
