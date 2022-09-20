const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userSchema = new mongoose.Schema({
	name: {
			type: String,
			required: true
	},
	email: {
			type: String,
			required: true,
			unique: true
	},
	password: {
			type: String,
			required: true
	},
})

userSchema.statics.findByCredentials = async (email, password) => {
	const user = await User.findOne({email});

	if (!user){
		throw new Error("Unable to login");
	}

	const passwordMatch = await bcrypt.compare(password, user.password);

	if (!passwordMatch){
		throw new Error("Unable to login");
	}

	return user;
}


userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({_id: this._id}, process.env.SECRET)
	return token
}
const User = mongoose.model("Users", userSchema);

module.exports = User;
