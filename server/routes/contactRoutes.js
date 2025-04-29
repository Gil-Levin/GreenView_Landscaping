// contactRoutes.js
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// יצירת transporter לשליחת מיילים
const transporter = nodemailer.createTransport({
  service: 'gmail', // אם את משתמשת ב-Gmail
  auth: {
    user:'websitegreenv@gmail.com', // כתובת האימייל שלך
    pass:'rdwx pjnc srvp eelf'    // הסיסמה שלך
  }
});

// נתיב לשליחת המייל
router.post('/send', (req, res) => {
    console.log(req.body);
  const { name, email, phone, service, message } = req.body;

  // הגדרת תוכן המייל
  const mailOptions = {
    from:'websitegreenv@gmail.com',
    to: 'greenviewcalgary@gmail.com', // כתובת המייל של המנהל
    subject: `New Contact from website by ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Service: ${service}
      Message: ${message}
    `
  };

  // שליחת המייל
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
