// import Dashboard from "./pages/user/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/common/ProtectedRoute";
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
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<SignupForm></SignupForm>}></Route>
            <Route
              path="/register/vehicleRegistration"
              element={<VechileRegister></VechileRegister>}
            ></Route>
            <Route element={<ProtectedRoute/>}>
            
            <Route path="/" element={<Landingpage />}></Route>
            
            
            <Route
              path="/publishride"
              element={<PublishRide></PublishRide>}
            ></Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
