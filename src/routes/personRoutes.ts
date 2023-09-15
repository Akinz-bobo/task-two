import { Router } from "express";
import{create ,updateUser,deleteUser,getUser,getAll}from '../controllers/personController'

const router = Router();
router.route('/')
.post(create)
.get(getAll)

router.route('/:id')
.delete(deleteUser)
.get(getUser)
.patch(updateUser)

export default router