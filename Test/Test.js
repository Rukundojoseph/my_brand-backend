let chai = require("chai")
let chaiHttp = require("chai-http")
const { TokenExpiredError } = require("jsonwebtoken")
let server = require("../app")

chai.should()

chai.use(chaiHttp)

describe("blogs api" ,()=>{
    //login 
    // describe("GET /login", ()=>{        
    //     const users=[{
    //         email: "joseph@gmail.com",
    //         password : "pass123"
    //     },
    //    {
    //         email: "joseph@gmail.com",
    //         password : "pass1mm23"
    //     },
    //     {
    //         email: "josephgmail.com",
    //         password : "pass123"
    //     }]
    //     it("should log the user in ",(done)=>{
    //         chai.request(server)
    //         .post('/login')
    //         .send(users[0]) 
    //         .end((err,response) =>{
    //             response.should.have.status(200)     
    //             response.body.message.should.be.eq("you are not logged in")           
    //         })             
    //         done();
    //     })   
    //     it("it should say incorect email or password",(done)=>{
    //         chai.request(server)
    //         .post('/login')
    //         .send(users[1]) 
    //         .end((err,response) =>{
    //             response.should.have.status(400)     
    //         //    response.body.msg.should.be.eq("incorrect password")        
                  
    //         })             
    //         done();
    //     })   
    // })
    //signup 
    //get blogs
    describe("GET /blogs", ()=>{
        it("it should get all blogs ",(done)=>{
            chai.request(server)
            .get('/blogs') 
            .end((err,response) =>{
                response.should.have.status(200)
                response.body.message.should.be.eq('success')                
            }) 
            done();
        })
        it("it should get response message of success ",(done)=>{
            chai.request(server)
            .get('/blogs') 
            .end((err,response) =>{                
                response.body.message.should.be.eq('success')                          
            }) 
            done();
        })   
    })      
    //get by id 
    describe("GET /blogs/:id", ()=>{
        const blogid = "639b45418b6be33a98643589"
        it("it should get single blog by id ",(done)=>{            
            chai.request(server)
            .get('/blogs/'+ blogid) 
            .end((err,response) =>{
                response.should.have.status(200)                
            }) 
            done();
        })
        it("it should get one object for one blog ",(done)=>{
            chai.request(server)
            .get('/blogs/'+blogid) 
            .end((err,response) =>{                
                response.body.data.should.be.a('object')
            }) 
            done();
        })   
    })
    // comment 
    // like 
    // add message 
    //get admin  messages
    describe("GET /admin/messages", ()=>{   
    var token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWI3MTI2ZjJkZWE4MjkwNDAxYWE2MCIsImlhdCI6MTY3MTQ1NTkwMiwiZXhwIjoxNjcxNzE1MTAyfQ.HUslSYE5TfF4EAo689BEeM9GsTzAEDiCGSpu1A5rV44"
        it("it should Not get all admin messages from contact me ",(done)=>{
            chai.request(server)            
            .get('/admin/messages')        
            .end((err,response) =>{
                response.should.have.status(404)     
                response.body.message.should.be.eq("you are not logged in")        
               
            }) 
            done();
        })   
        it("it should Not get all admin messages from contact me ",(done)=>{
            chai.request(server)
            .get(`/admin/messages`)    
            .set('token',token)     
            .end((err,response) =>{
                response.should.have.status(404)     
                // response.body.message.should.be.eq("you are not logged in")           
            }) 
            done();
        })
    })
    // get admin blogs
    describe("GET /admin/blogs", ()=>{
        const  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWI3MTI2ZjJkZWE4MjkwNDAxYWE2MCIsImlhdCI6MTY3MTQ0NjYxMCwiZXhwIjoxNjcxNzA1ODEwfQ.mHXK2yUKN_7dx5CIzPDcYTboOBLl3jgPxzwDoL1-zXA";
        it("it should say you are not logged in",(done)=>{
            chai.request(server)
            .get('/admin/blogs') 
            .end((err,response) =>{
                response.should.have.status(404)   
                response.body.message.should.be.eq("you are not logged in")             
            }) 
            done();
        })      
    })
    //creating blog
    //editing blog 
    //deleting blog 
    //deleting message 
    //deleting comment     

})
