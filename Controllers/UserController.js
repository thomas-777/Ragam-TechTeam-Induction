import UserModel from "../Schemas/UserModel.js";
import AdminModel from "../Schemas/AdminModel.js";
import bcrypt from "bcrypt";
export const addUser = async (req, res) => {
    const { name, email, membershipType, registeredDate } = req.body;
    try {
        const newUser = new UserModel({
            name,
            email,
            membershipType,
            registeredDate,
        });
        await newUser.save();
        res.status(200).json("User added successfully");
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, membershipType, registeredDate } = req.body;
    try {
        await UserModel.findByIdAndUpdate(id, {
            name,
            email,
            membershipType,
            registeredDate,
        });
        res.status(200).json("User updated successfully");
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const {password} = req.body;
    const AdminId=req.AdminId;

    try {
        const admin=await AdminModel.findById(AdminId);
         const validated = await bcrypt.compare(password, admin.password);
        !validated && res.status(400).json("Invalid Credentials");
        await UserModel.findByIdAndDelete(id);
        res.status(200).json("User deleted successfully");
    }
    catch (error) {
        res.status(500).json(error);
    }
}