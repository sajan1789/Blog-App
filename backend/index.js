const {userRoutes}=require("./Routes/userRoutes")
const express=require("express")
const app=express()
const {connection}=require("./db")
app.use("/users",userRoutes)

app.listen(8080,async()=>{
    try{
     await   connection
     console.log("connected")
    }
    catch(err){
        res.send({"err":err.message})
    }
     
})