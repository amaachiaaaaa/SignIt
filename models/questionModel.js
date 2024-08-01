import { model, Schema } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const questionSchema = new Schema({
    questionText:{type:String, required:true},
    possibleAnswers:[{type:String, required:true}],
    correctAnswer:{type:String, required:true},
    createdAt:{type:Date,default:Date.now()},
    updatedAt:{type:Date,default:Date.now()}
    
},{
    timestamps:true
})

questionSchema.plugin(toJSON);

export const questionModel = model('Question', questionSchema)