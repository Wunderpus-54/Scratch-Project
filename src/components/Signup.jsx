import React, { useState } from 'react';
// import { useSignUpContext } from '../context/signup-context';

import { AuthContext } from '../context/AuthContext.jsx';
import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const { setCurrentUser } = useContext(AuthContext);
  const usernameInput = useRef();

  // usernameInput.current.value
  // <input ref={usernameInput}></input>;
};

// const Signup = () => {
//   const { dispatch } = useSignUpContext();
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     const newUser = { firstName, lastName, userName, password };

//     try {
//       const response = await fetch('api/login/signup', {
//         method: 'POST',
//         body: JSON.stringify(newUser),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       const json = await response.json();

//       if (!response.ok) {
//         setError(json.error);
//         // setErrorField(json.errorField);
//         // console.log('error field: ', json.errorField);
//       }

//       if (response.ok) {
//         setFirstName('');
//         setLastName('');
//         setUserName('');
//         setPassword('');
//         setError(null);

//         console.log('new user added!', json);
//         dispatch({
//           type: 'CREATE_USER',
//           payload: json,
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Sign up</h2>
//       <form onSubmit={handleSignup}>
//         <div>
//           <input
//             type='text'
//             placeholder='First Name'
//             onChange={(e) => {
//               setFirstName(e.target.value);
//             }}
//             value={firstName}
//           />
//         </div>
//         <div>
//           <input
//             type='text'
//             placeholder='Last Name'
//             onChange={(e) => {
//               setLastName(e.target.value);
//             }}
//             value={lastName}
//           />
//         </div>
//         <div>
//           <input
//             type='text'
//             placeHolder='Username'
//             onChange={(e) => {
//               setUserName(e.target.value);
//             }}
//             value={userName}
//           />
//         </div>
//         <div>
//           <input
//             type='password'
//             placeHolder='Password'
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//             value={password}
//           />
//         </div>
//         <button>Sign Up</button>
//         {error && <div className='error'>{error}</div>}
//       </form>
//     </div>
//   );
// };

export default Signup;
