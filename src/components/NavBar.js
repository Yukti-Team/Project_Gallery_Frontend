import React from "react";
import { Link, useNavigate } from "react-router-dom";
import image from '../images/logo.png';

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
        <div>
            <img className="logo" src={image} alt="logo"/>            
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
                    <ul className="navbar-ul" style={{textAlign: "justify"}}>
                        <li><Link to="/signup">Sign Up</Link>  </li>
                        <li><Link to="/login">Login</Link> </li>
                    </ul>
            }

        </div>
    )
}

export default NavBar;