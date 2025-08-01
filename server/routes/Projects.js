const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.get('/loadprojects', (req, res) => {
  db.all('SELECT * FROM gallery_images', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

module.exports = router;