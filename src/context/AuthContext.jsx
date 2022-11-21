import React, { useEffect, useState, createContext } from 'react';

// auth context
// need context that holds state for the user

export const AuthContext = createContext({
  // unsure if we need to instantiate an object of nulls or if we can just assign null value -- need to look into context docs
  currentUser: {
    firstName: null,
    lastName: null,
    username: null,
    password: null,
  },
  setCurrentUser: () => null,
});

// create auth provider to wrap routers in

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const value = { currentUser, setCurrentUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
