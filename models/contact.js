import  mongoose from 'mongoose'

import joi from 'joi'
const contactSchema = mongoose.Schema({
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
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

const Message = mongoose.model('Message' , contactSchema)

export default Message