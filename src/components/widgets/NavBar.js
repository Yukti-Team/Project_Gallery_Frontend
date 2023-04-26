import { Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PgLogo from '../../images/pglogo.jpg';

//route: its the page that we want to show on a link
//link: the url or endpoint on which we want to render our page is a link 



const NavBar = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    }

    return (

        <div className="navbar-ul"> 

            <img className="logo" src={PgLogo} alt="logo" style={{ marginTop: '1vh' }} />


            {
                auth ?
                    <ul>
                        <li><Link to="/">Home</Link> </li>
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