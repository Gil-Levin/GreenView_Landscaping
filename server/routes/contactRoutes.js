// contactRoutes.js
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

// create transporter to send mail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:process.env.SENDEMAIL, // the sending mail adress
    pass:process.env.PASSSENDEMAIL    // password to this mail
  }
});

// route to send mail
router.post('/send', (req, res) => {
    console.log(req.body);
  const { name, email, phone, service, message } = req.body;

  // define mail content
  const mailOptions = {
    from:process.env.SENDEMAIL,
    to:process.env.RECIVEEMAIL, // the business mail adress
    subject: `New Contact from website by ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Service: ${service}
      Message: ${message}
    `
  };

  // send mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
        console.log(info);
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Email sent successfully');
  });
});

module.exports = router;
