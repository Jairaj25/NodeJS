import { Router } from 'express';
import * as articleControllers from '../controllers/articleController.js';
import { authenticate } from '../shared/middleware/authenticate.js';
var router = Router();

/* GET users listing. */
router.get('/', articleControllers.getAllArticlesController);
router.post('/public', articleControllers.getAllPublicArticlesController);
router.post('/loginarticles', authenticate, articleControllers.getAllLoggedInArticlesController);

export default router;