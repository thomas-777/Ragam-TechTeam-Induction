import generateToken from "../jwt/generateAndValidateToken.js";
import Admin from "../Schemas/AdminModel.js";
import bcrypt from "bcrypt";




export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await Admin.findOne({ username });
        !admin && res.status(400).json("Invalid Credentials");
        console.log("HOla");
        const validated = await bcrypt.compare(password, admin.password);
        !validated && res.status(400).json("Invalid Credentials");
        generateToken(admin._id, res);
        res.status(200).json({
            _id: admin._id,
            username: admin.username,
        })
        console.log("Logged in");
    }
        catch (error) {
            console.log("Invalid Credentials");
            res.status(500).json(error);
        }
    }

export const logout = async (req, res) => {
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json("Logged out");
    } catch (error) {
        console.log("Error in logout");
        res.status(500).json(error);
    }
}
