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



const getUserByUsername = async (username) => {
    // console.log("username");
    // console.log(username);

    try {
        let result = await fetch(`${ApiURL}/user/${username}`);
        result = await result.json();

        // console.log(result);
        return result;


    } catch (error) {
        console.log("Error while fetching data:", error);
    }
}

const GroupCard = ({ groupArray }) => {


    // const [users, setUsers] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     const fetchUsers = async () => {

    //     setIsLoading(true); // set loading to true
    //       const promises = groupArray.map(async (member) => {
    //         const user = await getUserByUsername(member);
    //         return user;
    //       });
    //       const users = await Promise.all(promises);
    //       setUsers(users);

    //       setIsLoading(false); // set loading to false
    //     };

    //     fetchUsers();
    //   }, [groupArray]);




    return (
        groupArray ?
            <Box sx={{ maxHeight: "0.2%" }} styles={styles.card}>
                <Card elevation={5}>
                    <div style={styles.header}>Project Squad</div>
                    <CardContent style={styles.content}>

                        {
                            // isLoading ? (
                            //     <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            //         <CircularProgress />
                            //     </Box>
                            // )
                            //     :
                            (
                                <Stack direction='column' spacing={1} sx={{ overflowY: "auto", scrollbarWidth: "none", maxHeight: "35.3vh" }}>

                                    {/* //this was for name if i send and object -> modify it as member.name */}

                                    {groupArray.map((member, index) => {
                                        if (!member) {
                                            return null;
                                        }

                                        // Guide
                                        if (index === 0 && member !== '') {
                                            return <ProfileAvatar key={index} name={member} property="Guide" />;
                                        }
                                        // Sponser
                                        else if (index === 1 && member !== '') {
                                            return <ProfileAvatar key={index} name={member} property="Sponsorer" />;
                                        }
                                        // Owner
                                        else if (index === 2 && member !== '') {
                                            return <ProfileAvatar key={index} name={member} isOwner={true} />;
                                        }
                                        // Team
                                        else if (index > 2 && member !== '') {
                                            return <ProfileAvatar key={index} name={member} />;
                                        }
                                        else {
                                            return null;
                                        }
                                    })}

                                    {/* {groupArray.map((member, index) => (
                                        index === 0 ?
                                            <ProfileAvatar key={index} name={member} /> :
                                            (index > 2 && member != '') ?
                                                <ProfileAvatar key={index} name={member} /> : null
                                    ))} */}

                                </Stack>
                            )
                            //  :
                            // (
                            //     <Stack direction='column' spacing={1} sx={{ overflowY: "auto", scrollbarWidth: "none", maxHeight: "35.3vh" }}>
                            //         {/* //this was for name if i send and object -> modify it as member.name */}

                            //         {groupArray.map((member, index) => (
                            //             <ProfileAvatar key={index} name={member} />
                            //         ))}
                            //     </Stack>
                            //     //show something more in this section decorate -> Card

                            // )
                        }
                    </CardContent>
                </Card>
            </Box> : <Typography>Nothing To Show</Typography>
    )
}
export default GroupCard;


