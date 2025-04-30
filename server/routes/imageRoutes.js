const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// define route to get the photos
router.get('/', (req, res) => {
  const imagesDir = path.join(__dirname, '../public/images'); // the images folder
  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      return res.status(500).send('error reading files');
    }

    // Filter to only take files with image extensions (jpg, jpeg, png, etc)
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

    // convert file name to image URL
    const imageUrls = imageFiles.map(file => `http://localhost:3000/images/${file}`);
    res.json(imageUrls);
  });
});

module.exports = router;
