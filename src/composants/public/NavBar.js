import React from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap'

function NavBar() {
    return(
       
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container  >
  <Navbar.Brand href="/" style={{ width: '15%',textAlign:'center',fontFamily:'serif'}}>
            <div>Pro Vision</div>
            <div>Security Systems</div>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav fill justify activeKey="/" style={{ width: '100%'}}>
      <Nav.Link href="/">Acceuil</Nav.Link>
      <Nav.Link href="/login">login</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
    
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        
        </div>
        
    )
}
export default NavBar