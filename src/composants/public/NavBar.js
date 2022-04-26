import React from 'react'
import {Container,Navbar,Nav,NavDropdown} from 'react-bootstrap'

function NavBar() {
    return(
       
        <div>
        <Navbar collapseOnSelect expand="md" >
  <Container  >
  <Navbar.Brand href="/">
            <div>Pro Vision</div>
            <div>Security Systems</div>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav fill justify activeKey={window.location.pathname}>
      <Nav.Link href="/">Acceuil</Nav.Link>
      <Nav.Link href="/login">login</Nav.Link>
      <NavDropdown title="Register" id="collasible-nav-dropdown" href='*'>
        <NavDropdown.Item href="/registerB2B">Creer un compte B2B</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/registerB2C">Creer un compte B2C</NavDropdown.Item>
      </NavDropdown>
    
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
        
    )
}
export default NavBar