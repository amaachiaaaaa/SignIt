import { model, Schema, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const intermediateSchema = new Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    type:{type:String, enum: ['Beginner', 'Intermediate', 'Advanced'],required:true},
    module:{type:String, required:true},
    lesson:{type:String, required:true},
    video:{type:String, required:true},
    quiz:{type:String, required:true},
    finalAssesment:[{type: Types.ObjectId, ref:'FinalAssesment', required:true}]
},{
    timestamps:true
})

intermediateSchema.plugin(toJSON);

export const intermediateModel = model('Intermediate', intermediateSchema)