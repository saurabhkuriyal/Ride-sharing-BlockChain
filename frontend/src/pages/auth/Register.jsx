import axios from "axios";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Initial form state
const initialFormData = {
  username: "",
  email: "",
  password: "",
  phone: "",
  street: "",
  city: "",
  state: "",
};

const SignupForm = () => {
  const navigate = useNavigate();
  // State for form data
  const [formData, setFormData] = useState(initialFormData);
  const [selectedOption, setSelectedOption] = useState("");
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [loading, setLoading] = useState(false);
  const [isDriver, setIsDriver] = useState(false);
  const [validated, setValidated] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle role selection
  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    setIsDriver(value === "driver");
  };

  // Handle location updates
  const getLocation = () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude.toString(),
            longitude: position.coords.longitude.toString(),
          });
          setLoading(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          setLoading(false);
        }
      );
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      
      e.stopPropagation();
    }
    setValidated(true);
    e.preventDefault();
    // Get the profile picture file
    const profilePicInput = e.target.querySelector('input[type="file"]');
    const profilePic = profilePicInput.files[0];

    // Compile all form data
    const completeFormData = {
      ...formData,
      userType: selectedOption,
      location: {
        latitude: location.latitude,
        longitude: location.longitude,
      },
    };

    // Log the complete form data to console
    console.log("Form Data:", completeFormData);

    
    // else {               //commented to stop removing the the filled form details
    //   setFormData(initialFormData);
    //   setSelectedOption("");
    //   setLocation({ latitude: "", longitude: "" });
    //   e.target.reset();
    // }

    const newFormData = new FormData();
    newFormData.append('file', profilePic);
    newFormData.append('userData',JSON.stringify(completeFormData) );
    
    axios({
      url: "http://localhost:3000/add/user",
      method: "post",
      data: newFormData,
      headers: {
        'Content-Type': 'multipart/form-data'
        }
    })
      .then((res) => {
        console.log(res);
        alert("registration successful");
        if (isDriver) {
          navigate("/register/vehicleRegistration", {
            state: { userId: res.data.userId },
          });
        }

        navigate("/login")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container className="box">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h2>Signup</h2>
          <hr />

          <Form.Group className="mb-3 mt-4">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Username"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide an unique username
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="name@example.com"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide an email
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="New Password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter password
            </Form.Control.Feedback>
          </Form.Group>

          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder=""
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide an phone number
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>User Role</Form.Label>
            <Form.Select
              value={selectedOption}
              onChange={handleSelectChange}
              required
            >
              <option>Choose...</option>
              <option value="user">User</option>
              <option value="driver">Driver</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Choose any one role
            </Form.Control.Feedback>
          </Form.Group>

          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Street</Form.Label>
                <Form.Control
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleInputChange}
                  placeholder=""
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder=""
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please fill your current city
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              placeholder=""
              required
            />
            <Form.Control.Feedback type="invalid">
              Please fill your current state
            </Form.Control.Feedback>
          </Form.Group>

          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Longitude</Form.Label>
                <Form.Control
                  type="text"
                  value={location.longitude}
                  required
                  onChange={(e) =>
                    setLocation((prev) => ({
                      ...prev,
                      longitude: e.target.value,
                    }))
                  }
                  placeholder="e.g: -77.0364"
                />
                <Form.Control.Feedback type="invalid">
                  Please fill or click on button to autofill
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Latitude</Form.Label>
                <Form.Control
                  type="text"
                  value={location.latitude}
                  required
                  onChange={(e) =>
                    setLocation((prev) => ({
                      ...prev,
                      latitude: e.target.value,
                    }))
                  }
                  placeholder="e.g: 38.8951"
                />
              </Form.Group>
            </Col>
            <Col className="location">
              <Form.Group className="mt-4">
                <Form.Label>
                  <p>
                    or
                    <span className="vertical">
                      <Button
                        variant="dark"
                        className="loc-btn"
                        onClick={getLocation}
                        type="button"
                      >
                        {loading ? "Getting Location..." : "Click to autofill"}
                      </Button>
                    </span>
                  </p>
                </Form.Label>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group>
            <div className="signup-btn">
              {isDriver ? (
                <Button type="submit" variant="dark">
                  Next <FaArrowRight size={14} />
                </Button>
              ) : (
                <Button type="submit" variant="dark">
                  Submit
                </Button>
              )}
              <Button type="reset" variant="dark">
                Reset
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default SignupForm;
