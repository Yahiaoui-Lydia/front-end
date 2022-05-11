import React from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap'
import logout from '../../utils/logout'

function NavBar() {
  // const logout=()=>{
  
  //   localStorage.setItem('csrfToken','')
  //   localStorage.setItem('role','')
  //   window.location.href='/'
   
  // }
    return(
       
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navbarAdmin' style={{height:'20px'}}>
  <Container  >
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav fill justify activeKey="/" style={{ width: '100%',height:'20px'}}>
      <Nav.Link  href="/users"style={{ height:'100%',fontSize:'15px',padding:'0px'}} className='bi bi-bell-fill nav-icon' aria-label='Notification' ></Nav.Link>
      <Nav.Link  href="/users" style={{ height:'100%',fontSize:'15px',padding:'0px'}} className='bi bi-person-circle nav-icon' aria-label='Profil' ></Nav.Link>
      <Nav.Link onClick={logout} style={{ height:'100%',fontSize:'15px',padding:'0px'}} className='bi bi-box-arrow-right nav-icon' aria-label='Se deconnecter'></Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        
        </>
        
    )
}
export default NavBar