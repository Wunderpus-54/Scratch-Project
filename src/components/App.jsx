import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Profile from './Profile.jsx';

const App = () => {
  const [userName, setUsername] = useState('');
  const getUser = (data) => {
    setUsername(data);
  }
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login getUser={getUser} />} />
        <Route path='/profile' element={<Profile userName={userName} />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>


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
