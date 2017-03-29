import mongoose from "mongoose";
import Staff from "./staff";

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
    staff:[{type:Schema.Types.ObjectId, ref: "Staff"}],
    events:[{type: Schema.Types.ObjectId, ref: "Event"}]
})

module.exports = mongoose.model("Ministry",ministrySchema);