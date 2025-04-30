// contactRoutes.js
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// create transporter to send mail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:'websitegreenv@gmail.com', // the sending mail adress
    pass:'rdwx pjnc srvp eelf'    // password to this mail
  }
});

// route to send mail
router.post('/send', (req, res) => {
    console.log(req.body);
  const { name, email, phone, service, message } = req.body;

  // define mail content
  const mailOptions = {
    from:'websitegreenv@gmail.com',
    to: 'greenviewcalgary@gmail.com', // the business mail adress
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
