// import Dashboard from "./pages/user/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import SignupForm from "./pages/auth/Register";
import VechileRegister from "./pages/auth/VehicleRegister";
import Landingpage from "./pages/LandingPage";
import PublishRide from "./pages/PublishRide";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/home" element={<Landingpage/>}></Route>
          <Route path="/register" element={<SignupForm></SignupForm>}></Route>
          <Route
            path="/register/vehicleRegistration"
            element={<VechileRegister></VechileRegister>}
          ></Route>
          <Route
            path="/publishride"
            element={<PublishRide></PublishRide>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
