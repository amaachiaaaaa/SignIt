import { model, Schema } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const advancedSchema = new Schema({
    module:{type:String},
    lesson:{type:String},
    video:{type:String},
    quiz:{type:String},
    finalAssesment:[{type: Types.ObjectId, ref:'FinalAssesment'}]
},{
    timestamps:true
})

advancedSchema.plugin(toJSON);
export const userModel = model('Advanced', advancedSchema)