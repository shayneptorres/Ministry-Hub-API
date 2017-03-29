import mongoose from "mongoose";
import Ministry from "./ministry";

let Schema = mongoose.Schema;

let eventSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    info:{
        type:String
    },
    created_at:{
        type:Date,
        required:true
    },
    event_start_time:{
        type: Date
    },
    sections:[{type: Schema.Types.ObjectId,ref:"EventSection"}],
    ministry: {type: Schema.Types.ObjectId, ref:"Ministry"}
})

module.exports = mongoose.model("Event",eventSchema);