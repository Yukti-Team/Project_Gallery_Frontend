import { Box, Card, CardContent, CircularProgress, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import ApiURL from "../GetUrl";
import ProfileAvatar from "./ProfileAvatar";

const styles = {
    card: {
        margin: "3px",
        borderRadius: "16px",
        // backgroundColor: "transparent",
    },
    header: {
        textAlign: 'center',
        backgroundColor: "#f2f2f2",
        borderBottom: "1px solid #ccc",
        padding: "16px",
        fontSize: '25px',
        fontWeight: "medium",
    },
    content: {
        padding: "12px",
    },
}



const getUserByUsername = async (username, email) => {
    try {
        let result = await fetch(`${ApiURL}/user/${username}`);
        result = await result.json();

        const statusCode = result.statusCode;

        if (statusCode === 400) {
            return { name: username, email: email }
        }

        else {
            return result;
        }


    } catch (error) {
        console.log("Error while fetching data:", error);
    }
}

const GroupCard = ({ groupArray, guideEmail, sponsorEmail }) => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const fetchUsers = async () => {

            setIsLoading(true); // set loading to true
            const promises = groupArray.map(async (username, index) => {
                console.log(username);
                if (username === '') {
                    return {};
                } else {
                    const user = username &&
                        await getUserByUsername(username, (index === 0) ? guideEmail : sponsorEmail);

                    console.log(user);
                    return user;
                }
            });
            const userArray = await Promise.all(promises);
            setUsers(userArray);

            console.log(userArray);

            setIsLoading(false); // set loading to false
        };

        groupArray && fetchUsers();
    }, [groupArray, guideEmail, sponsorEmail]);




    return (
        groupArray ?
            <Box sx={{ maxHeight: "0.2%" }} styles={styles.card}>
                <Card elevation={5}>
                    <div style={styles.header}>Project Squad</div>
                    <CardContent style={styles.content}>

                        {
                            isLoading ? (
                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <CircularProgress />
                                </Box>
                            )
                                :
                                (
                                    <Stack direction='column' spacing={1} sx={{ overflowY: "auto", scrollbarWidth: "none", maxHeight: "35.3vh" }}>

                                        {/* //this was for name if i send and object -> modify it as userObject.name */}

                                        {users && users.map((userObject, index) => {
                                            console.log(userObject);
                                            if (!userObject || Object.keys(userObject).length === 0) {
                                                return null;
                                            }

                                            // Guide
                                            if (index === 0) {
                                                return <ProfileAvatar key={index} userObject={userObject} property="Guide" />;
                                            }
                                            // Sponser
                                            else if (index === 1) {
                                                return <ProfileAvatar key={index} userObject={userObject} property="Sponsorer" />;
                                            }
                                            // Owner
                                            else if (index === 2) {
                                                return <ProfileAvatar key={index} userObject={userObject} isOwner={true} />;
                                            }
                                            // Team
                                            else if (index > 2) {
                                                return <ProfileAvatar key={index} userObject={userObject} />;
                                            }
                                            else {
                                                return null;
                                            }
                                        })}


                                    </Stack>
                                )

                        }
                    </CardContent>
                </Card>
            </Box>
            :
            <Typography>Nothing To Show</Typography>
    )
}
export default GroupCard;


