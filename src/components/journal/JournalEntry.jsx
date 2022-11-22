import React, { useEffect } from "react"
import axios from 'axios'
import { Card, CardHeader, CardBody, CardFooter, Button } from '@chakra-ui/react'
import { format, compareAsc } from 'date-fns'

const JournalEntry = (prop) => {
  // const date = format(new Date(prop.entry.date))
  // console.log(date);
  console.log(prop);
  // have onclick function here
  // onclick will send delete request to server which will find one and delete this entry
  const handleClick = () => {
    axios.delete(`http://localhost:3000/entry/deleteEntry/${prop.entry._id}`)
      .then((res) => console.log('we deleted', res.data))
  }

  
  return (
    <div>
      {/* <h1> test </h1> */}
       <Card variant = 'elevated' size = 'sm' margin = {3} padding = {3}>
        <CardHeader>{prop.entry.iLearned}</CardHeader>
        <CardBody>{prop.entry.moodScaler}</CardBody>
        <CardFooter>{prop.entry.date}</CardFooter>
        <Button onClick={handleClick}>delete entry</Button>
      </Card> 
    </div>
  )
}

export default JournalEntry;