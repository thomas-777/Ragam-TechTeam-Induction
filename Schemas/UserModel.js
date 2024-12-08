import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    membershipType: {
        type: String,
        required: true,
        enum: ["Regular", "Premium"],
    },
    registeredDate: {
        type: String,
        required: true,
    }
});

export default mongoose.model("UserLibrary", UserSchema);