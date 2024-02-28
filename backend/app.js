require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString)
const database = mongoose.connection;
database.on('error', (error) => {
    console.log("Error Connecting to database", error)
})
database.once('connected', () => {
    console.log('Successfully Connected to the Database');
})

const app = express();
app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(cookieParser())

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

app.get("/status", (request, response) => {
    const status = {
        "Status": "Running"
    };
    response.send(status);
});

app.use(authRoutes);
