import mongoose, {Schema,Document} from "mongoose";

export interface Message extends Document {
    content: string; //small s in typescript
    createdAt: Date
}
const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,//capital S in mongoose
        required:true

    },
    createdAt: {
        type: Date,
        required: true,
        defaut: Date.now
    }
})

export interface User extends Document{
    username:string;
    email:string;
    password:string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified:boolean;
    isAcceptingMessage: boolean;
    messages: Message[]
}

const UserSchema: Schema<User> = new Schema ({
    username:{
        type:String,
        required:[true,"username is required"],
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required: [true,"email is required"],
        unique:true,
        match:[/.+\@.+\..+/,'please use a valid email']
    },
    password:{
        type:String,
        required: [true,"email is required"],
    },
    verifyCode:{
        type:String,
        required:[true,"verifycode is required"],
    },
    verifyCodeExpiry:{
        type:Date,
        required:[true,"verifyCodeExpiry is Required"]
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    isAcceptingMessage:{
        type:Boolean,
        default:true,
    },
    messages:[MessageSchema]

})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User",UserSchema)//for checking if model is already created or creating first time
export default UserModel;