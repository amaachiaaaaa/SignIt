import { model, Schema,Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";


const courseSchema = new Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    type:{type:String, enum: ['Beginner', 'Intermediate', 'Advanced'], required:true},
    module:[{type:Types.ObjectId, ref:'Module'}],
    finalAssesment:[{type: Types.ObjectId, ref:'FinalAssesment'}]
},{
    timestamps:true
})

courseSchema.plugin(toJSON);

export const courseModel = model('Courses', courseSchema)