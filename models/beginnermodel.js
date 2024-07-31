import { model, Schema,Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const beginnerSchema = new Schema({
    module:{type:String},
    lesson:{type:String},
    video:{type:String},
    quiz:{type:String},
    finalAssesment:[{type: Types.ObjectId, ref:'FinalAssesment'}]
},{
    timestamps:true
})

beginnerSchema.plugin(toJSON);
export const userModel = model('Beginner', beginnerSchema)