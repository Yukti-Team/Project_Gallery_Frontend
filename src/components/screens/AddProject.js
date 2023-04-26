import React, { useEffect, useState } from "react";
import CustomDropdown from "../widgets/CustomDropdown";
import StackList from "../widgets/StackInput";
import { Box, FormControlLabel, Checkbox, TextField } from '@mui/material'
import MyButton from "../widgets/MyButton";



const AddProject = () => {

    //extra details
    const [ownname, setOwnname] = useState("");
    const [phoneno, setPhoneNo] = useState("");
    const [teamsize, setTeamsize] = useState(1);
    const [guide, setGuide] = useState("");
    const [guideemail, setGuideEmail] = useState("");
    const [sponsor, setSponsor] = useState("");
    const [sponsoremail, setSponsorEmail] = useState("");



    const [pname, setPname] = useState("");
    const [pimage, setPimage] = useState("");
    const [plogo, setPlogo] = useState("");
    const [pdesc, setPdesc] = useState("");
    const [stack, setStack] = useState([]);
    const [gitHub, setGithub] = useState("");
    const [pUrl, setPurl] = useState("");
    const [ownerId, setOwnerid] = useState("");

    //create a checkbox for this
    const [isPrivate, setIsprivate] = useState("");

    //check how to set isGroup value    
    let [isGroup, setIsgroup] = useState(false);
    const [groupArray, setGroupArray] = useState([]);
    const [branch, setBranch] = useState("");
    const [domain, setDomain] = useState("");
    const [year, setYear] = useState("");
    const [status, setStatus] = useState("");
    const [rating, setRating] = useState("");


    // const handleSetStack = (newStack) => {
    //     setStack(newStack);
    //     console.log(stack);
    // };

    // useEffect(() => {
    //     console.log(branch)
    //     console.log(domain)
    //     console.log(year)
    //     console.log(status)
    // }, [branch, domain, year, status])





    // const createInputFields = (size) => {
    //     const inputs = [];
    //     let newGroupArray = [ownname];
    //     for (let i = 1; i < size; i++) {
    //         inputs.push(
    //             <input
    //                 key={i}
    //                 type="text"
    //                 placeholder={`Team member ${i + 1}`}
    //                 onChange={(e) => {
    //                     newGroupArray = [...groupArray];
    //                     newGroupArray[i] = e.target.value;
    //                     setGroupArray(newGroupArray);
    //                 }}
    //             />
    //         );
    //     }
    //     return inputs;
    // };

    const handleCheckbox = () => {

        setIsprivate((prevState) => !prevState);
        console.log(isPrivate);
    }

    useEffect(() => {
        if (teamsize > 1) {
          setIsgroup(true);
          console.log(isGroup);
        } else {
          setIsgroup(false);
          console.log(isGroup);
        }
      }, [teamsize]);
  

    useEffect(()=>{
        console.log(stack);
    },[stack])


    return (

        <div >

            <div >
                <h1 style={{ "font-weight": "500" }}>Add Project</h1>
                <h2 style={{ "font-weight": "200" }}>Let your creativity shine and inspire others to embark their journey of innovation</h2>
                <div className="form">
                    <form >
                        {/* <label for="pname">Project Name</label> */}
                        <div className="formgrid">
                            {/* <input className="formBox" type="text"
                                value={pname} onChange={(e) => setPname(e.target.value)} placeholder=" Title*" required /> */}
                            <TextField
                                //add styling later on
                                label="Title*"
                                value={pname}
                                onChange={(e) => setPname(e.target.value)}
                                InputProps={{
                                    style: { backgroundColor: 'white' },
                                }}
                                InputLabelProps={{
                                    style: { color: 'grey' },
                                }}
                            />
                            <TextField
                                //add styling later on
                                label="Teamsize"
                                value={teamsize}
                                onChange={(e) => setTeamsize(e.target.value)}
                                InputProps={{
                                    style: { backgroundColor: 'white' },
                                }}
                                InputLabelProps={{
                                    style: { color: 'grey' },
                                }}
                            />


                            <TextField
                                //add styling later on
                                label="Team Leader"
                                value={ownname}
                                onChange={(e) => setOwnname(e.target.value)}
                                InputProps={{
                                    style: { backgroundColor: 'white' },
                                }}
                                InputLabelProps={{
                                    style: { color: 'grey' },
                                }}
                            />

                            <TextField
                                //add styling later on
                                label="Phone No."
                                value={phoneno}
                                onChange={(e) => setPhoneNo(e.target.value)}
                                InputProps={{
                                    style: { backgroundColor: 'white' },
                                }}
                                InputLabelProps={{
                                    style: { color: 'grey' },
                                }}
                            />
                            <TextField
                                //add styling later on
                                label="Project Guide"
                                value={guide}
                                onChange={(e) => setGuide(e.target.value)}
                                InputProps={{
                                    style: { backgroundColor: 'white' },
                                }}
                                InputLabelProps={{
                                    style: { color: 'grey' },
                                }}
                            />
                            <TextField
                                //add styling later on
                                label="Guide Email"
                                value={guideemail}
                                onChange={(e) => setGuideEmail(e.target.value)}
                                InputProps={{
                                    style: { backgroundColor: 'white' },
                                }}
                                InputLabelProps={{
                                    style: { color: 'grey' },
                                }}
                            />
                            <TextField
                                //add styling later on
                                label="Project Sponsorer"
                                value={sponsor}
                                onChange={(e) => setSponsor(e.target.value)}
                                InputProps={{
                                    style: { backgroundColor: 'white'},
                                }}
                                InputLabelProps={{
                                    style: { color: 'grey' },
                                }}
                            />
                            <TextField
                                //add styling later on
                                label="Sponsorer Email"
                                value={sponsoremail}
                                onChange={(e) => setSponsorEmail(e.target.value)}
                                InputProps={{
                                    style: { backgroundColor: 'white' },
                                }}
                                InputLabelProps={{
                                    style: { color: 'grey' },
                                }}
                            />






                            {/* Add dropdowns */}
                            <div className="labeledBox">
                                <label for="branch" className="formLabels">Department</label>
                                <CustomDropdown
                                    value={branch}
                                    setValue={setBranch}
                                    options={['CSE', 'IT', 'Entc', 'Mech', 'Civil', 'Electrical']}

                                />
                            </div>

                            <div className="labeledBox">
                                <label for="domain" className="formLabels">Project Domain</label>
                                <CustomDropdown
                                    value={domain}
                                    setValue={setDomain}
                                    options={['Web Dev', 'Android Dev', 'ML', 'AI']}

                                />
                            </div>

                            <div className="labeledBox">
                                <label for="year" className="formLabels">Year of study</label>
                                <CustomDropdown
                                    value={year}
                                    setValue={setYear}
                                    options={['2023', '2022', '2021']}

                                />
                            </div>


                            <div className="labeledBox">
                                <label for="status" className="formLabels">Project Status</label>
                                <CustomDropdown
                                    value={status}
                                    setValue={setStatus}
                                    options={['Pending', 'In Progress', 'Completed']}
                                    width="34.7rem"
                                />
                            </div>

                        </div>

                    </form>
                </div>
            </div>


            {/* ---------------------------------------------------------------------------------------------------------------- */}

            <div className="form2" style={{ marginTop: "0.5vh" }}>
                <div className="labeledDiv" style={{ marginBottom: "1.5vh" }}>
                    <label className="formLabels">Description</label>
                    <textarea className="textArea" type="text" value={pdesc} onChange={(e) => setPdesc(e.target.value)} required style={{ marginBottom: "0.5rem" }} />
                </div>

                <div className="labeledDiv">
                    <label className="formLabels">Source Code Link</label>
                    <input className="formBox2" type="text" value={gitHub} onChange={(e) => setGithub(e.target.value)} required />
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
                    <StackList stack={stack} setStack={setStack}/>
                </div>


                <Box display="flex" justifyContent="left" alignItems="left" height={40} width={600} marginLeft={0.5} marginTop={10} marginBottom={10}>
                    <Box>
                        <FormControlLabel
                            label='Do you want this project to remain private'
                            control={<Checkbox checked={isPrivate} onChange={handleCheckbox} />}
                        />
                    </Box>
                </Box>

                <MyButton text="Submit" />
            </div>



        </div>


    )
}

export default AddProject;