const cors = require('cors'); // Add this line to enable CORS
const express = require('express');
const path = require('path');
const imageRoutes = require('./routes/imageRoutes');  
const contactRoutes = require('./routes/contactRoutes');


const app = express();
const port = process.env.PORT || '3000';

app.use(cors({
    origin:'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: 'Content-Type, Authorization'
  }));

app.use(express.json());

// define the images folder as static
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// define routes
app.use('/api/images', imageRoutes);
app.use('/api/contact', contactRoutes);



// start server
app.listen(port, () => {
  console.log(`The server is listening to-http://localhost:${port}`);
});
