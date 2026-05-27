const expressRateLimit = require('express-rate-limit');

const rateLimit = expressRateLimit.rateLimit({
    windowMs: 60 * 60 * 60,
    limit: 3,
    message: JSON.stringify({ message: "Too many requests. Try again after one hour." })
});

module.exports = rateLimit