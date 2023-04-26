import React from "react";
import {Navigate, Outlet} from 'react-router-dom'

//outlet handles the component that we pass to this PrivateComp wrapper as props
const PrivateComp=()=>{
    const auth= localStorage.getItem('user');
    return auth ?<Outlet />:<Navigate to ="/signup" />
}
export default PrivateComp; 