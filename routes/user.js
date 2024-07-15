import express from 'express';
import {  changePassword, getMyProfile, logOut, login, signup, updatePic, updateProfile } from '../controllers/user.js';
import { isAuthenticated } from '../middlewares/auth.js';
import { singleUpload } from '../middlewares/multer.js';

const router = express.Router();


router.route("/login").post(login)
router.route("/new").post( singleUpload , signup)

router.route("/me").get(isAuthenticated ,getMyProfile)
router.get("/logout", isAuthenticated, logOut);

// Updating Routes

router.put("/updateprofile",isAuthenticated, updateProfile)
router.put("/changepassword", isAuthenticated, changePassword);
router.put("/updatepic", isAuthenticated, singleUpload, updatePic);

 export default router;