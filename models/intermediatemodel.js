import { model, Schema } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const intermediateSchema = new Schema({
    module:{type:String},
    lesson:{type:String},
    video:{type:String},
    quiz:{type:String},
    finalAssesment:[{type: Types.ObjectId, ref:'FinalAssesment'}]
},{
    timestamps:true
})

intermediateSchema.plugin(toJSON);
export const userModel = model('Intermediate', intermediateSchema)