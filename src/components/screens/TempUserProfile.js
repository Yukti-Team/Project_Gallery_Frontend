import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiURL from '../GetUrl';

const UserPage = () => {

    const { userId } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        getUserById(userId);
    }, [userId])

    const getUserById = async (userId) => {
        const id = userId;

        try {
            let result = await fetch(`${ApiURL}/user/${id}`);
            result = await result.json();

            setUser(result);
        } catch (error) {
            console.log("Error while fetching data:", error);
        }
    }


    return (
        <div style={{ margin: "5%" }}>
            <Typography variant='h5' align='left'>User Id:- {user._id}</Typography>
            <Typography variant='h5' align='left'>Username:- {user.username}</Typography>
            <Typography variant='h5' align='left'>User email:- {user.email}</Typography>
        </div>

    );
}

export default UserPage;