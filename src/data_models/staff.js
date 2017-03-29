import mongoose from "mongoose";

let Schema = mongoose.Schema;

let staffSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String
    },
    email: {
        type: String
    },
    created_at: {
        type: Date,
        required: true
    },
    ministry: {type:Schema.Types.ObjectId,ref:"Ministry"}
});

module.exports = mongoose.model("Staff",staffSchema);