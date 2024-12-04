import { Container, Nav, Navbar } from "react-bootstrap";

export default function Navbars() {
    return (
        <div>
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="dark"
                // style={{ backgroundColor: "black", color: "white" }}
                data-bs-theme="dark"
            >
                <Container>
                    <Navbar.Brand href="/home">RideShare</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Nav.Link href="/publishride">Publish Ride</Nav.Link>
                            <Nav.Link eventKey={2} href="/">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
