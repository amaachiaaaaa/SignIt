import { Schema, model, Types} from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";


const userProfile = new Schema({
    user:{type: Types.ObjectId, ref:'User', required:true},
    profilePicture: { type: String },
    age: { type: String , required:true},
    sex: { type: String, enum: ['male', 'female'], required:true },
    dateOfBirth: { type: Date,required:true },
    contact: { type: String, required:true },
    address:{type:String, required:true},
    about: { type: String, required:true },
   skillLevel:{type:String, enum:['Beginner', 'Intermediate' , 'Advanced'],required:true},
   learningGoals:{type:String, enum:['short-term', 'long-term'], required:true},
   interests:{type:String, required:true}
    
},{
    timestamps:true
})

userProfile.plugin(toJSON);

export const userProfileModel = model('Profile',userProfile)