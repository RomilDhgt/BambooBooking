import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import {createError} from "../utils/error.js"


export const register = async (req,res,next)=>{
    try {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
        console.log(req.body)
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
            isAdmin: req.body.isAdmin === 'true' ? true : false
        });

        await newUser.save()
        res.status(200).send("User has been created.")
    } catch (error) {
        next(error);
    }
}

export const login = async (req,res,next)=>{
    try {

        const user = await User.findOne({username:req.body.username});
        if (!user) return next(createError(404, "User not found!"));

        const passwordCheck = await bcrypt.compare(req.body.password, user.password);
        if (!passwordCheck){ 
            return next(createError(400, "Wrong username or password!"));
        }
        const token = jwt.sign({id:user._id, isAdmin: user.isAdmin}, process.env.JWT);
        console.log(token)
        const {password, isAdmin,...otherDetails} = user._doc;

        res.cookie("access_token", token, {
            httpOnly: true,
            sameSite: true,
            maxAge: 24 * 60 * 60 * 1000,
        })
        .status(200)
        .json({ details: { ...otherDetails }, isAdmin });
    } catch (error) {
        next(error);
    }
}