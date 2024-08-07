import { model, Schema,Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";


const moduleSchema = new Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    lesson:{type:String, required:true},
    video:{type:String, required:true},
    quiz:{type:Types.ObjectId, ref:'Quiz' , required:true},
},{
    timestamps:true
})

moduleSchema.plugin(toJSON);

export const moduleModel = model('Module', moduleSchema)