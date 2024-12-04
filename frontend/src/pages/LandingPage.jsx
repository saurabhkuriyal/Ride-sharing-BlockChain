import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { FaCoins, FaLocationArrow } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../components/common/Footer";
import Navbars from "../components/common/Navbar";
import carimg2 from "/assets/images/car-2.png";
import pbimg2 from "/assets/images/publishrideimg2.jpg";
import img2 from "/assets/images/ridehared-2.jpg";
import img1 from "/assets/images/rideshared-1.jpg";
import img3 from "/assets/images/rideshared-3.jpg";
import scamimg3 from "/assets/images/scam-1.1.png";
import MapboxSearchBox from "../components/MapboxSearchbox";

export default function Landingpage() {
  const navigate = useNavigate();
  function handlepublishridebtn() {
    navigate("/publishride");
  }

  const handleLocationSelect = (location) => {
    console.log(location);
  };
  return (
    <>
      <Navbars />
      <Container fluid>
        <Carousel style={{ height: "500px" }}>
          <Carousel.Item style={{ height: "500px" }}>
            <img src={img1} className="d-block w-100 " />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "500px" }}>
            <img src={img2} className="d-block w-100 " />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "500px" }}>
            <img src={img3} className="d-block w-100 " />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Form
          style={{
            marginTop: "520px",
            position: "absolute",
            top: "20px",
            left: "50px",
            zIndex: "1",
            width: "94%",
          }}
        >
          <Row>
            <MapboxSearchBox
              mapboxToken="pk.eyJ1IjoidmFzdTAwMDk4IiwiYSI6ImNtNDN1ZzZhcDBmYXMyanE1OGp2cWsxbHQifQ.MnMXzfSqJNMhAcil2wpNyA"
              onLocationSelect={handleLocationSelect}
            />
            <MapboxSearchBox
              mapboxToken="pk.eyJ1IjoidmFzdTAwMDk4IiwiYSI6ImNtNDN1ZzZhcDBmYXMyanE1OGp2cWsxbHQifQ.MnMXzfSqJNMhAcil2wpNyA"
              onLocationSelect={handleLocationSelect}
            />
            <Col xs={2}>
              <Form.Control id="" type="date" placeholder="Going To" />
            </Col>
            {/* <Col xs={2}>
              <div className="form-feild">
                <button className="minus-btn"</button>

                <span className="">Passengers</span>

                <button className="plus-btn"></button>
              </div>
            </Col> */}
            <Col className="ml-3">
              <Button variant="dark">Search</Button>
            </Col>
          </Row>
        </Form>
      </Container>

      <div className="car">
        <img src={carimg2} alt="" className="car-image" />
      </div>
      <div className="line"></div>

      <Container className="mt-5 container">
        <Row>
          <Col>
            <Card style={{ width: "18rem", height: "12rem" }} cl>
              <FaCoins />
              <Card.Body>
                <Card.Title>Your pick of rides at low prices</Card.Title>
                <Card.Text>
                  No matter where you’re going, by bus or carpool, find the
                  perfect ride from our wide range of destinations and routes at
                  low prices.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem", height: "12rem" }} cl>
              {/* <FaAddressCard /> */}
              <Card.Body>
                <Card.Title>Trust who you travel with</Card.Title>
                <Card.Text>
                  We take the time to get to know each of our members and bus
                  partners. We check reviews, profiles and IDs, so you know who
                  you’re travelling with and can book your ride at ease on our
                  secure platform.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem", height: "12rem" }} cl>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Scroll, click, tap and go!</Card.Title>
                <Card.Text>
                  Booking a ride has never been easier! Thanks to our simple app
                  powered by great technology, you can book a ride close to you
                  in just minutes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <div className="banner">
        <div className="banner-img">
          <img src={scamimg3} alt="" />
        </div>
        <div className="banner-content">
          <h2>Help us keep you safe from scams</h2>
          <p>
            At rideshare, we're working hard to make our platform as secure as
            it can be. But when scams do happen, we want you to know exactly how
            to avoid and report them. Follow our tips to help us keep you safe.
          </p>
          <div>
            <Button
              style={{
                backgroundColor: "whitesmoke",
                color: "black",
                fontWeight: "500",
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="car">
        <img src={carimg2} alt="" className="car-image" />
      </div>
      <div className="line"></div>

      <Container>
        <div className="req-ride">
          <div className="req-ride-content">
            <h2>Driving in Your Car soon</h2>
            <p>Let's make this your least expensive journey ever.</p>
            <div>
              <Button variant="dark" onClick={handlepublishridebtn}>
                Publish Ride
              </Button>
            </div>
          </div>
          <div className="req-ride-img">
            <img src={pbimg2} alt="" />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
