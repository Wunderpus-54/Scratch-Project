import React, { useState } from 'react';
// import { useSignUpContext } from '../context/signup-context';

// import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  let navigate = useNavigate();
  const clickHandler = () => {
    console.log('clicked');
    const newFirst = document.querySelector('#newFirstName').value;
    const newLast = document.querySelector('#newLastName').value;
    const newUser = document.querySelector('#newUsername').value;
    const newPass = document.querySelector('#newPassword').value;

    const body = {
      firstName: newFirst,
      lastName: newLast,
      userName: newUser,
      password: newPass,
    }

    fetch('api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then((response)=>response.json())
    .then((data)=>{
      console.log('data has fetched', data);
      navigate('/');
      alert('Created an account! Log-in');
    }).catch(err => {
      alert('username/password is invalid');
    })
  }

  return (
    <div className='signup'>
      <h2>Sign-up Here</h2>
        <input
          type='text'
          id='newFirstName'
          placeholder="New First Name">
        </input>
        <input
          type='text'
          id='newLastName'
          placeholder="New Last Name">
        </input>
        <input
          type='text'
          id='newUsername'
          placeholder="New Username">
        </input>
        <input
          type='password'
          id='newPassword'
          placeholder='New Password'>
        </input>
      <button onClick={clickHandler}>Submit</button>
    </div>
  );
};
export default Signup;
