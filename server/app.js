const cors = require('cors'); // Add this line to enable CORS
// דרישות מקבילות
const express = require('express');
const path = require('path');
const imageRoutes = require('./routes/imageRoutes');  // אנחנו מייבאים את הקובץ imageRoutes.js
const contactRoutes = require('./routes/contactRoutes');  // מייבאים את contactRoutes


const app = express();
const port = process.env.PORT || '3000';

app.use(cors({
    origin:'http://localhost:5173', // Replace with your client-side URL,
    methods: ['GET', 'POST'],
    allowedHeaders: 'Content-Type, Authorization'
  }));

app.use(express.json());

// הגדרת תיקיית תמונות כסטטית (לגישה ישירה לתמונות)
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// כאן אנחנו מגדירים את ה-routes הקשורים לתמונות דרך הקובץ imageRoutes.js
app.use('/api/images', imageRoutes);
app.use('/api/contact', contactRoutes);  // הוספת ה-route לשליחת המייל



// התחלת השרת
app.listen(port, () => {
  console.log(`השרת פועל ב-http://localhost:${port}`);
});
