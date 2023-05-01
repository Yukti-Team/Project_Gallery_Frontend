import { Person } from "@mui/icons-material";
import { Avatar,  CardContent, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";



const Profiles = styled(CardContent)({
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',
});

    const UserGroupIcon = styled(Avatar)({
    margin: '0 15px',
    marginRight:'3vw',
    backgroundColor: "black",
    width:'50px',
    height:'50px'

});

const ProfileAvatar = ({name}) => {
    return (
  
            <Profiles>

                <UserGroupIcon> <Person/> </UserGroupIcon>

                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start">
                    <Typography variant="body1"sx={{fontWeight:'bold', fontSize:'20px'}} >{name}</Typography>
                    <Typography variant="body2" sx={{fontWeight:'lighter'}}>bio: About the team member skills and their interests</Typography>
                </Box>
            </Profiles>

    )

}
export default ProfileAvatar;