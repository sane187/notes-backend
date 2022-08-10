const mongoose =require("mongoose")

const adminSchema =mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:[true,"enter name"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"enter password"]

    }
})

module.exports = mongoose.model("admin",adminSchema)
