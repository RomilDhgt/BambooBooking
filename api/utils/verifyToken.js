import jwt from "jsonwebtoken"
import { createError } from "./error.js"

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log(browser)
    if(!token){
        return next(createError(401, "Not authenticated", token))
    }
    jwt.verify(token, process.env.JWT, (err, user) =>{
        if(err){
            return next(createError(403, "Invalid Token"));  
        } 
        req.user = user;
        next()
    });
};

export const verifyUser = (req,res,next) =>{
    verifyToken(req,res,next, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){     
            next()
        } else {
            return next(createError(403, "You are not authorized"));
        }
    })
}

export const verifyAdmin = (req,res,next) =>{
    console.log(req.user)
    verifyToken(req,res,next, ()=>{
        if(req.user.isAdmin){     
            next()
        } else {
            return next(createError(403, "You are not authorized"));
        }
    }) 
}