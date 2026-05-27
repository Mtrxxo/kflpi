const mongoose = require('mongoose');
const { Schema } = require('yup');

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true, min: 2, max: 40 },
    email: { type: String, required: true },
    message: { type: String, required: true, max: 1000 }
});

module.exports = mongoose.model("Message", contactSchema);