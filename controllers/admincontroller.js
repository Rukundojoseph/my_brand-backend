import  Blog from '../models/blog.js'
import  LIKE from '../models/comment.js'
import  User from '../models/User.js'
import  handleErrors from './errohandler.js';
import CONTACT from '../models/contact.js';

// const Commentslikes = (id){
 
// }



export const getAllBlogs= async (req,res)=>{   
    try{ 
    const blogs = await Blog.find({}) 
    res.json({
        statusCode: 200,
        message: "success",
        data: {
        blogs, total: blogs.length
    }
    })
    }
    catch (error){
console.log(error)
    }
}
export const getSingleBlogs= async (req,res)=>{
    try{
    const blogID= req.params.blogID
    const blog = await Blog.findOne({ _id: blogID}) 
    if (blog){
    res.json({blog})
    }else{
        res.status(200).json({
            message: "there is no blog with that id "
         })
    }
    }
    catch(error){
        errors = handleErrors(error)
        res.status(400).json(errors)
    }

}
export const CreateBlog = async (req,res)=>{
    try{
   const blog = await  Blog.create(req.body)
   res.status(201).json({
    statusCode: 201,
    message: 'succesfully created',
    blog: blog._id
   })
    }
    catch(err){
        const errors = handleErrors(err)
        res.status(400).json(err)
    }
   


}
export const EditBlogs= async (req,res)=>{
    try{
        const blog = await Blog.findOneAndUpdate({_id: req.params.id},req.body,{upsert: true, 
            new: true, 
            runValidators: true, 
            setDefaultsOnInsert: true},
          async  function (err , blog ){
                if(blog){ 
                    res.status(200).json({
                        status: 200,
                        message : ` updated blog of id ${req.params.id}`
                    })
                 return
                }
                // else{                 

                //     console.log(err)
                    
                //     return res.status(400).json({ 
                //         status: 400,
                //         message : err.message
                //      });
                     
                // }
            }
            )
    }
catch(error){
    const errors = handleErrors(error)   
    res.status(400).json({errors})
}
}

export const DeleteBlog= async (req,res)=>{
	try {
		await Blog.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
}

export const getContacts= async (req,res)=>{
    try{ 
        const conts = await CONTACT.find({}) 
        res.json({
            statusCode: 200,
            message: "succesfully withdrawn",
            data:  conts

        }
            )
        }
        catch (error){
    console.log(error)
        }
}
export const Deletemessage= async (req,res)=>{   
    try {
		await CONTACT.deleteOne({ _id: req.params.id })
		res.status(204).send({
            statusCode: 200,
            message: "delete message successfully"

        })
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
}
export const getUsers= async (req,res)=>{
    try{ 
        const users = await User.find({}).select('email') 
        res.json({users:users, population: users.length })
        }
        catch (error){
            const errors = handleErrors(error)
            res.status(400).json(errors)
    console.log(error)

        }
}
export const getlikes= async (req,res)=>{
    const blogID= req.params.id
    const likers = await LIKE.find({ _id : blogID }).sort('date')
    if(!likers){
        res.status(200).json({
            message: "there is no likes yet"
        })        
    }
 res.status(200).json({
    users: likers,
    population: likers.length

 })
}
