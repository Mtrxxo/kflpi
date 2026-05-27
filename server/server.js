const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const mongoSanitize = require('express-mongo-sanitize');
const xssSanitize = require('xss-sanitize');

const app = express();

const FR_URL = process.env.FR_URL;
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

app.use(cors({
    origin: (origin, callback) => {
        if(!origin) return callback(null, true)

        if(origin == FR_URL) return callback(null, true)

        return callback(new Error("Origin is unknown."))
    },
    credentials: true,
    allowedHeaders: 'content-type',
    methods: ['POST', 'GET', 'DELETE', 'PATCH', 'OPTIONS']
}));

app.use(express.json({ limit: '10kb' }));

app.use(mongoSanitize({
    replaceWith: '_'
}));

app.use(xssSanitize());

mongoose.connect(MONGO_URL).then(() => {
    app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
});