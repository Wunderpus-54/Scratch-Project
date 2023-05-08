import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import CreateEntry from './CreateEntry.jsx';
import DisplayEntry from './displayCards/DisplayEntry.jsx';
import Axios from 'axios';


const Profile = (props) => {
    console.log('I am in Profile', props.userName);
    const userName = props.userName;
    // const userName = userObject.slice(0, userObject.length)
    // console.log('Profile.jsx', userName);
    const [entries, getEntries] = useState([]);

    useEffect(() => {
        getAllEntries();
    }, []);

    const getAllEntries = () => {
        Axios.get(`http://localhost:3000/api/entry/${userName}`)
          .then((res) => {
            const allEntries = res.data;
            console.log('all entries', allEntries);
            getEntries(allEntries);
          })
          .catch((err) => console.log(`Error: ${err}`));
    }
    
    return (
        <div className='profile'>
            <h1 className='title'> MoodSwings </h1>
            <CreateEntry userName={userName}/>
            <DisplayEntry entries={entries}/>
        </div>
    )
}



export default Profile;