import { Camera, CameraAltRounded, CloudUploadOutlined, RestoreOutlined, Source } from "@mui/icons-material";
import { Box, Card, CardContent, Icon, Link, Paper, Typography } from "@mui/material"


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
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        padding: "40px",
        gap: "2vh",
        
    },
}





const ResourceCard = ({ SrcLink, DeployLink }) => {
    return (
        <Box styles={styles.card}>
            <Card elevation={5}>
                <div style={styles.header}>
                    Resources
                </div>
                <CardContent style={styles.content}>
                    
                    <Paper sx={{ borderRadius: '0px 10px 0 10px', width:'50% ', padding:"1vh"}}>
                            <Typography variant="h6" sx={{ color: 'GrayText.se', textAlign: 'left' }}>
                                <Icon component={Source} sx={{ fontSize: 25, marginRight: 2 }} />
                                Source Code:
                            </Typography>
                            <Typography variant="h6"sx={{marginLeft:'5vw'}} >
                                <a href={SrcLink} target="_blank" rel="noopener noreferrer" style={{ fontSize:'10', fontWeight:'normal' }}>
                                    Project Source Code 
                                </a>
                            </Typography>
                    </Paper>

                    <Paper sx={{ borderRadius: '0px 10px 0 10px', width:'50%',  padding:"1vh" }}>
                            <Typography variant="h6" sx={{ color: 'GrayText.se', textAlign: 'left' }}>
                                <Icon component={CloudUploadOutlined} sx={{ fontSize: 25, marginRight: 2 }} />
                                Deployment Link:
                            </Typography>   
                            <Typography variant="h6"sx={{marginLeft:'5vw'}} >
                                <a href={DeployLink} target="_blank" rel="noopener noreferrer" style={{ fontSize:'10', fontWeight:'normal' }}>
                                    Project Deployment
                                </a>                             
                            </Typography>
                    </Paper>
                    {/* <Paper sx={{ display: 'flex', alignItems: 'center', gap: '10px'  }}>
                    </Paper> */}
                

                </CardContent>
            </Card>
        </Box>
    )
}
export default ResourceCard;


