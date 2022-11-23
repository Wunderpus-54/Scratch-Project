import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Signup from './Signup.jsx';

const Login = (props) => {
  
  let navigate = useNavigate();

  const handleLogin = () => {
    console.log('clicked');
    const user = document.querySelector('#username').value;
    const pass = document.querySelector('#password').value;

    const body = {
      userName: user,
      password: pass
    }

    // the endpoint may vary depending on what the backend uses
    fetch('api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then((response)=>response.json()).then((data)=>{
      props.getUser(body.userName);
      console.log('data has fetched', data);
    }).catch(err=>{
      window.location.reload(true);
      alert('Input a valid username/password combination')
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
