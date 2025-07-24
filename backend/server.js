require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const cors = require("cors");
const dbConfig = require("./config/db.js");

const app = express();
dbConfig();

const { authGoogle, googleCallback } = require('./controller/oauth');


// Middleware to handle CORS
app.use(cors(
    {
        origin: process.env.CLIENT_URL || 'http://localhost:5173',
        credentials: true, // Allow credentials (cookies)
    }
));


// Google OAuth routes
app.get('/auth/google', authGoogle);
app.get('/auth/google/callback', googleCallback);



app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});