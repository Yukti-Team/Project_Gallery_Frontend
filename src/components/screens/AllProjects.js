import React, { useEffect, useState } from "react";
import { StyledTextField } from "../../styles/StyledTextField";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Grid, Typography } from "@mui/material";
import FilterRow from "../widgets/FilterRow";
import ProjectCard from "../widgets/ProjectCard";
import ApiURL from "../GetUrl";


const statusColors = {
   "Complete": "lightGreen",
   "In-progress": "orange",
   "Pending": "red"
};

const AllProject = () => {

   const [projects, setProjects] = useState([]);


   const getProjects = async () => {
      try {
         let result = await fetch(`${ApiURL}/project/get/all`, {
            method: "get",
            headers: {
               authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
               "Content-Type": "application/json"
            }
         });
         result = await result.json();

         setProjects(result);
      } catch (error) {
         console.log("Error while fetching data:", error);
      }
   };


   useEffect(() => {
      getProjects();
   }, [])

   const searchHandle = async (event) => {
      try {
         console.log(event.target.value);
      } catch (error) {
         console.log("Error while searching product:", error);
      }
   };

   return (
      <>
         <Box sx={{ marginTop: '1rem' }}>
            <Typography variant="h4" sx={{ margin: 0 }}>
               All Projects
            </Typography>

            <StyledTextField
               variant="outlined"
               placeholder="Search"
               onChange={searchHandle}
               InputProps={{
                  startAdornment: <SearchIcon />,
               }}
               sx={{ marginTop: '1rem' }}
            />

            <FilterRow />
            <Grid container spacing={2}>
               {
                  projects.map((project) => (
                     <Grid item key={project._id} xs={12} md={4}>
                        <ProjectCard
                           projectId={project._id}
                           username={project.username}
                           logoSrc={project.plogo}
                           projectName={project.pname}
                           tags={project.tags}
                           ratingValue={4}
                           statusLabel={project.status}
                           statusColor={statusColors[project.status]}
                           createdAt={project.createdAt}
                        />
                     </Grid>
                  ))
               }
            </Grid>
         </Box>
      </>
   )
}

export default AllProject;