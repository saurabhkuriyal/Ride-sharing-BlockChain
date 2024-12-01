const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const userController = require("../controllers/userController");
const multer=require("multer");
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

const upload=multer({
  storage:multer.diskStorage({}),
  limits:{fileSize:10*1025*1024},
});
router.post("/add/user",upload.single('file'),(req, res) => {
  console.log("add user here..");
  userController.addUser(req, res);
});

router.post("/auth/user",(req,res)=>{
  console.log("hello from login route");
  userController.verifyUser(req,res);
  
});



module.exports=router;