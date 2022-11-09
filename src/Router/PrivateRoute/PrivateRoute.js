import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContex);
    const location = useLocation()

    if(loading){
        return <h2 className='text-3xl'>Loading ...</h2>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;