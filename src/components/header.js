import React from "react"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { Link } from "gatsby"
import "../styles/index.css"

const Header = () => {
  return (
    <header>
      <Navbar className="navbar-shadow" bg="light" variant="light">
        <Container>
          <Navbar.Brand>B2B</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link>
              <Link activeClassName="active-class" className="links" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClassName="active-class"
                className="links"
                to="/services"
              >
                Services
              </Link>
            </Nav.Link>
            <Link className="contact-link" to="#contact-us">
              <Button className="contact-btn">Contact Us</Button>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
