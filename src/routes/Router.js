import React, { memo } from 'react';
import PublicRoutes from './PublicRoutes';
import AdminRoutes from './PrivateRoutes/AdminRoutes';
import B2bRoutes from './PrivateRoutes/B2bRoutes';
import B2cRoutes from './PrivateRoutes/B2cRoutes';
import isLoggedIn from '../utils/isLoggedIn';

function Router() {
   
    if (isLoggedIn) {
          console.log('router')
        if(isLoggedIn ()==='admin'){
            
            return(<AdminRoutes />) 
        }
        if(isLoggedIn() ==='B2B'){
            return  (<B2bRoutes />)
        }
        if(isLoggedIn() ==='B2C'){
            return (
               
            <B2cRoutes/>
            ) 
        }
        return <PublicRoutes />
     }  
    return <PublicRoutes />

}

export default memo(Router);