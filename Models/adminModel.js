const mongoose =require("mongoose")

const adminSchema =mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
    }
})

module.exports = mongoose.model("admin",adminSchema)
