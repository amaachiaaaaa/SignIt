import { model, Schema } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const finalAssesmentSchema = new Schema({
    quiz:{type:String},
    video:{type:String}
    
},{
    timestamps:true
})

finalAssesmentSchema.plugin(toJSON);
export const userModel = model('FinalAssesment', finalAssesmentSchema)