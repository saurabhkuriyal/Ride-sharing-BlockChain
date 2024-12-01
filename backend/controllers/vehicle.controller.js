const Vehicle=require("../models/Vehicle");

async function addVehicle(req,res) {

    try {

        //console.log(req.body);
        const newVehicle=new Vehicle(req.body);

        await newVehicle.save();

        const userId=newVehicle.userId;

        const findVehicle=await Vehicle.findOne({userId:userId}).populate("userId")

        console.log(findVehicle);
        
        
        res.status(200).json({success:true,data:findVehicle});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,error})
        
    }
    
}

module.exports={
    addVehicle,
}