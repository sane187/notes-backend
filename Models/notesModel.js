const mongoose = require('mongoose')
const notesModel = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
    }
})

module.exports = mongoose.model("notes",notesModel)