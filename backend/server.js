require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const cors = require("cors");
const dbConfig = require("./config/db.js");

const app = express();
dbConfig();



// Middleware to handle CORS
app.use(cors(
    {
        origin: process.env.CLIENT_URL || 'http://localhost:5173',
        credentials: true, // Allow credentials (cookies)
    }
));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});