import React, { Component } from 'react';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';

import JournalEntryContainer from '../components/journal/JournalEntryContainer.jsx'

import { Center } from '@chakra-ui/react'

const App = () => {
  return (
    <Center> 
      <JournalEntryContainer/> 
    </Center>

  );
};

export default App;

// we can delete this file btw becasue index.js is rendering all components
