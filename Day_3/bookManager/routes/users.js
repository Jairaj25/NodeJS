import { Router } from 'express';
import * as userControllers from '../controllers/usersController.js'
var router = Router();

/* GET users listing. */
router.get('/', userControllers.getAllUsersController);
router.get('/id/:id', userControllers.getUserByIdController);
router.get('/email/:email', userControllers.getUsersByEmailController);
router.get('/login/', userControllers.loginValidationController)
router.post('/register/', userControllers.createNewUserController);
router.delete('/id/:id', userControllers.deleteUserByIdController)

export default router;
