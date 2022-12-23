import  mongoose from 'mongoose'
const likeSchema = mongoose.Schema({
    date: {type: Date, default: Date.now},            
            email: {
                 type: String ,
                 required: true
             },   
        
}
)


const LIKE = mongoose.model('Like', likeSchema)

export default LIKE