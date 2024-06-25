const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        required:true,
        alllowercase:true
    }
})