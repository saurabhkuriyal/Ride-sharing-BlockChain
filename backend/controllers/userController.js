const User = require("../models/User");
const cloudinary = require("cloudinary").v2;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "Blockchain";

async function addUser(req, res) {
  try {

    const user = JSON.parse(req.body.userData);
    //console.log("This is body",user);
    //console.log("This is file",req.file);
    if (req.file) {
      cloudinary.config({
        cloud_name: "deuofkrkf",
        api_key: "952718416357432",
        api_secret: "mG88SEzbZ72mA3JRd8nMpR4bFzQ"
      });

      const result = await cloudinary.uploader.upload(req.file.path);
      //console.log(result.secure_url, 'uploaded.secure_url');
      user.profilePicture = result.secure_url;
    }

    user.password = bcrypt.hashSync(user.password, 10);

    let newUser = new User(user);

    await newUser.save();

    //console.log(newUser);

    res.status(200).json({ success: true,userId:newUser._id });

  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, msg: "Not registered" })
  }
}

async function verifyUser(req, res) {

  try {

    const { username, password } = req.body;

    const user = await User.findOne({ username: username });
    //console.log(user);


    if (user == null) {
      return res.status(400).json({ msg: "not found" });
    }

    const ispasswd = bcrypt.compareSync(password, user.password);

    if (!ispasswd) {
      return res.status(400).json({ msg: "wrong password" })

    }

    //jwt token
    const token = await jwt.sign({ userId: user._id, name: user.name }, secret, {
      expiresIn: '1h',
    });

    res.status(200).json({
      success: true,
      msg: "Welcome user",
      token: token,
      username:user.username,
      userType:user.userType,
      userid:user._id
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error })


  }
}

module.exports = {
  addUser,
  verifyUser
};
