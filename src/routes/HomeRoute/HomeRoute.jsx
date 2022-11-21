import React, { useEffect, useState, useContext } from 'react';

const Home = () => {
  return (
    <div>
      <h1>Journal App</h1>
      <Link to="login">Login</Link>
      <Link to="signup">Sign up</Link>
    </div>
  );
};

export default Home;
