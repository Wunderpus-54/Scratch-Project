import React from "react"
import axios from 'axios'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { format, compareAsc } from 'date-fns'

const JournalEntry = (prop) => {
 const date = format(new Date(prop.entry.date))
  console.log(date);
  return (
    <div>
      {/* <h1> test </h1> */}
       <Card variant = 'elevated'>
        <CardHeader>{prop.entry.iLearned}</CardHeader>
        <CardBody>{prop.entry.moodScaler}</CardBody>
        <CardFooter>{prop.entry.date}</CardFooter>
      </Card> 
    </div>
  )
}

export default JournalEntry;