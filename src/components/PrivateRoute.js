import React from 'react'
import { useAuth } from './auth';
import { Navigate } from 'react-router-dom';
export default function PrivateRoute({children}) {
    const { isLogin } = useAuth();
    if(!isLogin()){
       
        return <Navigate to='/loginPage'/>
    }
    return (
        children
    )
}
