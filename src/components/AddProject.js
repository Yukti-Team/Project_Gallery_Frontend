import React, { useState } from "react";


const AddProject = ()=>{

    //extra details
    const [ownname, setOwnname] = useState("");
    const [phoneno, setPhoneNo] = useState("");
    const [teamsize, setTeamsize] = useState("");



    const [pname, setPname] = useState("");
    const [pimage, setPimage] = useState("");
    const [plogo, setPlogo] = useState("");
    const [pdesc, setPdesc] = useState("");
    const [stack, setStack] = useState("");
    const [gitHub, setGithub] = useState("");
    const [pUrl, setPurl] = useState("");
    const [ownerId, setOwnerid] = useState("");
    const [isPrivate, setIsprivate] = useState("");
    const [isGroup, setIsgroup] = useState("");
    const [groupArray, setGroupArray] = useState("");
    const [branch, setBranch] = useState("");
    const [domain, setDomain] = useState("");
    const [year, setYear] = useState("");
    const [status, setStatus] = useState("");
    const [rating, setRating] = useState("");

    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
        { label: 'Option 4', value: 'option4' },
      ];

    return (
        <div>
            <h1 style={{"font-weight":"500"}}>Add Project</h1>
            <h2 style={{"font-weight":"200"}}>Let your creativity shine and inspire others to embark their journey of innovation</h2>
            <div className="form">
            <form >
                {/* <label for="pname">Project Name</label> */}
                <div className="formgrid">
                <input className="formBox" type="text"
                value={pname} onChange={(e) => setPname(e.target.value)}  placeholder=" Title*" required/>
                <input className="formBox" type="text"
                value={ownname} onChange={(e) => setOwnname(e.target.value)}  placeholder=" Name of team_leader*" required/>
                <input className="formBox" type="text"
                value={phoneno} onChange={(e) => setPhoneNo(e.target.value)}  placeholder=" Mobile Number (9579970159)*" required/>
                <input className="formBox" type="text"
                value={teamsize} onChange={(e) => setTeamsize(e.target.value)}  placeholder=" Team size (1 if individual)*" required/>


                {/* Add dropdowns */}
                {/* <label for="branch" >Department</label> */}
                <input className="formBox" type="text"
                value={branch} onChange={(e) => setBranch(e.target.value)}  placeholder=" Branch*" required/>

                <input className="formBox" type="text"
                value={domain} onChange={(e) => setDomain(e.target.value)}  placeholder=" Domain (Ex: Robotics)*" required/>

                <input className="formBox" type="text"
                value={year} onChange={(e) => setYear(e.target.value)}  placeholder=" (Btech) First Year*" required/>

                <input className="formBox" type="text"
                value={status} onChange={(e) => setStatus(e.target.value)}  placeholder=" Project Status (pending)*" required/>
                </div>

            </form>    
            </div>
        </div>
    
    )
}

export default AddProject;