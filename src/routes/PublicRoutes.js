import React, {  useEffect } from 'react';
import NavBar from '../composants/public/NavBar'
import {Routes,Route,Navigate} from 'react-router-dom';
import Home from '../pages/public/Home';
import isLoggedIn from '../utils/isLoggedIn';
import Router from './Router';
import Login from '../pages/public/Login';
import InscriptionB2B from '../pages/public/InscriptionB2B';
function verify() { 
    if (isLoggedIn()==='') {  
          return  <Navigate to="/"/> 
    }
    else{  <Navigate to="/"/> 
             return <Router/> } 
}
function PublicRoutes() {
    useEffect(() => { verify() }); 
   
    return (
      <>
        <NavBar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/registerB2C" element={<RegisterB2C/>}/> */}
        <Route path="/registerB2B" element={<InscriptionB2B/>}/>
        {/* <Route path="/forgot-password" element={<ForgotPassword/>}/> */}
        </Routes>
   </>
    )
}

export default PublicRoutes