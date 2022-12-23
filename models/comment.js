import mongoose from 'mongoose'
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


const Comment = mongoose.model('Comment', commentSchema)

export default  Comment