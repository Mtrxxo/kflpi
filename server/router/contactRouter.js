const express = require('express');
const xssSanitize = require('xss-sanitize');
const schema = require('../schema/schema');
const validate = require('../middleware/validate');

const router = express.Router();

router.post('/contact', )