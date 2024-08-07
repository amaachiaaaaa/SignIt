import { model, Schema, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const advancedSchema = new Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    type:{type:String, enum: ['Beginner', 'Intermediate', 'Advanced'], required:true},
    module:{type:Types.ObjectId, ref:'Module', required:true},
    finalAssesment:[{type: Types.ObjectId, ref:'FinalAssesment', required:true}]
},{
    timestamps:true
})

advancedSchema.plugin(toJSON);

export const advancedModel = model('Advanced', advancedSchema)