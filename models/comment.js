const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    date: {type: Date, default: Date.now},
    body: { 
        type: String,
        required: [true, 'you cant post a null comment']
     } ,
     author: {
            type: String 
        },
        //
        blogID: {
         type: String
        }
        //
    
}
)


module.exports = mongoose.model('Comment', commentSchema)