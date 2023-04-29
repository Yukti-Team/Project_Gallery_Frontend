import React, { useState } from "react";
import { Alert, Button, CircularProgress, Grid, Paper, Snackbar, Typography } from '@mui/material'
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
        options: ['Computer Science', 'Information Technology', 'Electronics', 'Mechanical', 'Civil', 'Electrical'],
    },
    {
        label: 'Project Domain',
        options: ['Web Development', 'Android Development', 'Machine Learning', 'Artificial Intelligence'],
    },
    {
        label: 'Year of study',
        options: ['2023', '2022', '2021'],
    },
    {
        label: 'Project Status',
        options: ['Pending', 'In Progress', 'Completed'],
    },

];


const AddProject = () => {
    const navigate = useNavigate();

    const auth = JSON.parse(localStorage.getItem("user"));
    const userName = auth && auth.username;
    const ownerId = auth && auth._id;

    //extra details
    const [pimagesFile, setPimagesFile] = useState([]);
    const [, setPimages] = useState([]);
    const [plogoFile, setPlogoFile] = useState(null);
    // const [plogo, setPlogo] = useState(null);
    const [tags, setTags] = useState([]);
    const [isPrivate, setIsPrivate] = useState(false);
    const [groupArray, setGroupArray] = useState(Array(4).fill(''));

    const [phoneno, setPhoneNo] = useState("8329763258");
    const [teamsize, setTeamsize] = useState(1);
    const [guide, setGuide] = useState("Dr. D.B. Kulkarni");
    const [guideEmail, setGuideEmail] = useState("dinesh.kulkarni@walchandsangli.ac.in");
    const [sponsor, setSponsor] = useState("");
    const [sponsorEmail, setSponsorEmail] = useState("");
    const [pname, setPname] = useState("Digital Notice Board");
    const [pdesc, setPdesc] = useState("The application helps to digitalize the process of creating notices and circulating them among the students. Many teachers face problems with circulating the notices among students. One of the major problems the faculties face is keeping track of the number of students who have acknowledged the notice in offline mode. So our application helps to solve these problems and make the notice circulation among the targeted group hassle free for the students as well as the teachers.");
    const [gitHubLink, setGithubLink] = useState("https://github.com/suyog73/Digital-Notice-Board");
    const [pUrl, setPurl] = useState("https://drive.google.com/file/d/1RCTSzvuz-_hu6I0RTIIiE-aoUKezhraF/view?usp=sharing");
    const [selectedFilters, setSelectedFilters] = useState({});
    const [anchorEl, setAnchorEl] = useState({});
    const [showError, setShowError] = useState(false);

    const [errors, setErrors] = useState({
        pname: "",
        teamsize: "",
        phoneno: "",
        guide: "",
        guideEmail: "",
        department: "",
        domain: "",
        year: "",
        status: "",
        pdesc: "",
        gitHubLink: "",
        pUrl: "",
        tags: "",
        plogo: "",
        pimages: "",
    });
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

    const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
    };

    async function uploadLogo() {
        let img;

        if (!plogoFile)
            return "";

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

            return urlC;
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    async function uploadProjectImages() {
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

            return urls;
        } catch (error) {
            setLoading(false);

            console.log(error);
        }
    }

    const mapLabel = {
        0: "department",
        1: "domain",
        2: "year",
        3: "status",
    };

    function handleErrors() {
        let newErrors = {};

        if (!pname) {
            newErrors.pname = "Title is required"
        }
        if (!teamsize) {
            newErrors.teamsize = "Team size is reuired"
        } else if (teamsize < 1 || teamsize > 5) {
            newErrors.teamsize = "Team size must be range of 1 to 4"
        }

        if (!phoneno) {
            newErrors.phoneno = "Phone is required";
        } else if (!/^\d{10}$/.test(phoneno)) {
            newErrors.phoneno = "Phone must be 10 digits";
        }

        if (!guide) {
            newErrors.guide = "Guide name is required";
        }

        if (!guideEmail) {
            newErrors.guideEmail = "Guide email is required";
        }

        if (!selectedFilters[filterOptions[0]["label"]]) {
            newErrors.department = "Select department from dropdown";
        }

        if (!selectedFilters[filterOptions[1]["label"]]) {
            newErrors.domain = "Select Project Domain from dropdown";
        }

        if (!selectedFilters[filterOptions[2]["label"]]) {
            newErrors.year = "Select Year from dropdown";
        }

        if (!selectedFilters[filterOptions[3]["label"]]) {
            newErrors.status = "Select Status from dropdown";
        }

        if (!pdesc) {
            newErrors.pdesc = "Description of project is required";
        }

        if (!tags) {
            newErrors.tags = "Add at least 1 tag";
        }

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0)
            return false;

        return true;
    }

    const handleSubmit = async (event) => {

        event.preventDefault();
        setShowError(handleErrors());

        console.log(handleErrors());

        if (!handleErrors()) {

            let urlC = await uploadLogo();
            const urls = await uploadProjectImages();

            if (urlC === "")
                urlC = "https://firebasestorage.googleapis.com/v0/b/project-gallery-bbc79.appspot.com/o/logo.jpg?alt=media&token=1e6bf98e-38c3-4225-95da-569614c2767e";

            const today = new Date();
            const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

            const projectToUpload = {
                pname,
                pimages: urls,
                plogo: urlC,
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
                createdAt: date,
            };

            console.log(projectToUpload);
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
        }
    };

    return (
        <>
            <Snackbar
                open={showError}
                autoHideDuration={2000}
                onClose={() => setShowError(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    elevation={6}
                    variant="filled"
                    onClose={() => setShowError(false)}
                    severity="error"
                >
                    Please fill all mandatory fields
                </Alert>
            </Snackbar>
            {loading && <Popup isLoading={loading} />}

            <Typography variant="h5" align="center" style={{ marginTop: "2%", color: "black" }}>
                Let your creativity shine and inspire others to embark their journey of innovation
            </Typography>

            <Paper elevation={3} style={styles.paper}>

                <Typography variant="h5" align="left" style={{ marginBottom: "-2%" }}>Team Information</Typography>
                <Grid container spacing={2} marginTop={2}>
                    <Grid item xs={12} sm={6}>

                        <CustomTextField
                            label="Title"
                            value={pname}
                            errorMessage={errors.pname}
                            onChange={(e) => setPname(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                            label="Team Size (Including leader)"
                            value={teamsize}
                            errorMessage={errors.teamsize}
                            onChange={(e) => setTeamsize(e.target.value)}
                        />
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
                            errorMessage={errors.phoneno}
                            onChange={(e) => setPhoneNo(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                            label="Project Guide"
                            value={guide}
                            errorMessage={errors.guide}
                            onChange={(e) => setGuide(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                            label="Guide Email"
                            value={guideEmail}
                            errorMessage={errors.guideEmail}
                            onChange={(e) => setGuideEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                            label="Project Sponsor"
                            value={sponsor}
                            onChange={(e) => setSponsor(e.target.value)}
                            isRequired={false}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                            label="Sponsor Email"
                            value={sponsorEmail}
                            onChange={(e) => setSponsorEmail(e.target.value)}
                            isRequired={false}
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
            {teamsize > 1 && teamsize < 5 && (
                <Paper elevation={3} style={styles.paper}>
                    <Typography variant="h5" align="left">Team Information</Typography>
                    <Grid container spacing={2}>
                        {Array.from({ length: teamsize - 1 }, (value, index) => (
                            <Grid item key={index} xs={12} sm={6}>
                                <CustomTextField
                                    label={`Team member ${index + 1} (Add username/email)`}
                                    value={value}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    errorMessage={errors[mapLabel[index]]}
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
                    errorMessage={errors.pdesc}
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
                    isRequired={false}

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