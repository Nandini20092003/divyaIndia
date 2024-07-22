import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router()

//update User
router.put("/:id", verifyUser, updateUser);

//delete User
router.delete("/:id", verifyUser, deleteUser);

//getSingle User
router.get("/:id", verifyUser, getSingleUser);

//getAll User
router.get("/", verifyAdmin, getAllUser);

export default router;