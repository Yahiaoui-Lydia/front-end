import React, {  useEffect } from 'react';
import NavBar from '../composants/public/NavBar'
import {Routes,Route,Navigate} from 'react-router-dom';
import Home from '../pages/public/Home';
import isLoggedIn from '../utils/isLoggedIn';
import Router from './Router';

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
        </Routes>
   </>
    )
}

export default PublicRoutes