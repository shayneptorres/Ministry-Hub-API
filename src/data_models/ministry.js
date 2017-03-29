import mongoose from "mongoose";

let Schema = mongoose.Schema;

let ministrySchema = new Schema({
    name:{
        type:String,
        required:true
    },
    info:{
        type:String
    },
    created_at:{
        type:Date
    },
    leaders:{
        type:[String]
    }
})

module.exports = mongoose.model("Ministry",ministrySchema);