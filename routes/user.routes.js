import Router from 'express';
const router = Router();
import { getSignInDetails, signUp } from '../controllers/user.controller.js';

router.get("/signin",getSignInDetails);
router.get("/signup",signUp);

export default router;