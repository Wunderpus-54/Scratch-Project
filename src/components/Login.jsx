import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Signup from './Signup.jsx';

const Login = (props) => {
  
  let navigate = useNavigate();
  // 
  // const [userName, setUsername] = useState('');
  // const getUser = (data) => {
  //   setUsername(data);
  // }
  
  const handleLogin = () => {
    
    console.log('clicked', props.getUser);
    const user = document.querySelector('#username').value;
    console.log('this is user from Login.jsx', user);
    const pass = document.querySelector('#password').value;
    const getUser = props.getUser;

    const reqBody = {
      userName: user,
      password: pass
    }
    console.log('this is reqBody', reqBody);

    // the endpoint may vary depending on what the backend uses
    fetch('api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody)
    }).then((response)=>response.json())
      .then((data)=>{
        console.log('data has fetched', data);
        getUser(user);
        // console.log('we are in Login', userName, setUsername);
        navigate('/profile');
    })
    .catch(err=>{
      // window.location.reload(true);
      alert('Input a valid username/password combination');
    })
  };

  return (
    <div className='login'>
      <button onClick={() => navigate('/signup')}>Sign-Up</button>
      <h2>Login</h2>
      <input
        type='text'
        id='username'
        placeholder='Username'
      />
      <input
        type='password'
        id='password'
        placeholder='Password'
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
