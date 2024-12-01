const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const vehicleController=require("../controllers/vehicle.controller");

router.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

router.post("/add/vehicle",(req,res)=>{
    console.log("Hello from vehicel registration");
    
    vehicleController.addVehicle(req,res);
})

module.exports=router;
