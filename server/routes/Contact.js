const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");

router.post('/contact_submit', (req, res) => {
  const { name, email, phone, inquiry } = req.body;

  res.json({ message: "Submission received successfully" });
});


module.exports = router;