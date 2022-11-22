import React, { useState } from 'react';
import axios from 'axios'


const JournalForm = () => {
  const [entryData, setEntryData] = useState({
    date: '', moodScaler: '', iLearned: ''
  })


    const handleFormSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3000/entry/createEntry', entryData)
        .then((res) => console.log(res.data))
    }

    return (
        <div className='journal-form'>
        <form onSubmit={handleFormSubmit}>    
            <div>
                <label>Date:</label>
                <input type='date' placeholder= 'Date' onChange = {(e) => setEntryData({...entryData, date: e.target.value})}/>
            </div>
            <div>
                <label>Rating:</label>
                <input type='text' placeholder= 'Rating' onChange={(e) => setEntryData({...entryData, moodScaler: e.target.value})}/>
            </div>
               <div>
                <label>Entry:</label>
                <textarea type='text' placeholder= 'Journal Entry' onChange={(e) => setEntryData({...entryData, iLearned: e.target.value})}/>
            </div>
            <input type = 'submit' value = 'Submit'/>
        </form>
        </div>
    )
}






export default JournalForm;