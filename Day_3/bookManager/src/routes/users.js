import { Router } from 'express';
import * as userControllers from '../controllers/usersController.js';
import { validateUser } from '../shared/middleware/validation/validateUser.js';
var router = Router();

/* GET users listing. */
router.get('/', userControllers.getAllUsersController);
router.get('/id/:id', userControllers.getUserByIdController);
router.get('/login/', userControllers.loginValidationController)
router.post('/register/', userControllers.createNewUserController);
router.delete('/id/:id', userControllers.deleteUserByIdController)

export default router;
