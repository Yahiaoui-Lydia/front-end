import isLoggedIn from '../../utils/isLoggedIn';
import {Routes,Route,Navigate} from 'react-router-dom';
import Router from '../Router'
import React, {  useEffect } from 'react';
import NavBar from '../../composants/admin/NavBar';
import Adminhome from '../../pages/admin/Adminhome';
import Admins from '../../pages/admin/Admins';

import {Container} from 'react-bootstrap'

function verify() { 
        if (isLoggedIn() === 'admin') {  
              return  <Navigate to="/"/> 
        }
        else{ 
                 return <Router/> } 
    }
function AdminRoutes() { 
  useEffect(() => { verify() }); 
  return (
     
        <Container className=" d-flex" fluid >
        <div>
      	{/* <Sidebar/> */}
      </div>

      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column"}}>
        <NavBar/>
        <div >
            
        <Routes>
             <Route path="/" element={<Admins/>}/>
             {/* <Route path="/admin" element={<Admins/>}/> */}
        </Routes>
        </div>
        </div>
        </Container>
       
  )

  } 
export default AdminRoutes;