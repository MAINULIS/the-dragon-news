import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    let location = useLocation();
    
    if(loading){
        return <Spinner animation="grow" variant="secondary" />
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;

/*  STEPS
 1. check user is logged in or not
  2. if user is logged in, then allow them to visit the route
  3.Else redirect the user to the login page 
  4. setup the private route
  5. handle loading
 */