const mongoose = require('mongoose')


const blogSchema = new mongoose.Schema({
    
    title:{
        type: String,
        required: [true , 'blog title can not be null'], 
        minlength: [4, "you cant have a blog title less than 4 characters"]           
    },
    body: {
        type: String,
         required: [true, 'blog description can not be null'],         
            },
    image: {
        type: String,
            },
    date: {type: Date, default: Date.now},
    likes: [{
        type:mongoose.Schema.Types.ObjectId, ref:'Like'
    }],
comments:[{
    type:mongoose.Schema.Types.ObjectId, ref:'Comment'
    }]
    
  
     
})

module.exports  = mongoose.model('BLOG' , blogSchema)

