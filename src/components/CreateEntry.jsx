import React from 'react';
import { useNavigate, Link } from 'react-router-dom';


const CreateEntry = (props) => {
    const userName = props.userName;
    console.log('In CreateEntry', userName);
    let navigate = useNavigate();
    const handleClicks = () => {
        const iLearned = document.querySelector('#iLearned').value;
        const journal = document.querySelector('#entry').value;
        const moodScaler = document.querySelector('#moodScaler').value;

        const body = {
            userName: userName,
            iLearned: iLearned,
            journal: journal,
            moodScaler: moodScaler
        }

        fetch(`http://localhost:3000/api/entry/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then((response) => response.json()).then((data) => {
            console.log('data has fetched', data);
        })
    }
    return(
        <div className='createEntry'>
            <input
                type='text'
                id='iLearned'
                placeholder='Things I learned today...'
            />
            <textarea
                id='entry'
                placeholder='Journal Entry'>
            </textarea>
            <select name='moodScaler' id='moodScaler'>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>
            <button onClick={handleClicks}>Submit</button>
        </div>
    )

}



export default CreateEntry;