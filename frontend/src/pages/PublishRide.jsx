import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import Navbar from "../components/common/Navbar";
import carimg1 from "/assets/images/car-1.png";

export default function PublishRide() {
  return (
    <>
      <div className="publish-ride-body">
        <Navbar />
        <div className="ride">
          <h2>Become a driver and share rides</h2>
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
              <img src={carimg1} alt="" />
            </div>
          </div>

          <div className="publish-ride-content">
            <Container>
              <Row>
                <Col>
                  <div className="card-title">
                    <h4>H</h4>
                  </div>
                  <Card>
                    <CardBody>
                      {" "}
                      This is me Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Error, ut quo minima iste voluptates
                      ipsum corrupti delectus aspernatur! Pariatur libero
                      accusamus distinctio neque repudiandae? Veritatis
                      perspiciatis commodi ducimus iste reiciendis!
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <div className="card-title">
                    <h4>H</h4>
                  </div>
                  <Card>
                    <CardBody>
                      {" "}
                      This is me Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Error, ut quo minima iste voluptates
                      ipsum corrupti delectus aspernatur! Pariatur libero
                      accusamus distinctio neque repudiandae? Veritatis
                      perspiciatis commodi ducimus iste reiciendis!
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <div className="card-title">
                    <h4>H</h4>
                  </div>
                  <Card>
                    <CardBody>
                      This is me Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Error, ut quo minima iste voluptates
                      ipsum corrupti delectus aspernatur! Pariatur libero
                      accusamus distinctio neque repudiandae? Veritatis
                      perspiciatis commodi ducimus iste reiciendis!
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <hr style={{ marginTop: "4rem" }} />
      </div>
    </>
  );
}
