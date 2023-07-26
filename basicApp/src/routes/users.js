import { Router } from 'express';
import * as UserControllers from '../controllers/userController.js';
import { authenticate } from '../shared/middleware/authenticate.js'
import { validateUser } from '../shared/middleware/validation/validateUser.js';
var router = Router();

/* GET users listing. */
router.get('/', authenticate, UserControllers.getAllUsersController);
router.post('/login', UserControllers.loginValidationController);
router.post('/register', validateUser, UserControllers.registerUserController);
router.post('/resetpassword', UserControllers.resetPasswordController);

export default router;
