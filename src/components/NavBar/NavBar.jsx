import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Stack from "react-bootstrap/Stack";

import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget.jsx";
import "./NavBar.css";

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to="/">
          <Navbar.Brand>
            <img src="https://felinus.cl/img/1670760312.png" height={60} width={210} alt="logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", width: "18%" }}
            navbarScroll
          >
            <div className="link-container">
              <Link to={`/category/${"camas"}`}>
                <Nav.Item>camas</Nav.Item>
              </Link>
              <Link to={`/category/${"rascadores"}`}>
                <Nav.Item>rascadores</Nav.Item>
              </Link>
              <Link to={`/category/${"juguetes"}`}>
                <Nav.Item>juguetes</Nav.Item>
              </Link>
            </div>
          </Nav>
          <Stack direction="horizontal" gap={0} className="cart-container">
            <div className="ms-auto">
              <Link to={"/cart"}>
                <CartWidget />
              </Link>
            </div>
          </Stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
