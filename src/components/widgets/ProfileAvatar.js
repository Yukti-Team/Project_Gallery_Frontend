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
    marginRight: '3vw',
    backgroundColor: "black",
    width: '50px',
    height: '50px'

});

const ProfileAvatar = ({ profileImage, name, bio, property, isOwner = false }) => {
    return (

        <Profiles>

            <UserGroupIcon> {profileImage ? <img alt={name + Date.now()} src={profileImage}></img> : <Person />} </UserGroupIcon>

            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start">
                <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '20px' }} >
                    {name} {property ? <span style={{ color: 'blue' }}>({property})</span> : null}
                    {isOwner ? <FontAwesomeIcon icon={faCrown} style={{ color: 'gold' }} />
                        : null}
                </Typography>


                <Typography variant="body2" sx={{ fontWeight: 'lighter' }}>{bio ? bio : "bio: About the team member skills and their interests"}</Typography>
            </Box>
        </Profiles >

    )

}
export default ProfileAvatar;