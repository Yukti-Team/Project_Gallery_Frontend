import React from "react";
import { StyledTextField } from "../../styles/StyledTextField";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Grid, Typography } from "@mui/material";
import FilterRow from "../widgets/FilterRow";
import ProjectCard from "../widgets/ProjectCard";
import ProjectData from "../widgets/ProjectData";


const AllProject = () => {
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
               All ProjectDataProjectData
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
                  ProjectData.map((project, index) => (
                     <React.Fragment key={project.projectName}>
                        <Grid item xs={4} md={4}>
                           <ProjectCard
                              logoSrc={project.logoSrc}
                              projectName={project.projectName}
                              createdBy={project.createdBy}
                              tags={project.tags}
                              ratingValue={project.ratingValue}
                              statusLabel={project.statusLabel}
                              statusColor={project.statusColor}
                           />

                        </Grid>

                        {index % 2 !== 0 && (
                           <Grid item xs={4} md={4}>
                              <ProjectCard
                                 logoSrc={ProjectData[index - 1].logoSrc}
                                 projectName={ProjectData[index - 1].projectName}
                                 createdBy={ProjectData[index - 1].createdBy}
                                 tags={ProjectData[index - 1].tags}
                                 ratingValue={ProjectData[index - 1].ratingValue}
                                 statusLabel={ProjectData[index - 1].statusLabel}
                                 statusColor={ProjectData[index - 1].statusColor}
                              />
                           </Grid>
                        )}
                     </React.Fragment>
                  ))}
            </Grid>

         </Box>


      </>
   )
}

export default AllProject;