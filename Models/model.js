const mongoose = require('mongoose')
const notes = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
    }
})

module.exports = mongoose.model("notes",notes)