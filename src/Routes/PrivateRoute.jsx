import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    // where you wanted went after login
    const location=useLocation()
    console.log(location)
    
    if(loading){
        return <p><span className="loading loading-spinner loading-lg"></span>
</p>
    }
    if(user){
      return  children
    }
    return <Navigate to={'/login'}></Navigate>;
};

export default PrivateRoute;