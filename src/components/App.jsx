import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Login from './Login.jsx';
import Signup from './Signup.jsx';

const App = () => {
  const [username, setUsername] = useState('');
  const getUser = (data) => {
    setUsername(data);
  }
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login getUser={getUser} />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
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
