import axios from "axios";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useLocation, useNavigate } from 'react-router-dom';

const VehicleRegister = () => {
    const location = useLocation();
    const { userId } = location.state;
    const navigate = useNavigate();

    // Now you can use the userData object to populate the form fields or perform other actions
    //console.log("This si userId",userId);

  const [validated, setValidated] = useState(false);

  const vehicleModel = ["SUV", "Sedan", "Crossover", "Minivan", "Sports"];

  const [formData, setFormData] = useState({
    vehicleType: "",
    vehicleModel: "",
    vehicleYear: "",
    vehicleLicensePlate: "",
    driverName: "",
    driverLicenseNumber: "",
    driverLicenseExpiration: "",
    driverAddress: "",
    driverPhoneNumber: "",
  });

  const handleReset = () => {
    setFormData({
      vehicleType: "",
      vehicleModel: "",
      vehicleYear: "",
      vehicleLicensePlate: "",
      driverName: "",
      driverLicenseNumber: "",
      driverLicenseExpiration: "",
      driverAddress: "",
      driverPhoneNumber: "",
    });
    setValidated(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const form = e.currentTarget;

    setValidated(true);
    if (form.checkValidity() === false) {
      return;
    }
    //console.log(formData);
    formData.userId=userId;
    try {

      const response=await axios.post("http://localhost:3000/add/vehicle",formData);

      console.log(response.data.data);
      
      if(response.data.success){
        navigate("/");
      }
      
      
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <Container className="p-4">
      <Form onSubmit={handleSubmit} noValidate validated={validated}>
        <h2 className="text-2xl font-bold mb-4">Vehicle Registration</h2>
        <hr className="mb-6" />

        <Row className="mb-4">
          <Col>
            <Form.Group>
              <Form.Label>Vehicle Type</Form.Label>
              <Form.Select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleInputChange}
                required
              >
                <option value="">Choose...</option>
                <option value="personal">Personal</option>
                <option value="commercial">Commercial</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Vehicle Model</Form.Label>
              <Form.Select
                name="vehicleModel"
                value={formData.vehicleModel}
                onChange={handleInputChange}
                required
              >
                <option value="">Choose...</option>
                {vehicleModel.map((option) => (
                  <option key={option} value={option.toLowerCase()}>
                    {option}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-4">
          <Form.Label>Vehicle Year</Form.Label>
          <Form.Control
            type="number"
            name="vehicleYear"
            value={formData.vehicleYear}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Vehicle License Number</Form.Label>
          <Form.Control
            type="text"
            name="vehicleLicensePlate"
            value={formData.vehicleLicensePlate}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <h2 className="text-2xl font-bold mt-8 mb-4">Driver Details</h2>
        <hr className="mb-6" />

        <Row className="mb-4">
          <Col>
            <Form.Group>
              <Form.Label>Driver Name</Form.Label>
              <Form.Control
                type="text"
                name="driverName"
                value={formData.driverName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Driver License Number</Form.Label>
              <Form.Control
                type="text"
                name="driverLicenseNumber"
                value={formData.driverLicenseNumber}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <Form.Group>
              <Form.Label>Driver License Expiration</Form.Label>
              <Form.Control
                type="date"
                name="driverLicenseExpiration"
                value={formData.driverLicenseExpiration}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Driver Address</Form.Label>
              <Form.Control
                type="text"
                name="driverAddress"
                value={formData.driverAddress}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-6">
          <Form.Label>Driver Phone Number</Form.Label>
          <Form.Control
            type="tel"
            name="driverPhoneNumber"
            value={formData.driverPhoneNumber}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <div className="flex gap-4 justify-end">
          <Button variant="outline" type="button" onClick={handleReset}>
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </Container>
  );
};

export default VehicleRegister;
