const validateInput = (schema) => (req, res, next) => {
    const { value, error } = schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true
    });

    if(error) res.json({"message": 'There was an error in user input.'})

    req.validatedBody = value;

    next();
}

module.exports = validateInput