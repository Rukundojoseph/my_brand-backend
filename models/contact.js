const mongoose = require('mongoose')
const { isEmail } = require('validator');

const contactSchema = mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        validate: [isEmail, 'please enter va;id email'],
        required: true
    },
    username:{
        type: String,
        required: true,        
    },
    message:{
        type: String,
        required: [true, 'enter the message you want to send']
    },
    date: {type: Date, default: Date.now},
})

module.exports = mongoose.model('Message' , contactSchema)