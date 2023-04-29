import React, { useEffect, useState } from "react"
import { Grid, Avatar, Box, Typography, Button, Stack } from '@mui/material';
import { AccountCircle, DateRange, Edit, Email, GitHub, LinkedIn, Numbers, People, Person, Phone, School, Share } from '@mui/icons-material';
import { Link, useParams } from "react-router-dom";
import CodeIcon from '@mui/icons-material/Code';
import DisplayTags from "../widgets/DisplayTags";
import ApiURL from "../GetUrl";


const styles = {
    pageStyle: {
        marginTop: "2%",
        marginLeft: "25%",
        marginRight: "25%",

    },
    avatarStyle: {
        width: 150,
        height: 150,
        borderRadius: 1,
        marginBottom: "10px",
        fontSize: "60px",
    },
    nameStyle: {
        marginLeft: 50,
    },
    username: {
        marginBottom: 20,
    },
    button: {
        ml: 2,
        backgroundColor: 'black',
        '&:hover': {
            backgroundColor: 'white',
            color: "black",
        },
    },
    customButton: {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '10px',
        padding: '5px 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '&:hover': {
            backgroundColor: 'black',
            color: "white",
        },
    },
}

const UserProfile = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        getUserById(userId);
    }, [userId])


    const getUserById = async (userId) => {
        const id = userId;
        console.log("userId");
        console.log(userId);

        try {
            let result = await fetch(`${ApiURL}/user/${id}`);
            result = await result.json();

            console.log(result);
            setUser(result);
        } catch (error) {
            console.log("Error while fetching data:", error);
        }
    }

    const isIncompleteProfile = (userModel) => {
        return (userModel.name === '' || userModel.phone === '' || userModel.bio === '' || userModel.github === '' || userModel.linkedIn === '' || userModel.college === '' || userModel.branch === '' || userModel.batch === '');
    }


    const userModel = {
        name: user.name ?? "User",
        username: user.username,
        email: user.email,
        phone: user.phone ?? "--",
        bio: user.bio ?? "Your bio is your chance to make a great first impression. Use this space to showcase your personality, your values, and what you stand for.",
        github: user.github ?? "--",
        linkedIn: user.linkedIn ?? "--",
        tags: user.tags,
        college: user.college ?? "--",
        branch: user.branch ?? "--",
        batch: user.batch ?? "--",
        totalProjects: user.totalProjects ?? 0,
    };

    return (
        <>
            {isIncompleteProfile(user)
                ? (<Box sx={{ backgroundColor: 'red', color: 'white', p: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h6">Complete your profile</Typography>
                    </Box>
                    <Typography>
                        Please complete your profile to make the most of our platform.
                    </Typography>
                </Box>) : null
            }
            <Box style={styles.pageStyle}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="h4" align="left">{userModel.name}'s Profile</Typography>
                    <Stack direction="row" spacing={2}>
                        <Edit />
                        <Share />
                    </Stack>
                </Stack>
                <hr style={{ marginBottom: "10%" }} />
                <Grid container spacing={0}>

                    {/* Profile Picture */}
                    <Grid item xs={12} md={3}>
                        <Avatar alt={userModel.name} src="/path/to/photo.jpg" sx={styles.avatarStyle} />
                        <Typography style={styles.username}>@{userModel.username}</Typography>
                    </Grid>

                    {/* Profile information */}
                    <Box style={styles.nameStyle}>
                        <Grid container alignItems="center" spacing={1}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: "10px" }}>
                                    <AccountCircle sx={{ marginRight: 1 }} />
                                    <Typography component="h3" sx={{ textAlign: 'left' }}>Name: {userModel.name}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: "10px" }}>
                                    <Email sx={{ marginRight: 1 }} />
                                    <Typography sx={{ textAlign: 'left' }}>Email: {userModel.email}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: "10px" }}>
                                    <Phone sx={{ marginRight: 1 }} />
                                    <Typography sx={{ textAlign: 'left' }}>Mobile No: {userModel.phone}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: "10px" }}>
                                    <GitHub sx={{ marginRight: 1 }} />
                                    <Typography sx={{ textAlign: 'left' }}> GitHub: <Link to="https://github.com/suyog73">{userModel.github}</Link> </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: "10px" }}>
                                    <LinkedIn sx={{ marginRight: 1 }} />
                                    <Typography sx={{ textAlign: 'left' }}> LinkedIn: <Link to="https://www.linkedin.com/in/suyog-patil7/">{userModel.linkedIn}</Link> </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Box>

                    <Grid item xs={12}>
                        <hr />
                    </Grid>

                    <Typography variant="h5" align="left" style={{ margin: "10px 0 10px 0" }}>
                        About @{user.username}
                        <Typography variant="body2">
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            {userModel.bio}
                        </Typography>
                    </Typography>

                    <Grid item xs={12}>
                        <hr />
                    </Grid>

                    {/* College */}
                    <Box sx={{ marginBottom: "10px", marginTop: "10px" }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: "10px" }}>
                            <School sx={{ marginRight: 1 }} />
                            <Typography sx={{ textAlign: 'left', display: 'flex', alignItems: 'center' }}>
                                <span style={{ marginRight: "8px" }}>College:</span>{userModel.college}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: "10px" }}>
                            <CodeIcon sx={{ marginRight: 1 }} />
                            <Typography sx={{ textAlign: 'left', display: 'flex', alignItems: 'center' }}>
                                <span style={{ marginRight: "8px" }}>Branch:</span>{userModel.branch}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: "10px" }}>
                            <DateRange sx={{ marginRight: 1 }} />
                            <Typography sx={{ textAlign: 'left', display: 'flex', alignItems: 'center' }}>
                                <span style={{ marginRight: "8px" }}>Passout Year:</span>{userModel.batch}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: "10px" }}>
                            <Numbers sx={{ marginRight: 1 }} />
                            <Typography sx={{ textAlign: 'left', display: 'flex', alignItems: 'center' }}>
                                <span style={{ marginRight: "8px" }}>Total Projects:</span>{userModel.totalProjects}
                            </Typography>
                        </Box>
                    </Box>

                    <Grid item xs={12}>
                        <hr />
                    </Grid>

                    {/* Tech Stack */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: "10px 0 10px 0" }}>
                        <Typography variant="h5">
                            Tech stack used by {userModel.name}
                        </Typography>
                        <DisplayTags tags={userModel.tags} />
                    </Box>

                    <Grid item xs={12}>
                        <hr />
                    </Grid>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: "10px 0 10px 0" }}>
                        <Typography variant="h5">Projects done by {userModel.name}</Typography>
                        <Stack direction="column" spacing={2} marginTop="5%">
                            <Button variant="contained" sx={styles.customButton}>
                                <Person style={{ marginRight: "5px" }} />
                                See individual projects
                            </Button>

                            <Button variant="contained" sx={styles.customButton}>
                                <People style={{ marginRight: "5px" }} />
                                See group projects
                            </Button>

                        </Stack>
                    </Box>


                </Grid>
            </Box >

        </>
    );
};


export default UserProfile;
