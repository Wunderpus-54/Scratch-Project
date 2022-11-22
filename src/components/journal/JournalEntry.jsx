import React from "react"
import axios from 'axios'


const JournalEntry = () => {
  let myData;
  axios.get('/api')
    .then((res) => {
      console.log(res.data);
      myData = res.data;
    })
  return (
    <div>{myData}</div>
  )
}

export default JournalEntry;