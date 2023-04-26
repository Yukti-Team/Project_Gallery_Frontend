import React, { useState } from "react";
import { Grid, Paper, Typography } from '@mui/material'
import MyButton from "../widgets/MyButton";

import CustomTextField from "../widgets/CustomTextField";
import CustomDropDown2 from "../widgets/CustomDropdown2";
import LogoUploader from "../widgets/LogoUploader";
import ImageUploader from "../widgets/ImageUploader";
import TagTextField from "../widgets/TagTextField";
import PrivateCheckbox from "../widgets/PrivateCheckBox";


const styles = {
    paper: {
        padding: '20px',
        backgroundColor: '#f5f5f5',
        margin: "20px",
        marginTop: "2%"
    },
    dropdownRow: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
        marginTop: '20px'
    },
    uploadImage: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginTop: "3%",

    },
};


const filterOptions = [
    {
        label: 'Department',
        options: ['CSE', 'IT', 'Entc', 'Mech', 'Civil', 'Electrical'],
    },
    {
        label: 'Project Domain',
        options: ['Web Dev', 'Android Dev', 'ML', 'AI'],
    },
    {
        label: 'Year of study',
        options: ['2023', '2022', '2021'],
    },
    {
        label: 'Project Status',
        options: ['Pending', 'In-progress', 'Complete'],
    },

];


const AddProject = () => {

    const auth = JSON.parse(localStorage.getItem("user"));
    const userName = auth && auth.username;

    //extra details
    const [pimage, setPimage] = useState([]);
    const [plogo, setPlogo] = useState(null);
    const [tags, setTags] = useState([]);
    const [isPrivate, setIsPrivate] = useState(false);

    const [values, setValues] = useState(Array(4).fill(''));
    const [phoneno, setPhoneNo] = useState("");
    const [teamsize, setTeamsize] = useState(1);
    const [guide, setGuide] = useState("");
    const [guideemail, setGuideEmail] = useState("");
    const [sponsor, setSponsor] = useState("");
    const [sponsorEmail, setSponsorEmail] = useState("");
    const [pname, setPname] = useState("");
    const [pdesc, setPdesc] = useState("");
    const [gitHubLink, setGithubLink] = useState("");
    const [pUrl, setPurl] = useState("");
    const [selectedFilters, setSelectedFilters] = useState({});
    const [anchorEl, setAnchorEl] = useState({});


    const handleFilterClick = (event, label) => {
        setAnchorEl((prevState) => ({ ...prevState, [label]: event.currentTarget }));
    };

    const handleFilterClose = (label, option) => {
        setSelectedFilters((prevState) => ({ ...prevState, [label]: option }));
        setAnchorEl((prevState) => ({ ...prevState, [label]: null }));
    };


    // Team members list
    const handleChange = (index, value) => {
        const newValues = [...values];
        newValues[index] = value;
        setValues(newValues);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(selectedFilters);
    };


    return (

        <>
            <Typography variant="h5" align="center" style={{ marginTop: "2%" }}>
                Let your creativity shine and inspire others to embark their journey of innovation
            </Typography>

            <Paper elevation={3} style={styles.paper}>

                <Typography variant="h5" align="left" style={{ marginBottom: "-2%" }}>Team Information</Typography>
                <Grid container spacing={2} marginTop={2}>
                    <Grid item xs={12} sm={6}>

                        <CustomTextField label="Title" value={pname} onChange={(e) => setPname(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField label="Team Size (Including leader)" value={teamsize} onChange={(e) => setTeamsize(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                            label="Team Leader"
                            value={userName}
                            readOnly={true}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                            label="Phone No."
                            value={phoneno}
                            onChange={(e) => setPhoneNo(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                            label="Project Guide"
                            value={guide}
                            onChange={(e) => setGuide(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                            label="Guide Email"
                            value={guideemail}
                            onChange={(e) => setGuideEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                            label="Project Sponsor"
                            value={sponsor}
                            onChange={(e) => setSponsor(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                            label="Sponsor Email"
                            value={sponsorEmail}
                            onChange={(e) => setSponsorEmail(e.target.value)}
                        />
                    </Grid>
                </Grid>

                <div style={styles.dropdownRow}>
                    {filterOptions.map(({ label, options }) => (
                        <div key={label} style={{ width: 'calc(50% - 10px)' }}>
                            <CustomDropDown2
                                key={label}
                                label={label}
                                options={options}
                                selectedFilters={selectedFilters}
                                handleFilterClick={handleFilterClick}
                                handleFilterClose={handleFilterClose}
                                anchorEl={anchorEl}
                                setAnchorEl={setAnchorEl}
                                width="100%"
                                marginLeft="10px"
                                marginRight="10px"
                            />
                        </div>
                    ))}
                </div>

            </Paper>
            {teamsize > 1 && (
                <Paper elevation={3} style={styles.paper}>
                    <Typography variant="h5" align="left">Team Information</Typography>
                    <Grid container spacing={2}>
                        {Array.from({ length: teamsize - 1 }, (value, index) => (
                            <Grid item key={index} xs={12} sm={6}>
                                <CustomTextField
                                    label={`Team member ${index + 1} (Add username/email)`}
                                    value={value}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Paper>)}

            <Paper elevation={3} style={styles.paper}>
                <Typography variant="h5" align="left">Project Information</Typography>

                <PrivateCheckbox
                    isPrivate={isPrivate}
                    setIsPrivate={setIsPrivate}
                />

                <CustomTextField
                    label="Project Description"
                    value={pdesc}
                    onChange={(e) => setPdesc(e.target.value)}
                />
                <CustomTextField
                    label="Source Code Link"
                    value={gitHubLink}
                    onChange={(e) => setGithubLink(e.target.value)}
                />
                <CustomTextField
                    label="Deployed Link"
                    value={pUrl}
                    onChange={(e) => setPurl(e.target.value)}
                />

                <TagTextField
                    tags={tags}
                    setTags={setTags}
                />

                <div style={styles.uploadImage}>
                    <LogoUploader
                        plogo={plogo}
                        setPlogo={setPlogo}
                    />
                    <ImageUploader
                        pimage={pimage}
                        setPimage={setPimage}
                    />
                </div>


            </Paper>
            <MyButton
                text="Submit"
                color="black"
                onClick={handleSubmit}
            />

        </>

    )
}

export default AddProject;