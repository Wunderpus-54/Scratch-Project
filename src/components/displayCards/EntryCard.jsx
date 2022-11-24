import React from 'react';
import Axios from 'axios';



//date
//ilearned
//entry itself
//mood scaler (1-3)
const EntryCard = (entries) => {
    const { date, moodScaler, iLearned, journal } = entries;

    const delCard = () => {
        Axios.delete('http://localhost:3000/api/entry/');
        console.log('deleted card')
    }

    return (
        <div className='entries'>
            <div>
                <p>Date: { date }</p>
                <p>Mood: { moodScaler }</p>
            </div>
            <div>
                <p>iLearned: { iLearned } </p>
            </div>
            <div>
                <p>{journal}</p>
            </div>
            <div className='delButton'>
                <button onClick={delCard} className='deleteButton'>Delete</button>
            </div>
        </div>
    );
}

export default EntryCard;