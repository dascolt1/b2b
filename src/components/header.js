import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "gatsby"
import "../styles/index.css"

const Header = () => {
  return (
    <header>
      <Navbar bg="light" variant="light">
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
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
