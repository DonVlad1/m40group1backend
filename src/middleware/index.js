const bcrypt = require("bcryptjs");
const jwt  = require("jsonwebtoken");
const User = require("../users/userModel")
require("dotenv").config();

exports.hashPassword = async (req, res, next) => {
    try {
        if("password" in req.body){
            const hashedPassword = await bcrypt.hash(req.body.password, 8)
            req.body.password = hashedPassword
            next()
        } else {
            throw new Error("No password provided")
        }
    } catch (error) {
        res.status(500).send({error: error.message})

    }

};

exports.tokenCheck = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const decoded = jwt.verify(token, process.env.SECRET);
        const user = await User.findOne({_id: decoded._id});

        if (!user){
            throw new Error("User does not exist")
        }

        req.user = user
        next()

    } catch (error) {
        res.status(403).send({ error: "Please log in" });
    }
};