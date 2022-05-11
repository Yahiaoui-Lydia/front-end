import React from 'react'
import {Container,Navbar,Nav,NavDropdown} from 'react-bootstrap'

function NavBar() {
    return(
       
        <div>
        <Navbar collapseOnSelect expand="md" >
  <Container  >
  <Navbar.Brand href="/">
      <div className='bi bi-shield-lock-fill' style={{'fontSize':'35px'}}></div> 
      <div  style={{'fontSize':'15px'}} >Pro Vision <br/> Security Systems </div>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav fill justify activeKey={window.location.pathname}>
      <Nav.Link href="/" className='bi bi-house-fill'> Acceuil</Nav.Link>
      <Nav.Link  href="/produits" className='bi bi-shop'> Produits</Nav.Link>
      <Nav.Link href="/services" className='bi bi-wrench-adjustable-circle'> Services</Nav.Link>
      <Nav.Link href="/login" className='bi bi-person-circle'> Se connecter</Nav.Link>
      <NavDropdown title="S'inscrire" id="collasible-nav-dropdown">
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