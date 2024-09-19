import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    // where you wanted gone after login using location hook and navigate state location pathname
    const location=useLocation()
    console.log(location)

    if(loading){
        return <p><span className="loading loading-spinner loading-lg"></span>
</p>
    }
    if(user){
      return  children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default PrivateRoute;