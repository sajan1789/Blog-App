
const mongoose=require("mongoose")

const indivisualBlog=mongoose.Schema(
    {
        title:{type:String,required:true},
        content:{type:String,required:true},
        timeStamp:{type:String}
    },
    {versionKey:false}
)