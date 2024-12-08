import jwt from 'jsonwebtoken';
import Admin from '../Schemas/AdminModel.js';
import dotenv from 'dotenv';
dotenv.config();
const protectRoute = async (req, res, next) => {
    try{
        const token =req.cookies.jwt;
        if(!token) return res.status(401).json("Unauthorized");
        const verify = jwt.verify(token, process.env.SECRET_KEY);
        if(!verify) return res.status(401).json("Unauthorized");        
        req.AdminId = verify.userId;
        next();
    }
    catch(error){
        console.log("error in middleware", error);  
        res.status(500).json(error);
    }
}

export default protectRoute;