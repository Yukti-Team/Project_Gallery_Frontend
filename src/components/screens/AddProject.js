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

                <PrivateCheckbox />

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

                <TagTextField />

                <div style={styles.uploadImage}>
                    <LogoUploader />
                    <ImageUploader />
                </div>


            </Paper>
            <MyButton
                text="Submit"
                color="black"
                onClick={handleSubmit}
            />

            {/* 
            <div className="form2" style={{ marginTop: "0.5vh" }}>
                <div className="labeledDiv" style={{ marginBottom: "1.5vh" }}>
                    <label className="formLabels">Description</label>
                    <textarea className="textArea" type="text" value={pdesc} onChange={(e) => setPdesc(e.target.value)} required style={{ marginBottom: "0.5rem" }} />
                </div>

                <div className="labeledDiv">
                    <label className="formLabels">Team Members (incase of team project)</label>
                    <input className="formBox2" type="text" value={teammem} onChange={(e) => setTeamMem(e.target.value)} required />
                </div>

                <div className="labeledDiv">
                    <label className="formLabels">Source Code Link</label>
                    <input className="formBox2" type="text" value={gitHubLink} onChange={(e) => setGithubLink(e.target.value)} required />
                </div>

                <div className="labeledDiv">
                    <label className="formLabels">Deployment Link</label>
                    <input className="formBox2" type="text" value={pUrl} onChange={(e) => setPurl(e.target.value)} required />
                </div>



                <div className="uploadGrid">
                    <div className="labeledDiv">
                        <label className="formLabels">Upload Project Logo</label>
                        <div className="uploadDiv">
                            <input
                                style={{ marginLeft: "2vh" }}
                                accept="image/*"
                                multiple
                                type="file"
                            />
                        </div>
                    </div>

                    <div className="labeledDiv" style={{ marginBottom: "3vh" }}>
                        <label className="formLabels">Upload Project UI Designs</label>
                        <div className="uploadDiv">
                            <input
                                style={{ marginLeft: "2vh" }}
                                accept="image/*"
                                multiple
                                type="file"
                            />
                        </div>
                    </div>


                </div>


                <div style={{ marginLeft: "-0.5vw", border: "grey" }}>
                    <StackList stack={stack} setStack={setStack} />
                </div>


                <Box display="flex" justifyContent="left" alignItems="left" height={40} width={600} marginLeft={0.5} marginTop={10} marginBottom={10}>
                    <Box>
                        <FormControlLabel
                            label='Do you want this project to remain private'
                            control={<Checkbox checked={!isPrivate} onChange={handleCheckbox} />}
                        />
                    </Box>
                </Box>

                <MyButton text="Submit" />
            </div> 
            */}

        </>

        // <div >

        //     <div >
        //         {/* add an image */}
        //         {/* <img src={ProjectBg} alt={'hello'} style={{ width: "50vw", height: "40vh", marginTop: "2vh" }} /> */}
        //         <h1>Add Project</h1>
        //         <h2 style={{ "font-weight": "400" }}>Let your creativity shine and inspire others to embark their journey of innovation</h2>
        //         <div className="form">
        //             <form >
        //                 {/* <label for="pname">Project Name</label> */}
        //                 <div className="formgrid">
        //                     {/* <input className="formBox" type="text"
        //                         value={pname} onChange={(e) => setPname(e.target.value)} placeholder=" Title*" required /> */}

        //                     <CustomTextField
        //                         label="Title"
        //                         value={pname}
        //                         onChange={(e) => setPname(e.target.value)}
        //                     />
        //                     <TextField
        //                         //add styling later on
        //                         label="Title*"
        //                         value={pname}
        //                         onChange={(e) => setPname(e.target.value)}
        //                         InputProps={{
        //                             style: { backgroundColor: 'white' },
        //                         }}
        //                         InputLabelProps={{
        //                             style: { color: 'grey' },
        //                         }}
        //                     />
        //                     <TextField
        //                         //add styling later on
        //                         label="Teamsize"
        //                         value={teamsize}
        //                         onChange={(e) => setTeamsize(e.target.value)}
        //                         InputProps={{
        //                             style: { backgroundColor: 'white' },
        //                         }}
        //                         InputLabelProps={{
        //                             style: { color: 'grey' },
        //                         }}
        //                     />


        //                     <TextField
        //                         //add styling later on
        //                         label="Team Leader"
        //                         value={ownname}
        //                         onChange={(e) => setOwnname(e.target.value)}
        //                         InputProps={{
        //                             style: { backgroundColor: 'white' },
        //                         }}
        //                         InputLabelProps={{
        //                             style: { color: 'grey' },
        //                         }}
        //                     />

        //                     <TextField
        //                         //add styling later on
        //                         label="Phone No."
        //                         value={phoneno}
        //                         onChange={(e) => setPhoneNo(e.target.value)}
        //                         InputProps={{
        //                             style: { backgroundColor: 'white' },
        //                         }}
        //                         InputLabelProps={{
        //                             style: { color: 'grey' },
        //                         }}
        //                     />
        //                     <TextField
        //                         //add styling later on
        //                         label="Project Guide"
        //                         value={guide}
        //                         onChange={(e) => setGuide(e.target.value)}
        //                         InputProps={{
        //                             style: { backgroundColor: 'white' },
        //                         }}
        //                         InputLabelProps={{
        //                             style: { color: 'grey' },
        //                         }}
        //                     />
        //                     <TextField
        //                         //add styling later on
        //                         label="Guide Email"
        //                         value={guideemail}
        //                         onChange={(e) => setGuideEmail(e.target.value)}
        //                         InputProps={{
        //                             style: { backgroundColor: 'white' },
        //                         }}
        //                         InputLabelProps={{
        //                             style: { color: 'grey' },
        //                         }}
        //                     />
        //                     <TextField
        //                         //add styling later on
        //                         label="Project Sponsorer"
        //                         value={sponsor}
        //                         onChange={(e) => setSponsor(e.target.value)}
        //                         InputProps={{
        //                             style: { backgroundColor: 'white' },
        //                         }}
        //                         InputLabelProps={{
        //                             style: { color: 'grey' },
        //                         }}
        //                     />
        //                     <TextField
        //                         //add styling later on
        //                         label="Sponsorer Email"
        //                         value={sponsorEmail}
        //                         onChange={(e) => setSponsorEmail(e.target.value)}
        //                         InputProps={{
        //                             style: { backgroundColor: 'white' },
        //                         }}
        //                         InputLabelProps={{
        //                             style: { color: 'grey' },
        //                         }}
        //                     />






        //                     {/* Add dropdowns */}
        //                     <div className="labeledBox">
        //                         <label for="branch" className="formLabels">Department</label>
        //                         <CustomDropdown
        //                             value={branch}
        //                             setValue={setBranch}
        //                             options={['CSE', 'IT', 'Entc', 'Mech', 'Civil', 'Electrical']}

        //                         />
        //                     </div>

        //                     <div className="labeledBox">
        //                         <label for="domain" className="formLabels">Project Domain</label>
        //                         <CustomDropdown
        //                             value={domain}
        //                             setValue={setDomain}
        //                             options={['Web Dev', 'Android Dev', 'ML', 'AI']}

        //                         />
        //                     </div>

        //                     <div className="labeledBox">
        //                         <label for="year" className="formLabels">Year of study</label>
        //                         <CustomDropdown
        //                             value={year}
        //                             setValue={setYear}
        //                             options={['2023', '2022', '2021']}

        //                         />
        //                     </div>


        //                     <div className="labeledBox">
        //                         <label for="status" className="formLabels">Project Status</label>
        //                         <CustomDropdown
        //                             value={status}
        //                             setValue={setStatus}
        //                             options={['Pending', 'In Progress', 'Completed']}
        //                             width="34.7rem"
        //                         />
        //                     </div>



        //                 </div>

        //             </form>
        //         </div>
        //     </div>


        // {/* ---------------------------------------------------------------------------------------------------------------- */ }




        // </div >


    )
}

export default AddProject;