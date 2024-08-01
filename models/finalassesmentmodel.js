import { model, Schema } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const finalAssesmentSchema = new Schema({
    quiz:{type:String, required:true},
    video:{type:String, required:true}
    
},{
    timestamps:true
})

finalAssesmentSchema.plugin(toJSON);

export const finalAssesmentModel = model('FinalAssesment', finalAssesmentSchema)