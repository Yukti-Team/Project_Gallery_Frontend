
import { Grid, Rating, Typography } from '@mui/material';
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
import ProjectCarousel from '../widgets/ProjectCarousel';



// //static data
// const branch = "Information Technology";
// const domain = "Android Development ";
// const year = "2023";
// const status = "Inprogress";
// const groupArray = ['John Doe'];
// const pname="PickNDrop"
// const gitHubLink = "https://github.com/suyog73" ;
// const pUrl= "https://www.holopin.io/@rutuja369" ;
// const pdesc= "Lorem jnAKJN SWQJKHSQWJK QSJKSWJ WKJWKL KJWJKDEWE WDJKWJK JKKJ JSJKW JKWKJ Integer at elit ullamcorper lacinia Sed condimentum quam vitae dui rutrum malesuadaAliquam luctus, justo nec posuere vestibulum, sapien lectus sollicitudin erat, id blandit eros purus vitae turpisNullam convallis leo quis purus facilisis, in suscipit nunc interdum sapien lectus sollicitudin erat, id blandit eros purus vitae turpisNullam convallis leo quis purus facilisis, in suscipit nunc interdumsapien lectus sollicitudin erat, id blandit eros purus vitae turpisNullam convallis leo quis purus facilisis, in suscipit nunc interdumsapien lectus sollicitudin erat, id blandit eros purus vitae turpisNullam convallis leo quis purus facilisis, in suscipit nunc interdumsapien lectus sollicitudin erat, id blandit eros purus vitae turpisNullam convallis leo quis purus facilisis, in suscipit nunc interdumsapien lectus sollicitudin erat, id blandit eros purus vitae turpisNullam convallis leo quis purus facilisis, in suscipit nunc interdumsapien lectus sollicitudin erat, id blandit eros purus vitae turpisNullam convallis leo quis purus facilisis, in suscipit nunc interdumsapien lectus sollicitudin erat, id blandit eros purus vitae turpisNullam convallis leo quis purus facilisis, in suscipit nunc interdum";
// const tags= ['Flutter', 'Firebase', 'Android'];


// const ratingValue =9.68;

const SingleProject = () => {



  const [rating] = React.useState(2);


  const styles = {
    image: {
      width: '20%',
      height: '60vh',
      objectFit: 'cover',
      filter: 'blur(0px)',
    },
    rating: {
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'left'
    }
  }

  const { projectId } = useParams();
  const [project, setProject] = useState({});
  



  useEffect(() => {
    const getProjectById = async (projectId) => {
      const id = projectId;

      try {
        let result = await fetch(`${ApiURL}/project/get/${id}`, {
          method: "get",
          headers: {
            authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
            "Content-Type": "application/json"
          }
        });
        result = await result.json();

        // console.log(result);

        setProject(result);
      } catch (error) {
        console.log("Error while fetching data:", error);
      }
    };
    getProjectById(projectId);
  }, [projectId])


  return (
    <div style={{ backgroundColor: "  rgb(242, 248, 253)", width: "99.1vw", paddingTop: '5%', }}>


      <Grid container columnSpacing={8} style={{ marginTop: "3%", marginBottom: "5%" }}>
        <Grid item xs={3} sx={{ maxWidth: '5%' }}>
          <ImageCard image={project.plogo} />
        </Grid>
        <Grid item xs={9} sx={{ alignItems: "center", marginTop: '3%' }} >

          <Typography variant="h4" sx={{ textAlign: 'left' }}>
            {project.pname}
          </Typography>

          <Rating
            sx={styles.rating}
            name="read-only"
            value={rating}
            readOnly
          />


          <ProjectLabels branch={project.branch} domain={project.domain} year={project.year} status={project.status} />

          <DisplayTags tags={project.tags} />
        </Grid>
      </Grid>



      {/* slideshow */}

      {project && project.pimages && project.pimages.length > 0 && (
        <ProjectCarousel items={project.pimages} styles={styles} />
      )}





      {/* Conditional Rendering for Group and individual  */
        console.log(project.groupArray)
      }
      {
        (project && project.groupArray && project.groupArray[3]) !== '' ?
          (
            <Grid container my={3} columnSpacing={1.5} sx={{ marginBottom: '10px', maxHeight: '60vh' }} >
              <Grid item xs={5.5}>
                <div style={{ margin: '0 4vw', width: '87%' }}>
                  <GroupCard groupArray={project.groupArray} />
                </div>
                {/* </div> */}
              </Grid>
              <Grid item xs={6.5}  >
                <div style={{ width: '92%', }}>
                  <DescCard pdesc={project.pdesc} />
                </div>

                {/* </div> */}
              </Grid>
            </Grid>
          ) :
          (
            <Grid container my={3} columnSpacing={2} sx={{ marginBottom: '10px', maxHeight: '60vh' }} >
              <Grid item xs={6.5}  >
                <div style={{ margin: '0 4vw', width: '92%', }}>
                  <DescCard pdesc={project.pdesc} />
                </div>

                {/* </div> */}
              </Grid>
              <Grid item xs={5.5}>
                <div style={{ marginLeft: '1vw', width: '89%' }}>
                  <GroupCard groupArray={project.groupArray} />
                </div>
                {/* </div> */}
              </Grid>
            </Grid>
          )
      }


      <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', xs: '12', marginBottom: '10vh', marginTop: '2%' }} >
        <div style={{ margin: '0 4vw', width: '92%' }}>
          <ResourceCard SrcLink={project.gitHubLink} DeployLink={project.pUrl} />
        </div>
      </Grid>



    </div>
  )
}
export default SingleProject;