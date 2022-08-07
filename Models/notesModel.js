const mongoose = require('mongoose')
const notesModel = mongoose.Schema({
    date:{
        type:Date,
        // required:[true,"give proper date"],
    },
    title:{
        type:String,
        required:[true,"Enter title"]
    },
    fav:{
        type:Number,
        required:[true,"Enter importance"]
    },

    id:{
        type:Number,
        required:[true,"Enter Id"],
        unique:true
    },
    task:{
        type:String,
        required:[true,"Enter task details"]
    },

})

module.exports = mongoose.model("notes",notesModel)