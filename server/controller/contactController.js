const message = require('../model/contactModel');

const sendMessage = async(req, res) => {
    try{
        const data = req.validatedBody;

        await message.create({
            ...data
        });

        res.json({"message": "Successfully sent message."})
    }catch(err){
        res.json({"message": 'Message not sent. Try sending it later.'})
    }
}

module.exports = sendMessage