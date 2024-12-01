import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "../../../public/css/style.css";
import { userlogin } from "../../features/handelSlice/tokenSlice";
import img from "/assets/images/cars-driving.gif";

function Login() {

  const dispatch=useDispatch();

  let [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: ""
  })

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      
      const response=await axios.post("http://localhost:3000/auth/user",loginCredentials);

      dispatch(userlogin(response.data.token))
      if(response.data.success){
        alert("Login successful")
      }

    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className="main">
      <div className="container-login ">
        <div className="forms">
          <Form onSubmit={handleSubmit}>
            <h2 className="title">Login</h2>
            <hr />
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter your username" name="username" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
            </Form.Group>

            <div className="login-btn">
              <Button variant="success" type="submit" size="md">
                Login
              </Button>
            </div>
          </Form>
          <div className="register">
            <p>
              Don't have an account?{" "}
              <a href="/register">
                <span>Register</span>
              </a>
            </p>
          </div>
        </div>
        <div className="img-section">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
