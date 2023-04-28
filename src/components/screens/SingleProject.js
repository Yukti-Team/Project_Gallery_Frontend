
import { Grid, Typography } from '@mui/material';
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

          setProject(result);
      } catch (error) {
          console.log("Error while fetching data:", error);
      }
  }











  return (
    <div style={{ backgroundColor: "  rgb(242, 248, 253)", width:"100vw",    paddingTop:'30vh',} }>
      {/* //use   <CustomCarousel /> */}

      <ImageCard image={project.plogo} />
      <Typography variant="h4">
        {project.pname}
      </Typography>
      <ProjectLabels branch={project.branch} domain={project.domain} year={project.year} status={project.status} />


      <DisplayTags tags={project.tags}/>


      <Grid container my={8} rowSpacing={1} columnSpacing={0.1}sx={{marginBottom:'2vh'}} >
        <Grid item xs={7}>
            <div style={{ margin: '0 4vw', width: '87%' }}>
              <GroupCard groupArray={groupArray}/>
            </div>
          {/* </div> */}
        </Grid>
        <Grid item xs={5} sx={{marginBottom:'5vh'}} >
            <div style={{ marginRight:'0.4vw',width: '90%' }}>
            <DescCard pdesc={project.pdesc}/>
            </div>

          {/* </div> */}
        </Grid>
      <Grid container sx={{display:'flex', alignItems:'center', justifyContent:'center', xs:'12', marginBottom:'2vh', marginTop:'13vh'}} >
        <div style={{ margin:'0 4vw', width: '92%' }}>
                <ResourceCard SrcLink={project.gitHubLink} DeployLink={project.pUrl}/>
        </div>
      </Grid>
      </Grid>




    </div>
  )
}
export default SingleProject;