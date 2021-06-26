// Require mongoose library for MongoDB
const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			unique: true,
			required: true,
			index: true,
		},
		password: {
			type: String,
			required: true,
		},
		 tokens:[{
        token:{
            type:String,
            required:true,
        }
    }]
	},
	{ timestamps: true }
);

userSchema.methods.getAuthToken=async function(){
    const user=this;
    const token=await jwt.sign({_id:user._id},process.env.USER_TOKEN);
    user.tokens=user.tokens.concat({token});
    await user.save();
    return token;
}

userSchema.statics.findByCredetials=async(email,password)=>{
    const user=await User.findOne({email:email, password : password});
    console.log(user)
	if(!user){
		
        throw new Error('Credentials failed');
    }
    return user;
}

module.exports = mongoose.model('user', userSchema);
