import React, { useState } from "react";
import { Button, CircularProgress, Grid, Paper, Typography } from '@mui/material'
import { useNavigate } from "react-router-dom";

import { storage } from "../FirebaseConfig.js"; // import your Firebase configuration here
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import imageCompression from "browser-image-compression";

import CustomTextField from "../widgets/CustomTextField";
import CustomDropDown2 from "../widgets/CustomDropdown2";
import LogoUploader from "../widgets/LogoUploader";
import ImageUploader from "../widgets/ImageUploader";
import TagTextField from "../widgets/TagTextField";
import PrivateCheckbox from "../widgets/PrivateCheckBox";
import ApiURL from "../GetUrl";
import Popup from "../widgets/Popup.js";


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
    const navigate = useNavigate();

    const auth = JSON.parse(localStorage.getItem("user"));
    const userName = auth && auth.username;
    const ownerId = auth && auth._id;

    //extra details
    const [pimagesFile, setPimagesFile] = useState([]);
    const [pimages, setPimages] = useState([]);
    const [plogoFile, setPlogoFile] = useState(null);
    const [plogo, setPlogo] = useState(null);
    const [tags, setTags] = useState([]);
    const [isPrivate, setIsPrivate] = useState(false);
    const [groupArray, setGroupArray] = useState(Array(4).fill(''));

    const [phoneno, setPhoneNo] = useState("8326468462");
    const [teamsize, setTeamsize] = useState(1);
    const [guide, setGuide] = useState("DBK");
    const [guideEmail, setGuideEmail] = useState("dbk@gmail.com");
    const [sponsor, setSponsor] = useState("Rathi");
    const [sponsorEmail, setSponsorEmail] = useState("rathi@gmail.com");
    const [pname, setPname] = useState("Notice Board");
    const [pdesc, setPdesc] = useState("Greate Project");
    const [gitHubLink, setGithubLink] = useState("https://github.com/suyog73");
    const [pUrl, setPurl] = useState("https://github.com/suyog73");
    const [selectedFilters, setSelectedFilters] = useState({});
    const [anchorEl, setAnchorEl] = useState({});



    
    const [loading, setLoading] = useState(false);

    const handleFilterClick = (event, label) => {
        setAnchorEl((prevState) => ({ ...prevState, [label]: event.currentTarget }));
    };

    const handleFilterClose = (label, option) => {
        setSelectedFilters((prevState) => ({ ...prevState, [label]: option }));
        setAnchorEl((prevState) => ({ ...prevState, [label]: null }));
    };


    // Team members list
    const handleChange = (index, value) => {
        const newgroupArray = [...groupArray];
        newgroupArray[index] = value;
        setGroupArray(newgroupArray);
    };

    const handleSubmit = async (event) => {

        event.preventDefault();
        // console.log("plogo");
        // console.log(plogoFile);

        let img;

        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
        };

        try {

            setLoading(true);
            img = await imageCompression(plogoFile, options);

            // Upload images to Firebase Storage
            const storageRef = ref(
                storage,
                `logo/${Date.now().toString()}`
            );
            const metadata = { contentType: img.type };
            await uploadBytesResumable(storageRef, img, metadata);
            const urlC = await getDownloadURL(storageRef);

            setPlogo(urlC);

            // console.log(urlC);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }


        try {
            setLoading(true);
            const compressedImages = await Promise.all(
                pimagesFile.map((image) => imageCompression(image, options))
            );

            const storagePromises = compressedImages.map(async (image) => {
                const storageRef = ref(
                    storage,
                    `appImages/${Date.now().toString()}`
                );
                const metadata = { contentType: image.type };

                await uploadBytesResumable(storageRef, image, metadata);

                return await getDownloadURL(storageRef);
            });

            const urls = await Promise.all(storagePromises);
            setPimages(urls);

            // console.log(pimagesFile);
            // console.log(urls);

        } catch (error) {
            setLoading(false);

            console.log(error);
        }

        const projectToUpload = {
            pname,
            pimages,
            plogo,
            pdesc,
            tags,
            gitHubLink,
            pUrl,
            ownerId,
            isPrivate,
            groupArray: (groupArray[0] !== '') ? groupArray : [],
            branch: selectedFilters[filterOptions[0]["label"]],
            domain: selectedFilters[filterOptions[1]["label"]],
            year: selectedFilters[filterOptions[2]["label"]],
            status: selectedFilters[filterOptions[3]["label"]],
            sponsor,
            sponsorEmail,
            guide,
            guideEmail,
        };

        try {
            setLoading(true);
            let result = await fetch(`${ApiURL}/project/create`, {
                method: 'post',
                body: JSON.stringify(projectToUpload),
                headers: {
                    'Content-Type': 'application/json'
                },
            })

            result = await result.json();
            const statusCode = result.statusCode;

            if (statusCode === 200) {
                setLoading(false);
                navigate("/allprojects")
            }

        } catch (error) {
            setLoading(false);
            console.log(error.message);
        }
        setLoading(false);

    };



    return (
        <> 
            {loading && <Popup isLoading={loading} />}
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
                            value={guideEmail}
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

                <TagTextField tags={tags} setTags={setTags} />


                <div style={styles.uploadImage}>
                    <LogoUploader
                        plogo={plogoFile}
                        setPlogo={setPlogoFile}
                    />

                    <ImageUploader
                        pimages={pimagesFile}
                        setPimages={setPimagesFile}
                    />
                </div>


            </Paper>

            <Button
                type="submit"
                variant="contained"
                style={{
                    marginTop: "20px", backgroundColor: "black", marginBottom: "30px"
                }}

                onClick={handleSubmit}
            >
                {loading && <CircularProgress style={{ color: "white" }} size={24} />}
                {!loading && 'Submit'}

            </Button>



        </>
    )
}

export default AddProject;