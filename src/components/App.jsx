import React, { Component } from 'react';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    // <div className='wrapper'>
    //   <h1>Journal App</h1>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path='/login'>
    //         <Login />
    //       </Route>
    //       <Route path='/signup'>
    //         <Signup />
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </div>
  );
};

export default App;

// we can delete this file btw becasue index.js is rendering all components
