import express from 'express';  

import { addBook, deleteBook, getBooks, updateBook } from '../Controllers/BookController.js';
import protectRoute from '../Middleware/protectRoute.js';

const router = express.Router();

router.post('/add',protectRoute, addBook);
router.get('/all', protectRoute,getBooks);
router.put('/update/:id', protectRoute,updateBook);
router.delete('/delete/:id',protectRoute, deleteBook);

export default router;