import  express  from "express";
import { login, signup } from '../controllers/auth.js';
import auth from "../middlewares/auth.js";
import { getAllUsers, updateProfile } from '../controllers/Users.js'


const router = express.Router();

// router.post('/signup', () => {})
// router.post('/login', () => {})

router.post('/signup', signup)
router.post('/login', login)

router.get('/getAllUsers', getAllUsers)
router.patch('/update/:id', auth, updateProfile)

export default router