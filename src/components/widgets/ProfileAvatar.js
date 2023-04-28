import { Person } from "@mui/icons-material";
import { Avatar, Card, CardContent, styled, Typography } from "@mui/material";
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
    width:'60px',
    height:'60px'

});

const ProfileAvatar = ({name}) => {
    return (
  
            <Profiles>

                <UserGroupIcon> <Person/> </UserGroupIcon>

                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start">
                    <Typography variant="h5">{name}</Typography>
                    <Typography>bio: About the team member skills and their interests</Typography>
                </Box>
            </Profiles>

    )

}
export default ProfileAvatar;