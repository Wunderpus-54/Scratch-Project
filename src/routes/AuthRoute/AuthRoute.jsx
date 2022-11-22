import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

const Auth = () => {
  return (
    <div>
      <h1>Journal App</h1>
      <Link to="login">Login</Link>
      <Link to="signup">Sign up</Link>
      <Link to="home">home</Link>
    </div>
  );
};

export default Auth;
