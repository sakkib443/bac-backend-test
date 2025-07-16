import express from 'express';
import {  UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { userValidationSchema } from './user.validation';


const router = express.Router();

router.post('/create-user',validateRequest(userValidationSchema), UserController.createUserController);
router.get('/', UserController.getAllUsersController);
router.get('/:id', UserController.getSingleUserController);
router.patch('/:id', UserController.updateUserController);
router.delete('/:id', UserController.deleteUserController);

export const UserRoutes = router;
