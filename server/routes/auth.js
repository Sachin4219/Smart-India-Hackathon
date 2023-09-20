import express from "express";
import { getUsers, login, register } from "../controllers/auth.js";
// import multer from "multer";

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/assets");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage });

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/all", getUsers);
export default router;
