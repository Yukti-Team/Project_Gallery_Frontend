import { Grid, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

const StyledBox = styled(Box)({
    backgroundColor: 'white',
    border:'blue',
    borderRadius:'20px',
    padding:'15px',
    '&:hover': {
      backgroundColor: '  rgb(152, 181, 250)',
      cursor: 'pointer',
    },
  });

const ProjectLabels= ({ branch, domain, year, status })=>{
    return(
  
        <Grid container my={4} spacing={2} style={{justifyContent:'space-evenly'}}>
            <Grid item xs='auto'>
                <StyledBox>
                  <Typography variant='subtitle1' align='center'noWrap  >
                    {branch}
                  </Typography>
                </StyledBox>
            </Grid>
            <Grid item xs='auto'>
                <StyledBox>
                  <Typography variant='subtitle1' align='center'noWrap >
                    {domain}
                  </Typography>
                </StyledBox>

            </Grid>
            <Grid item xs='auto'>
                <StyledBox>
                  <Typography variant='subtitle1' align='center'noWrap >
                    {status}
                  </Typography>
                </StyledBox>
            </Grid>
            <Grid item xs='auto'>
                <StyledBox>
                  <Typography variant='subtitle1' align='center'noWrap >
                    {year}
                  </Typography>
                </StyledBox>
            </Grid>
        </Grid>
    )
}
export default ProjectLabels;