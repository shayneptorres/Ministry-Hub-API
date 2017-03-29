import mongoose from "mongoose";
import Event from "./event";

let Schema = mongoose.Schema;

let eventSectionSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    info: {
        type: String
    },
    created_at: {
        type: Date,
        required: true
    },
    start_time:{
        type: Date
    },
    event: {type:Schema.Types.ObjectId, ref:"Event"}
})

module.exports = mongoose.model("EventSection",eventSectionSchema);