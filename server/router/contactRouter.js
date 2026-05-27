const express = require('express');
const xssSanitize = require('xss-sanitize');
const schema = require('../schema/schema');
const validate = require('../middleware/validate');
const rateLimiter = require('../middleware/rateLimit');
const logic = require('../controller/contactController');

const router = express.Router();

router.post('/contact', rateLimiter, xssSanitize.paramSanitize(), validate.validateInput(schema), logic);

module.exports = router;