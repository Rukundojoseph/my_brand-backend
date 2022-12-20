const mongoose = require('mongoose')

const likeSchema = mongoose.Schema({
    date: {type: Date, default: Date.now},            
            email: {
                 type: String ,
                 required: true
             },   
        
}
)


module.exports = mongoose.model('Like', likeSchema)