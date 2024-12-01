const express = require("express");

const connect = require("./connection");
const auth=require("./routes/user");
const vehicle=require("./routes/vehicle.route");
const cors=require("cors");


const app = express();
connect();

app.use(cors());
//Middlewares
app.use(auth);
app.use(vehicle);

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("sever is listening on port 3000");
  }
});
