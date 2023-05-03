import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Avatar } from '@mui/material';
import { Menu, Home, Assignment, AddCircleOutline, Person, Code, Login } from '@mui/icons-material';
import Logo from '../../images/logo.jpg';

const NavbarDrawer = () => {
    const [open, setOpen] = useState(false);

    const handleToggleDrawer = () => {
        setOpen(!open);
    };

    const auth = JSON.parse(localStorage.getItem('user'));
    const username = auth && auth.username;
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    }

    const drawerItems = [
        { text: 'Home', link: '/', icon: <Home /> },
        { text: 'All Projects', link: '/allprojects', icon: <Assignment /> },
        { text: 'Add Projects', link: '/addprojects', icon: <AddCircleOutline /> },
        { text: 'My Projects', link: '/updateproject', icon: <Code /> },
        { text: 'Profile', link: `/user/${username}`, icon: <Person /> },
        { text: 'Logout', link: '/login', icon: <Login />, onClick: logout }
    ];

    const styles = {
        drawerIcon: {
            position: 'fixed',
            top: 5,
            left: 15,
            zIndex: 1100,
            // color:'white'
        },
       avatar:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 ',
        marginLeft:'30px',
        marginBottom:'40px',
        backgroundColor: 'black',
        top: '20px',
        left: '20px',
        width: '80px',
        height: '80px',
        }
    };

    return (
        <>
            <Box sx={styles.drawerIcon}>
                <IconButton
                    onClick={handleToggleDrawer}
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                
                    }}
                >
                    <Menu />
                </IconButton>
            </Box>


            <Drawer anchor="left" sx={{border:'1px solid green', width:'100px'}} open={open} onClose={handleToggleDrawer}>
            <Avatar 
            sx={
                styles.avatar
            } 
            src={Logo} alt="Project Logo" 
            />

                <List>
                    {drawerItems.map((item, index) => (
                        <ListItem button key={index} component={Link} to={item.link} onClick={item.onClick}>
                            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default NavbarDrawer;
