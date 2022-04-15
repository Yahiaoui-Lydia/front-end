import isLoggedIn from '../../utils/isLoggedIn';
import {Routes,Route,Navigate} from 'react-router-dom'
import React, {  useEffect } from 'react';
import Router from '../Router';
import NavBar from '../../composants/clients/commun/NavBar';
import B2chome from '../../pages/clients/b2c/B2chome';
function verify() { 
     if (isLoggedIn()=== 'b2c') {
                return  <Navigate to="/"/>}
     else{ <Navigate to="/"/>
                return <Router /> } 
}

function B2cRoutes() {
  useEffect(() => { verify() });
  return (
  <>
     <NavBar/>
     <Routes>
        <Route path="/" element={<B2chome/>}/>
     </Routes></>
  )}
  export default B2cRoutes;