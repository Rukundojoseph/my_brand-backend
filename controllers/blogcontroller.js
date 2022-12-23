import  Blog  from '../models/blog.js'
import  jwt from 'jsonwebtoken'
import  Comments from '../models/comment.js'
import  LIKE from '../models/like.js'
import  handleErrors from './errohandler.js'
import  User from '../models/User.js'
import  CONTACT from '../models/contact.js'



export const getAllBlogs= async (req,res)=>{
    const blogs = await Blog.find({})
 if(blogs){
    res.json({
        statusCode: 200,
        message: "success",
        data: {
        blogs, total: blogs.length
    }
    })
    return
 }
 res.status(404).json({
    statusCode: 404,
    message: "success",
    message: "no blog post yet"
 })
}
export const getSingleBlogs= async (req,res)=>{
    const blogID= req.params.id
    const blog = await Blog.findOne({ _id: blogID}).populate("comments")
 if(blog){
 const coms = await Comments.findById(blog.comments)

   return res.status(200).json(
    { 
        statusCode: 200,
        message: "success",
        data: {
        title : blog.title,
       text : blog.body ,
       likes : blog.likes.length
       ,comments: blog.comments}
    },    
    )

 }
 res.status(404).json({
    statusCode: 404,    
    message: "there is no blog with that id "
 })
}
export const addLike =async(req,res)=>{    
    const blogid= req.params.id     
    const token = req.cookies.token    
    jwt.verify(token, 'my name is joseph', async (err, decodedToken) => {
        if (err) {
          return {message:"the login has been changed"}    
        } else {      
            const user = await User.findById(decodedToken.id).select("email")
            console.log(user)       
            Blog.findById(req.params.id, function(err, foundBlog) {
                if(err){
                    console.log(err);
                    res.status(400).json(
                        {err,
                         statusCode: 400,
                         message: "failed",}
                         );
                } else{
                    var addedlike = {                        
                       email : user.email
                    };
                    console.log(addedlike)
                    LIKE.create(addedlike, function(err, newComment){
                        if(err){
                            console.log(err);
                        } else{
                            foundBlog.likes.push(newComment);
                            foundBlog.save();
                            res.status(200).json(
                                {
                                    statusCode: 200,
                                    message: "success",
                                result :"liked blog"
                            })
                        }
                    })
                }
            })
        

        }
      }); 
   
// let like={
//     user: "user",
//     }   
//     console.log(like)
//     try{        
//         const blog  = await Blog.findOne({_id : blogid})
//     }    
//     catch(error) {        
//         res.status(400).send(error)     
//         console.log(error) 
     
//     }
}
export const addComment =async(req,res)=>{
    const blogid= req.params.id     
    const text = req.body.text
    const token = req.cookies.token    
    jwt.verify(token, 'my name is joseph', async (err, decodedToken) => {
        if (err) {
          return {message:"the login has been changed"}    
        } else {      
            const user = await User.findById(decodedToken.id).select("email")
            console.log(user)       
            Blog.findById(req.params.id, function(err, foundBlog) {
                if(err){
                    console.log(err);
                    res.status(400).json({
                        err,
                        statusCode: 200,
                        message: "error",
                    });
                } else{
                    var addedcomment = {                        
                       author : user.email,
                       body : text,
                       blogID : blogid
                    };
                    console.log(addedcomment)
                    Comments.create(addedcomment, function(err, newComment){
                        if(err){
                            console.log(err);
                        } else{
                            foundBlog.comments.push(newComment);
                            foundBlog.save();
                            res.status(200).json({
                                result:"added comment blog",
                                statusCode: 200,
                                message: "success",
                            })
                        }
                    })
                }
            })
        

        }
      }); 
}
export const addMessage = async(req,res) =>{
    try{
    const ms = {
        email : req.body.email,
        username : req.body.name,
        message : req.body.message
    }
     await CONTACT.create(ms)
    res.status(200).json({
        statusCode: 200,
        message : "Message Sent"
    })
    } 
    catch(err){
        const errors = handleErrors(err)
        res.status(400).json({errors})
    }   
} 