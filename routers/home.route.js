const express = require("express");
const router = express.Router();
const controller = require("../controllers/home.controller");
const multer = require("multer");

const upload = multer();

const uploadMiddleware = require("../middlewares/upload.middleware");
const authMiddleware = require("../middlewares/auth.middleware");

router.use(authMiddleware.userAuthentication);

router.get("/", controller.index);

router.get("/upload", controller.upload);

router.post(
  "/upload",
  upload.single("file"),
  uploadMiddleware,
  controller.uploadPost
);

module.exports = router;
