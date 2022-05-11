import React from 'react'
import {Container,Navbar,Nav,NavDropdown} from 'react-bootstrap'
import logout from '../../../utils/logout'
function NavBar() {

    return(
       
        <>
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
      <Nav.Link href="/produits">Produits</Nav.Link>
      <Nav.Link href="/categories">Categories</Nav.Link>
      <Nav.Link  href="/users">Utilisateurs</Nav.Link>
      <Nav.Link  href="/users">Notifications</Nav.Link>
      <NavDropdown title="Compte" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/profil">Profil</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item >
          <button onClick={logout}> logout</button>
         
          </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        
        </>
        
    )
}
export default NavBar