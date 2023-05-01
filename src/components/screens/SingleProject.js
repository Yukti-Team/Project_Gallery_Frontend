
import { Grid, Icon, Stack, Typography } from '@mui/material';
import React from 'react';
import DescCard from '../widgets/DescCard';
import DisplayTags from '../widgets/DisplayTags';
import GroupCard from '../widgets/GroupCard';
import ImageCard from '../widgets/Image_Card';
import ProjectLabels from '../widgets/ProjectLabels';
import ResourceCard from '../widgets/ResourceCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiURL from '../GetUrl';
import {  Star } from '@mui/icons-material';
import ProjectCarousel from '../widgets/ProjectCarousel';



// //static data
// const branch = "Information Technology";
// const domain = "Android Development ";
// const year = "2023";
// const status = "Inprogress";
const groupArray =['John Doe', 'Jane Smith', 'Bob Johnson','Bob Johnson','Bob Johnson'] ;
// const pname="PickNDrop"
// const gitHubLink = "https://github.com/suyog73" ;
// const pUrl= "https://www.holopin.io/@rutuja369" ;
// const pdesc= "Lorem jnAKJN SWQJKHSQWJK QSJKSWJ WKJWKL KJWJKDEWE WDJKWJK JKKJ JSJKW JKWKJ Integer at elit ullamcorper lacinia Sed condimentum quam vitae dui rutrum malesuadaAliquam luctus, justo nec posuere vestibulum, sapien lectus sollicitudin erat, id blandit eros purus vitae turpisNullam convallis leo quis purus facilisis, in suscipit nunc interdum sapien lectus sollicitudin erat, id blandit eros purus vitae turpisNullam convallis leo quis purus facilisis, in suscipit nunc interdumsapien lectus sollicitudin erat, id blandit eros purus vitae turpisNullam convallis leo quis purus facilisis, in suscipit nunc interdumsapien lectus sollicitudin erat, id blandit eros purus vitae turpisNullam convallis leo quis purus facilisis, in suscipit nunc interdumsapien lectus sollicitudin erat, id blandit eros purus vitae turpisNullam convallis leo quis purus facilisis, in suscipit nunc interdumsapien lectus sollicitudin erat, id blandit eros purus vitae turpisNullam convallis leo quis purus facilisis, in suscipit nunc interdumsapien lectus sollicitudin erat, id blandit eros purus vitae turpisNullam convallis leo quis purus facilisis, in suscipit nunc interdumsapien lectus sollicitudin erat, id blandit eros purus vitae turpisNullam convallis leo quis purus facilisis, in suscipit nunc interdum";
// const tags= ['Flutter', 'Firebase', 'Android'];




const SingleProject = () => {


  const styles= {
    image: {
        
        width: '20%',
        height: '30%',
        objectFit: 'cover',
        filter: 'blur(0px)',
        border:'1px solid red'
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "#fff",
        zIndex: 1,
        padding: '0px 16px'
    },
    // button: {
    //     margin: '1rem',
    //     backgroundColor: 'black',
    //     '&:hover': {
    //         backgroundColor: 'white',
    //         color: "black",
    //     },
    // }
  }

  const { projectId } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
      getProjectById(projectId);
  }, [projectId])

  const getProjectById = async (projectId) => {
    const id = projectId;
 
      try {
          let result = await fetch(`${ApiURL}/project/get/${id}`);
          result = await result.json();
          console.log(` these are project images ${project.pimages}`);
          setProject(result);
      } catch (error) {
          console.log("Error while fetching data:", error);
      }
  }

  return (
    <div style={{ backgroundColor: "  rgb(242, 248, 253)", width:"99.1vw",    paddingTop:'5%',} }>
    
       
      <Grid container columnSpacing={8} sx={{border:'1px solid black'}}>
         <Grid item xs={3} sx={{maxWidth:'5%'}}>
            <ImageCard image={project.plogo} />
         </Grid>
         <Grid item xs={9} sx={{alignItems:"center",  marginTop:'3%'}} >
    
            <Typography variant="h4" sx={{textAlign:'left'}}>
              {project.pname}
            </Typography>
            <Stack direction="row" columnSpacing={0.1} rowSpacing={0} justifyContent="left" sx={{ maxWidth:'25%'}}>
              <Icon component={Star} sx={{ fontSize: 25}} />      
              <Icon component={Star} sx={{ fontSize: 25 }} />      
              <Icon component={Star} sx={{ fontSize: 25}} />      
              <Icon component={Star} sx={{ fontSize: 25 }} />      
              <Icon component={Star} sx={{ fontSize: 25 }} />      
            </Stack>

            <ProjectLabels branch={project.branch} domain={project.domain} year={project.year} status={project.status} />

           <DisplayTags tags={project.tags}/>
         </Grid>
      </Grid> 



      {/* slideshow */}
      <ProjectCarousel items={project.pimages} styles={styles}/>




      <Grid container my={3} columnSpacing={1.5}  sx={{marginBottom:'10px', maxHeight:'60vh', border:'1px solid black'}} >
        <Grid item xs={5.5}>
            <div style={{ margin: '0 4vw', width: '87%' }}>
              <GroupCard groupArray={groupArray}/>
            </div>
          {/* </div> */}
        </Grid>
        <Grid item xs={6.5}  >
            <div style={{  width: '92%' , }}>
            <DescCard pdesc={project.pdesc}/>
            </div>

          {/* </div> */}
        </Grid>
      </Grid>

      <Grid container sx={{display:'flex', alignItems:'center', justifyContent:'center', xs:'12', marginBottom:'10vh', marginTop:'2%'}} >
        <div style={{ margin:'0 4vw', width: '92%' }}>
              <ResourceCard SrcLink={project.gitHubLink} DeployLink={project.pUrl}/>
        </div>
      </Grid>



    </div>
  )
}
export default SingleProject;