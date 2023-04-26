import { styled } from "@mui/material/styles";
import { Card, Button, CardContent, Link, CardHeader, Avatar, Chip, Rating, Typography, Box } from '@mui/material';
import { Person } from '@mui/icons-material';

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


const today = new Date();
const day = today.getDate().toString().padStart(2, '0');
const month = (today.getMonth() + 1).toString().padStart(2, '0');
const year = today.getFullYear().toString();
const date = `${day}/${month}/${year}`;


function ProjectCard({ logoSrc, projectName, createdBy, tags, ratingValue, statusLabel, statusColor }) {
    return (
        <StyledCard>

            <LogoImage src={logoSrc} alt="logo" />

            <Box display="flex" flexDirection="column" alignItems="center" mb={1}>
                <ProjectName title={projectName} />
                <Box mt={-2}>

                    <Typography variant="subtitle1" sx={{ color: 'gray', display: 'flex', alignItems: 'center' }}>
                        Created By &nbsp;
                        <Typography variant="h6">
                            <Link href="#" underline="hover"> {createdBy}</Link>
                        </Typography>
                    </Typography>
                </Box>
            </Box>

            <CreatedBy>
                <UserGroupIcon> <Person /> </UserGroupIcon>

                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start">
                    <Typography variant="h6">Rank #4 in</Typography>
                    <Typography>Individual Project</Typography>
                </Box>


            </CreatedBy>

            {tags && (
                <Tags>
                    {tags.map((tag, index) => (
                        <Chip key={tag} label={tag} style={{ backgroundColor: randomColors[index % 10] }} />
                    ))}
                </Tags>
            )}

            <RatingField>
                <Rating name="read-only" value={ratingValue} precision={0.1} readOnly />
                &nbsp;
                <Typography>{ratingValue.toFixed(1)}</Typography>
            </RatingField>


            <Button style={styles.buttonStyle} variant="contained">
                See Details
            </Button>


            <CreatedDate>
                <Typography variant="h-5">
                    {date}
                </Typography>
            </CreatedDate>
            <StatusField style={{ backgroundColor: statusColor }}>
                <Typography variant="h-5">
                    {statusLabel}
                </Typography>
            </StatusField>
        </StyledCard>
    );
}

export default ProjectCard;
