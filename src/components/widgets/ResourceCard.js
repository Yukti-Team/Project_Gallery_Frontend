import { CloudUploadOutlined, Source } from "@mui/icons-material";
import { Box, Card, CardContent, Grid, Icon, Paper, Typography } from "@mui/material"


const styles = {
    card: {
        alignItems: "center",
        borderRadius: "16px",
        // backgroundColor: "transparent",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        textAlign: 'left',
        backgroundColor: "#f2f2f2",
        borderBottom: "1px solid #ccc",
        padding: "16px",
        fontSize: '25px',
        fontWeight: "bold",

    },
    content: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: "40px",
        gap: "2vh",

    },
    paper: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '0px 10px 0 10px',
        alignItems: 'left',
        padding: "2vh",
        boxShadow: '2px 3px 4px  rgb(152, 181, 250)',
    }
}





const ResourceCard = ({ SrcLink, DeployLink }) => {
    return (
        <Box styles={styles.card}>
            <Card elevation={5}>
                <div style={styles.header}>
                    Resources
                </div>
                <CardContent style={styles.content}>

                    <Grid container columnSpacing={6} >
                        <Grid item xs={6} sm={6}>

                            <Paper sx={styles.paper}>
                                <Typography variant="h6" sx={{ color: 'GrayText.se', textAlign: 'left' }}>
                                    <Icon component={Source} sx={{ fontSize: 25, marginRight: 2 }} />
                                    Source Code:
                                </Typography>
                                <Typography variant="h6" sx={{ marginLeft: '5vw' }} >
                                    <a href={SrcLink} target="_blank" rel="noopener noreferrer" style={{ color: 'blueviolet', fontSize: '10', fontWeight: 'normal' }}>
                                        Project Source Code
                                    </a>

                                </Typography>
                            </Paper>

                        </Grid>
                        <Grid item xs={6} sm={6}>

                            <Paper sx={styles.paper}>
                                <Typography variant="h6" sx={{ color: 'GrayText.se', textAlign: 'left' }}>
                                    <Icon component={CloudUploadOutlined} sx={{ fontSize: 25, marginRight: 2 }} />
                                    Deployment Link:
                                </Typography>
                                <Typography variant="h6" sx={{ marginLeft: '5vw' }} >
                                    <a href={DeployLink} target="_blank" rel="noopener noreferrer" style={{ color: 'blueviolet', fontSize: '10', fontWeight: 'normal' }}>
                                        Project Deployment
                                    </a>
                                </Typography>
                            </Paper>

                        </Grid>
                    </Grid>


                    {/* <Paper sx={{ display: 'flex', alignItems: 'center', gap: '10px'  }}>
                    </Paper> */}


                </CardContent>
            </Card>
        </Box>
    )
}
export default ResourceCard;


