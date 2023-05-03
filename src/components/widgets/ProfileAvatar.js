import { Person } from "@mui/icons-material";
import { Avatar, CardContent, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';


const Profiles = styled(CardContent)({
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',
});

const UserGroupIcon = styled(Avatar)({
    margin: '0 15px',
    width: '50px',
    height: '50px',
    border: "1px grey solid"

});

const ProfileAvatar = ({ userObject, property, isOwner = false }) => {


    return (
        userObject &&
        <Profiles>

            <UserGroupIcon style={{
                backgroundColor: (userObject.imageUrl) ? "transparent" : "grey",
            }}>
                {userObject.imageUrl ? <Avatar alt={userObject.name + Date.now()} src={userObject.imageUrl}></Avatar> : <Person />}
            </UserGroupIcon>

            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start">
                <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '20px' }} >
                    {userObject.name} {property ? <span style={{ color: 'blue' }}>({property})</span> : null}
                    {isOwner ? <FontAwesomeIcon icon={faCrown} style={{ color: 'gold' }} />
                        : null}
                </Typography>

                <Typography variant="body2" sx={{ fontWeight: 'lighter', margin: 0, textAlign: 'left' }}>
                    {userObject.email ? userObject.email : "Email"}
                </Typography>
            </Box>
        </Profiles >

    )

}

export default ProfileAvatar;