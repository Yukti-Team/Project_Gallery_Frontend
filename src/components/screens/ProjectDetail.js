import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiURL from '../GetUrl';

const ProjectDetail = () => {

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
        <div style={{ margin: "5%" }}>
            <Typography variant='h5'>
                Project logo
            </Typography>
            <img alt={project.pname} src={project.plogo} height="200px" width="200px" />
            <br />
            <br />

            <Typography variant='h5' align='left'>
                Project Id:- {project._id}
            </Typography>
            <br />

            <Typography variant='h5' align='left'>
                Project Title:- {project.pname}
            </Typography>
            <br />

            <Typography variant='h5' align='left'>
                Project Description:- {project.pdesc}
            </Typography>
            <br />

            <Typography variant='h5' align='left'>
                Project tags:- {(project.tags) ? project.tags.join(", ") : []}
            </Typography>
            <br />
            <Typography variant='h5' align='left'>
                Github Link:- {project.gitHubLink}
            </Typography>
            <br />
            <Typography variant='h5' align='left'>
                Deployed Url:- {project.pUrl}
            </Typography>
            <br />

        </div>

    );
}

export default ProjectDetail;