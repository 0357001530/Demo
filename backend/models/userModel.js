import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}},
    

    // quên mật khẩu và đặt lại mật khẩu 
    verifyOtp:{type:String, default:''},
    verifyOtpExpireAt:{type:String, default: ''},
    isAccountVerified:{type:Boolean, default: false},
    resetOtp:{type: String, default: ''},
    resetOtpExpireAt:{type:Number,default: 0}
    
}, {minimize: false})

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;