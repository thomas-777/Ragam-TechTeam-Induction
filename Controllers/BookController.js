import BookModel from "../Schemas/BookModel.js";
import AdminModel from "../Schemas/AdminModel.js";
import bcrypt from "bcrypt";
export const addBook = async (req, res) => {
    const { title, author, publishedYear,genre,availableCopies } = req.body;
    try {
        const newBook = new BookModel({
            title,
            author,
            publishedYear,
            genre,
            availableCopies,
        });
        await newBook.save();
        res.status(200).json("Book added successfully");
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getBooks = async (req, res) => {
    try {
        const books = await BookModel.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, publishedYear,genre,availableCopies } = req.body;
    try {
        await BookModel.findByIdAndUpdate(id, {title, author, publishedYear,genre,availableCopies});
        res.status(200).json("Book updated successfully");
    }  
    catch (error) {
        console.log("error in updateBook");
        res.status(500).json(error);
    }
}

export const deleteBook = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const {password} = req.body;
    const AdminId=req.AdminId;

    try {
        const admin=await AdminModel.findById(AdminId);
         const validated = await bcrypt.compare(password, admin.password);
        !validated && res.status(400).json("Invalid Credentials");
        await BookModel.findByIdAndDelete(id);
        res.status(200).json("Book deleted successfully");
    }
    catch (error) {
        res.status(500).json(error);
    }
}