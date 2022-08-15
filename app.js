const express=require("express");
const app=express();
const path=require("path")

app.listen(3030,()=>{
    console.log("El server esta arriba en el puerto 3030")
})
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/home.html"))
})
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/login.html"))
})
app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/register.html"))
})
app.use(express.static('public'));