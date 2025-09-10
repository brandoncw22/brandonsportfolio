/**
 * Route: /api/contact
 * - POST /contact_submit -> sends an email using nodemailer with form data
 */
const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
require('dotenv').config()

let transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});


router.post('/contact_submit', (req, res) => {
  const { name, email, phone, inquiry } = req.body;

  // Compose and send email to configured inbox
  transporter.sendMail({
    from: `${name} ${email}`,
    to: process.env.EMAIL,
    subject: `Contact Inquiry from ${name}`,
    text: `Name: ${name}\n
    Email: ${email}\n
    Phone: ${phone}\n
    ${inquiry}`
  })

  res.json({ message: "Submission received successfully" });
});


module.exports = router;
