const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// הגדרת נתיב לשליפת תמונות
router.get('/', (req, res) => {
  const imagesDir = path.join(__dirname, '../public/images'); // תיקיית התמונות
  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      return res.status(500).send('שגיאה בקריאת הקבצים');
    }

    // פילטר כדי לקחת רק קבצים עם סיומות של תמונות (jpg, jpeg, png, וכו')
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

    // המרת שם הקובץ לכתובת URL
    const imageUrls = imageFiles.map(file => `http://localhost:3000/images/${file}`);

    // מחזירים את הקישורים בתור JSON
    res.json(imageUrls);
  });
});

module.exports = router;  // מייצאים את ה-router
