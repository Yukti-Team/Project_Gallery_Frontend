
import { Grid, Typography } from '@mui/material';
import React from 'react';
import Plogo from '../../images/pglogo.jpg';
import DescCard from '../widgets/DescCard';
import DisplayTags from '../widgets/DisplayTags';
import GroupCard from '../widgets/GroupCard';
// import {styled} from '@mui/material/styles';
// import { Box } from '@mui/material';
import ImageCard from '../widgets/Image_Card';
import ProjectLabels from '../widgets/ProjectLabels';
import ResourceCard from '../widgets/ResourceCard';



//static data
const branch = "Information Technology";
const domain = "Android Development ";
const year = "2023";
const status = "Inprogress";
const groupArray =['John Doe', 'Jane Smith', 'Bob Johnson','Bob Johnson','Bob Johnson'] ;
const pname="PickNDrop"
const gitHubLink = "https://github.com/suyog73" ;
const pUrl= "https://www.holopin.io/@rutuja369" ;
const pdesc= "Lorem jnAKJN SWQJKHSQWJK QSJKSWJ WKJWKL KJWJKDEWE WDJKWJK JKKJ JSJKW JKWKJ Integer at elit ullamcorper lacinia Sed condimentum quam vitae dui rutrum malesuadaAliquam luctus, justo nec posuere vestibulum, sapien lectus sollicitudin erat, id blandit eros purus vitae turpisNullam convallis leo quis purus facilisis, in suscipit nunc interdum sapien lectus sollicitudin erat, id blandit eros purus vitae turpisNullam convallis leo quis purus facilisis, in suscipit nunc interdumsapien lectus sollicitudin erat, id blandit eros purus vitae turpisNullam convallis leo quis purus facilisis, in suscipit nunc interdumsapien lectus sollicitudin erat, id blandit eros purus vitae turpisNullam convallis leo quis purus facilisis, in suscipit nunc interdumsapien lectus sollicitudin erat, id blandit eros purus vitae turpisNullam convallis leo quis purus facilisis, in suscipit nunc interdumsapien lectus sollicitudin erat, id blandit eros purus vitae turpisNullam convallis leo quis purus facilisis, in suscipit nunc interdumsapien lectus sollicitudin erat, id blandit eros purus vitae turpisNullam convallis leo quis purus facilisis, in suscipit nunc interdumsapien lectus sollicitudin erat, id blandit eros purus vitae turpisNullam convallis leo quis purus facilisis, in suscipit nunc interdum";
const tags= ['Flutter', 'Firebase', 'Android'];









const SingleProject = () => {
  return (
    <div style={{ backgroundColor: "  rgb(242, 248, 253)", width:"100vw",    paddingTop:'30vh',} }>
      {/* //use   <CustomCarousel /> */}

      <ImageCard image={Plogo} />
      <Typography variant="h4">
        {pname}
      </Typography>
      <ProjectLabels branch={branch} domain={domain} year={year} status={status} />


      <DisplayTags tags={tags}/>


      <Grid container my={8} rowSpacing={1} columnSpacing={0.1}sx={{marginBottom:'2vh'}} >
        <Grid item xs={7}>
            <div style={{ margin: '0 4vw', width: '87%' }}>
              <GroupCard groupArray={groupArray}/>
            </div>
          {/* </div> */}
        </Grid>
        <Grid item xs={5} sx={{marginBottom:'5vh'}} >
            <div style={{ marginRight:'0.4vw',width: '90%' }}>
            <DescCard pdesc={pdesc}/>
            </div>

          {/* </div> */}
        </Grid>
      <Grid container sx={{display:'flex', alignItems:'center', justifyContent:'center', xs:'12', marginBottom:'2vh', marginTop:'13vh'}} >
        <div style={{ margin:'0 4vw', width: '92%' }}>
                <ResourceCard SrcLink={gitHubLink} DeployLink={pUrl}/>
        </div>
      </Grid>
      </Grid>




    </div>
  )
}
export default SingleProject;