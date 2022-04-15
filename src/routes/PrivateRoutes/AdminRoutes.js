import isLoggedIn from '../../utils/isLoggedIn';
import {Routes,Route,Navigate} from 'react-router-dom';
import Router from '../Router'
import React, {  useEffect } from 'react';
import NavBar from '../../composants/admin/NavBar';
import Adminhome from '../../pages/admin/Adminhome';

function verify() { 
        if (isLoggedIn() === 'admin') {  
              return  <Navigate to="/"/> 
        }
        else{  <Navigate to="/"/> 
                 return <Router/> } 
    }
function AdminRoutes() { 
  useEffect(() => { verify() }); 
  return (
        <>
        <NavBar/>
        <Routes>
             <Route path="/" element={<Adminhome/>}/>
        </Routes>
        </>
  )

  } 
export default AdminRoutes;