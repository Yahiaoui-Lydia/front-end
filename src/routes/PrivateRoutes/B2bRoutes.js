import isLoggedIn from '../../utils/isLoggedIn';
import {Routes,Route,Navigate} from 'react-router-dom'
import B2bhome from '../../pages/clients/b2b/B2bhome';
import React, {  useEffect } from 'react';
import Router from '../Router';
import NavBar from '../../composants/clients/commun/NavBar';
function verify() { 
     if (isLoggedIn()=== 'b2b') {
           return  <Navigate to="/"/>}
     else{ <Navigate to="/" /> 
            return <Router /> } 
}

function B2bRoutes() {
  useEffect(() => { verify() });
  return (
  <>
     <NavBar/>
     <Routes>
        <Route path="/" element={<B2bhome/>}/>
     </Routes></>
  )}
  export default B2bRoutes;