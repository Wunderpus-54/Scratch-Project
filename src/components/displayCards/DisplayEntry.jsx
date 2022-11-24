import React from 'react';
import EntryCard from './EntryCard.jsx';


const DisplayEntry = (props) => {
    const { entries } = props;

    console.log(entries);

    return (
        <section className='displayEntry'>
            <h3>My Entries</h3>
            {entries.map((entry, i) => {
                return (
                 <div key={i}>
                     <EntryCard date={entry.date} moodScaler={entry.moodScaler} iLearned={entry.iLearned} journal={entry.journal} />
                 </div>
                );
            })}
        </section>
    );
}

export default DisplayEntry;

// [
//     {
//         "_id": "637d733573394653590f024d",
//         "userName": "beep",
//         "iLearned": "how to breathe",
//         "journal": "inhale and then exhale. wow. amazing.",
//         "moodScaler": 3,
//         "__v": 0
//     },
//     {
//         "_id": "637d736e73394653590f0251",
//         "userName": "beep",
//         "iLearned": "make this work",
//         "journal": "send this and give me a response",
//         "moodScaler": 2,
//         "__v": 0
//     }
// ]