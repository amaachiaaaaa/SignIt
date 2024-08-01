import { model, Schema, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const quizSchema = new Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    questions:[{type: Types.ObjectId, ref:'Question'}],
    createdAt:{type:Date,default:Date.now()},
    
    
},{
    timestamps:true
})

quizSchema.plugin(toJSON);

export const quizModel = model('Quiz', quizSchema)