const yup = require('yup');

const contactSchema = yup.object({
    name: yup.string().min(2, "Your name should include at least two letters").max(40, "Name can't be longer than 40 characters").required("Name is a required field"),
    email: yup.string().email().required("Email is a required field"),
    message: yup.string().max(1000, "You've reached the limit of 1000 characters.").required("Message is a required field")
});

module.exports = contactSchema