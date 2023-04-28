import { Box, Card, CardContent, Stack } from "@mui/material"
import ProfileAvatar from "./ProfileAvatar";


const styles={
    card: {
        width: "40vw",
        margin: "3px",
        borderRadius: "16px",
        // backgroundColor: "transparent",
      },
      header: {
        textAlign:'left',
        backgroundColor: "#f2f2f2",
        borderBottom: "1px solid #ccc",
        padding: "16px",
        fontSize:'25px',
        fontWeight: "medium",
      },
      content: {
        padding: "16px",   
      },
}





const GroupCard= ({groupArray})=>{
    return (
        <Box sx={{ maxHeight: "35vh" }} styles={styles.card}>
            <Card elevation={5}>
            <div style={styles.header}>Project Squad</div>
                <CardContent style={styles.content}>
                        <Stack direction='column' spacing={1} sx={{overflowY: "auto", scrollbarWidth: "none", maxHeight:"35vh"  }}>

                            {/* //this was for name if i send and object -> modify it as member.name */}
                            
                            {groupArray.map((member, index)=>(
                                <ProfileAvatar key={index} name={member}/>
                            ))}

                        </Stack>
                </CardContent>
            </Card>
        </Box>
    )
}
export default GroupCard;


