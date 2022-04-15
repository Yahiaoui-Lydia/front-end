import React, { memo } from 'react';
import PublicRoutes from './PublicRoutes';
import AdminRoutes from './PrivateRoutes/AdminRoutes';
import B2bRoutes from './PrivateRoutes/B2bRoutes';
import B2cRoutes from './PrivateRoutes/B2cRoutes';
import isLoggedIn from '../utils/isLoggedIn';
function Router() {

    if (isLoggedIn) {   
        if(isLoggedIn ()==='admin'){
            
            return <AdminRoutes />
        }
        if(isLoggedIn() ==='b2b'){
            return  <B2bRoutes />
        }
        if(isLoggedIn() ==='b2c'){
            return  <B2cRoutes />
        }
        return <PublicRoutes />
     }  
    return <PublicRoutes />

}

export default memo(Router);