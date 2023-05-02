import { Box, Card, CardContent, Stack } from "@mui/material"
import ProfileAvatar from "./ProfileAvatar";


const styles={
    card: {
        margin: "3px",
        borderRadius: "16px",
        // backgroundColor: "transparent",
      },
      header: {
        textAlign:'center',
        backgroundColor: "#f2f2f2",
        borderBottom: "1px solid #ccc",
        padding: "16px",
        fontSize:'25px',
        fontWeight: "medium",
      },
      content: {
        padding: "12px",   
      },
}





const GroupCard= ({groupArray})=>{
    return (
        <Box sx={{ maxHeight: "0.2%" }} styles={styles.card}>
            <Card elevation={5}>
            <div style={styles.header}>Project Squad</div>
                <CardContent style={styles.content}>

                        {
                            groupArray.length > 1 ? 
                            (
                                <Stack direction='column' spacing={1} sx={{overflowY: "auto", scrollbarWidth: "none", maxHeight:"35.3vh"  }}>

                                    {/* //this was for name if i send and object -> modify it as member.name */}
                                    
                                    {groupArray.map((member, index)=>(
                                        <ProfileAvatar key={index} name={member}/>
                                    ))}

                                </Stack>
                            ):
                            (
                                <Stack direction='column' spacing={1} sx={{overflowY: "auto", scrollbarWidth: "none", maxHeight:"35.3vh"  }}>
                                    {/* //this was for name if i send and object -> modify it as member.name */}
                                    
                                    {groupArray.map((member, index)=>(
                                        <ProfileAvatar key={index} name={member}/>
                                    ))}
                                </Stack>
                                //show something more in this section decorate -> Card
                                
                            )
                        }
                </CardContent>
            </Card>
        </Box>
    )
}
export default GroupCard;


