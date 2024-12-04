import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Carousel,
} from "react-bootstrap";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import carimg1 from "/assets/images/car-1.png";
import bannerimg from "/assets/images/publishride-banner-2.jpg";
import img2 from "/assets/images/ridehared-2.jpg";
import img1 from "/assets/images/rideshared-1.jpg";
import img3 from "/assets/images/rideshared-3.jpg";
import formimg from "/assets/images/formride-img-1.avif";
import formimg2 from "/assets/images/fomride-img-2.avif";

export default function PublishRide() {
  return (
    <>
      <div className="publish-ride-body">
        <Navbar />
        <div className="ride">
          <h1>
            Become a Rideshare driver and save on travel costs by sharing your
            ride with passengers.
          </h1>

          <div className="publish-ride">
            <div className="ride-details">
              <Form className="ride-details-form">
                <InputGroup className="mb-2 mt-4">
                  <InputGroup.Text>@</InputGroup.Text>
                  <Form.Control id="" placeholder="Leaving From" />
                </InputGroup>
                <InputGroup className="mb-2 mt-4">
                  <InputGroup.Text>@</InputGroup.Text>
                  <Form.Control id="" placeholder="Going To" />
                </InputGroup>
                <InputGroup className="mb-2 mt-4">
                  <Form.Control id="" type="date" placeholder="Going To" />
                </InputGroup>
                <InputGroup className="mb-2 mt-4">
                  <div className="form-date">
                    <button className="minus-btn">{/* <FiMinus /> */}</button>

                    <span className="">Passengers</span>

                    <button className="plus-btn">{/* <MdAdd /> */}</button>
                  </div>
                </InputGroup>
              </Form>
              <div className="publish-ride-btn">
                <Button variant="primary">Publish a Ride</Button>
              </div>
            </div>

            <div className="ride-img">
              <img src={formimg2} alt="" />
            </div>
          </div>
        </div>
        <div className="publish-ride-content">
          <Container>
            <Row>
              <Col
                style={{
                  // backgroundColor: "#EDEDED",
                  marginRight: "2px",
                  borderRadius: "8px",
                }}
              >
                <div className="card-title">
                  <h5>Drive</h5>
                </div>
                <Card style={{ marginTop: "1rem" }}>
                  <CardBody
                    style={
                      {
                        // backgroundColor: "#EDEDED",
                      }
                    }
                  >
                    Keep your plans! Hit the road just as you anticipated and
                    make the most of your vehicle’s empty seats.
                  </CardBody>
                </Card>
              </Col>
              <Col
                style={{
                  // backgroundColor: "#EDEDED",
                  marginRight: "2px",
                  borderRadius: "8px",
                }}
              >
                <div className="card-title">
                  <h5>Share</h5>
                </div>
                <Card style={{ marginTop: "1rem" }}>
                  <CardBody style={{}}>
                    Travel with good company. Share a memorable ride with
                    travellers from all walks of life.
                  </CardBody>
                </Card>
              </Col>
              <Col style={{}}>
                <div className="card-title">
                  <h5>Save</h5>
                </div>
                <Card style={{ marginTop: "1rem" }}>
                  <CardBody style={{}}>
                    Tolls, petrol, electricity… Easily divvy up all the costs
                    with other passengers.
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <hr style={{ marginTop: "13rem", position: "relative" }} />
        <div className="achievments">
          <div className="achievments-content">
            <Row>
              <Col
                style={{
                  marginLeft: "0rem",
                  textAlign: "center",
                  padding: "0px",
                }}
              >
                <h3>Joined 21 million </h3>
                <p>driver already</p>
              </Col>
              <Col
                style={{
                  marginLeft: "1.5rem",
                  textAlign: "center",
                  padding: "0px",
                }}
              >
                <h3>More than 100 million</h3>
                <p>members worldwide</p>
              </Col>
              <Col
                style={{
                  marginRight: "1.5rem",
                  textAlign: "center",
                  padding: "0px",
                }}
              >
                <h3>Over 40 million</h3>
                <p> rideshare every year </p>
              </Col>
            </Row>
          </div>
        </div>

        <div className="publishride-banner">
          <div className="pb-banner-img-section">
            <img src={bannerimg} alt="" />
          </div>
          <div className="carousel">
            <Carousel style={{ height: "222px" }}>
              <Carousel.Item style={{ height: "212px" }}>
                <img src={img1} className="d-block w-100 " />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "212px" }}>
                <img src={img2} className="d-block w-100 " />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "212px" }}>
                <img src={img3} className="d-block w-100 " />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div className="publishride-info">
          <div className="info-container">
            <h1>We're here every step of the way</h1>
            <Row className="mt-5">
              <Col>
                <Card style={{ border: "0px solid black" }}>
                  <Card.Body style={{ backgroundColor: "#EDEDED" }}>
                    <Card.Title>At your service 24/7</Card.Title>
                    <Card.Text>
                      Our team is at your disposal to answer any questions by
                      email or social media. You can also have a live chat
                      directly with experienced members.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ border: "0px solid black" }}>
                  <Card.Body style={{ backgroundColor: "#EDEDED" }}>
                    <Card.Title>Ridehare at your side</Card.Title>
                    <Card.Text>
                      For just &#8377;177, benefit from the reimbursement of up
                      to &#8377;265,500 of your excess when you publish a ride
                      as a driver on Ridehare.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ border: "0px solid black" }}>
                  <Card.Body style={{ backgroundColor: "#EDEDED" }}>
                    <Card.Title>100% secure information</Card.Title>
                    <Card.Text>
                      Our team is dedicated to the protection of your data,
                      which is always 100% confidential thanks to monitoring
                      tools, secure navigation and encrypted data.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <div className="publishride-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
