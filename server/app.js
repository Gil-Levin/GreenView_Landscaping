// דרישות מקבילות
const express = require('express');
const path = require('path');
const imageRoutes = require('./routes/imageRoutes');  // אנחנו מייבאים את הקובץ imageRoutes.js

const app = express();
const port = 3000;

// הגדרת תיקיית תמונות כסטטית (לגישה ישירה לתמונות)
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// כאן אנחנו מגדירים את ה-routes הקשורים לתמונות דרך הקובץ imageRoutes.js
app.use('/api/images', imageRoutes);

// התחלת השרת
app.listen(port, () => {
  console.log(`השרת פועל ב-http://localhost:${port}`);
});
