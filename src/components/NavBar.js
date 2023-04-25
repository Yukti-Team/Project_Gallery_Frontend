import { Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import image from '../images/logo.jpg';


const NavBar = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    }

    return (
        <div>
            <img className="logo" src={image} alt="logo" style={{ marginTop: '10px' }} />

            {
                auth ?
                    <ul className="navbar-ul">
                        <li><Link to="/">Home Page</Link> </li>
                        <li><Link to="/allprojects">All Projects</Link> </li>
                        <li><Link to="/addprojects">Add Projects</Link> </li>
                        <li><Link to="/updateproject">Update Projects</Link> </li>
                        <li><Link to="/profile">Profile</Link> </li>
                        <li><Link onClick={logout} to="/signup">Logout</Link> </li>
                    </ul>
                    :
                    <ul className="navbar-ul" style={{ textAlign: "justify" }}>
                        <li>
                            <Typography variant="subtitle1">
                                <Link to="/">Project Gallery</Link>
                            </Typography>
                        </li>
                        <li><Link to="/signup">Sign Up</Link>  </li>
                        <li><Link to="/login">Login</Link> </li>
                    </ul>
            }

        </div>
    )
}

export default NavBar;