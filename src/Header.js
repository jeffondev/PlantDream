import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import tree from "./img/나무무무무.png"
import styled from 'styled-components';

const Avatar = styled.img`
  border-radius: 20px;
  width: 40px;
  height: 40px;
`;

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Plant a Dream</Navbar.Brand>
        <Navbar aria-controls="responsive-navbar-nav" />
        <Navbar id="responsive-navbar-nav">
          {/* <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav> */}
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}

          {/* <Nav className="justify-content-end">
            <Nav.Link href="#deets" ><Avatar src={tree} /></Nav.Link>
          </Nav> */}

          <Navbar.Toggle />
            <Navbar className="justify-content-end">
                <Avatar src={tree} />
            </Navbar>
         </Navbar>
      </Container>
    </Navbar>
  );
}

export default Header;