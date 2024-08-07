import { Schema, model} from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

//Defining new User Schema
const userSchema = new Schema({
        firstName: { type: String ,required:true},
        lastName: { type: String, required:true },
        email: { type: String,required:true, unique:true},
        password: { type: String, required:true },
        userName: { type: String ,required:true, unique:true},
        resetToken: { type: String },
        resetTokenExpiresAt: { type: Date },
},{
        timestamps:true
})

userSchema.plugin(toJSON);

export const userModel = model('User', userSchema)