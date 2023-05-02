import { styled } from "@mui/material/styles";
import { Card, Button, CardContent, CardHeader, Avatar, Chip, Rating, Typography, Box } from '@mui/material';
import { AutoAwesome, Person } from '@mui/icons-material';
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const StyledCard = styled(Card)({
    maxWidth: "90%",
    margin: 'auto',
    marginTop: 50,
    marginBottom: 20,
    backgroundColor: "#f0e9e9",
    position: 'relative',
    borderRadius: "10px",


});

const CreatedDate = styled(Typography)({
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#f7d0a6',
    borderTopLeftRadius: "10px",
    padding: '4px 8px',
});

const StatusField = styled(Typography)({
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#f7d0a6',
    borderTopRightRadius: "10px",
    padding: '4px 8px',
});


const LogoImage = styled('img')({
    width: '20%',
    paddingTop: '50px',
});

const ProjectName = styled(CardHeader)({
    textAlign: 'center',
});

const CreatedBy = styled(CardContent)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const UserGroupIcon = styled(Avatar)({
    margin: '0 15px',
    backgroundColor: "black",

});

const Tags = styled(CardContent)({
    height: '90px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    '& > *': {
        margin: '2px',
        marginBottom: '5px',
    },
    '& > *:not(:last-child)': {
        marginRight: '8px',
    },
});
const randomColors = ["#FF6B6B", "#71AFFF", "#FFE66D", "#FFB76B", "#6BFF9F", "#AF6BFF", "#FF6BB7", "#A0A0A0", "000000", "#8D99AE"];

const RatingField = styled(CardContent)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

});


const styles = {
    buttonStyle: {
        color: "white",
        margin: '1rem',
        backgroundColor: 'black',
        '&:hover': {
            backgroundColor: 'white',
            color: "black",
        },
    }

}

const ProjectCard = ({
    username,
    projectId,
    logoSrc,
    projectName,
    tags,
    ratingValue,
    statusLabel,
    statusColor,
    createdAt,
}) => {
    const navigate = useNavigate();

    // const [ownerName, setOwnerName] = useState("");

    useEffect(() => {
        // const getOwnerName = async () => {
        //     const username = username;

        //     try {
        //         let result = await fetch(`${ApiURL}/user/${username}`);
        //         result = await result.json();

        //         setOwnerName(result.username);
        //     } catch (error) {
        //         console.log("Error while fetching data:", error);
        //     }
        // };

        // getOwnerName();
    }, []);

    const handleButtonClick = () => {

        // navigate(`/project/get/${projectId}`);
        console.log(localStorage.getItem("token"));
        navigate(`/project/get/${projectId}`);
    }

    return (
        <StyledCard >

            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "70px",
                height: "70px",
                margin: "auto",
                marginTop: "8%",
                marginBottom: "8%",
            }}>
                <LogoImage src={logoSrc} alt="logo" sx={{ width: "100%", height: "100%" }} />
            </Box>


            <Box display="flex" flexDirection="column" alignItems="center" mb={1}>
                <ProjectName title={projectName} />
                <Box mt={-2}>

                    <Typography variant="subtitle1" sx={{ color: 'gray', display: 'flex', alignItems: 'center' }}>
                        Created By &nbsp;
                        <Link to={`/user/${username}`} target="_blank" style={{ fontSize: "20px", fontWeight: "400", color: "blue" }} underline="hover">
                            {username}
                        </Link>
                    </Typography>
                </Box>
            </Box>

            <CreatedBy>
                <UserGroupIcon> <Person /> </UserGroupIcon>

                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start">
                    <Typography variant="h5">Rank #4 in</Typography>
                    <Typography>Individual Project</Typography>
                </Box>
            </CreatedBy>

            {
                tags && (
                    <Tags>
                        {tags.map((tag, index) => (
                            <Chip
                                key={tag + index}
                                label={tag}
                                icon={<AutoAwesome style={{ fontSize: 20, color: "white" }} />}
                                style={{ backgroundColor: randomColors[index % 10] }} />
                        ))}
                    </Tags>
                )
            }

            <RatingField>
                <Rating name="read-only" value={ratingValue} precision={0.1} readOnly />
                &nbsp;
                <Typography>{ratingValue.toFixed(1)}</Typography>
            </RatingField>


            <Button
                style={styles.buttonStyle}
                variant="contained"
                onClick={handleButtonClick}
            >
                See Details
            </Button>


            <CreatedDate>
                <Typography variant="h-5">
                    {createdAt}
                </Typography>
            </CreatedDate>
            <StatusField style={{ backgroundColor: statusColor }}>
                <Typography variant="h-5">
                    {statusLabel}
                </Typography>
            </StatusField>
        </StyledCard >
    );
}

export default ProjectCard;
