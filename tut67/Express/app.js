const express =require('express')
const app = express();
const path=require("path");
const port =8033;
const hostname='127.0.0.1'
//EXPRESS STUFF
app.use('static',express.static('static'))// For serving static files 
//PUG STUFF
app.set ('view engine','pug')//set the template engine for pug
app.set('views',path.join(__dirname,'views'))//set the view directory 
//Our pug demo endpoint
app.get("/",(req,res)=>{
    const con ={'this is the best content in the world because it is created by master puneet'}
    const params ={ title: 'Pub G is the best game', 'content': con} 
    res.status(200).render('index.pug',params)
});
//ENDPOINTS
app.get("/about",(req,res)=>{
    res.send("this is my about page first express  app with Harry")
});
app.post("/about",(req,res)=>{
    res.send("this is my post about page first express  app with Harry")
});
// STARTING THE SERVER
app.listen(port,hostname,()=>{
    console.log(`THis application started successfullly on port http://${hostname}:${port}/`)
})
