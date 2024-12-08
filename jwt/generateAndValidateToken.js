import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';    

dotenv.config();
const generateToken=(userId,res)=>{
    const token = jwt.sign({userId},process.env.SECRET_KEY,{expiresIn:"12d"});
    res.cookie("jwt",token,{
        maxAge:15*24*60*60*1000,
        httpOnly: true, 
        sameSite:"strict",
        secure: process.env.NODE_ENV !=="development"
    });
    return token;
}

export default generateToken;