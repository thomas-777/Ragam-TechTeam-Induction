import express from 'express';  

import protectRoute from '../Middleware/protectRoute.js';
import { addUser, deleteUser, getUsers, updateUser } from '../Controllers/UserController.js';

const router = express.Router();

router.post('/add',protectRoute, addUser);
router.get('/all', protectRoute,getUsers);
router.put('/update/:id', protectRoute,updateUser);
router.delete('/delete/:id',protectRoute, deleteUser);

export default router;