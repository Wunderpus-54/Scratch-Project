import React from 'react'
import { render } from 'react-dom';
import App from './components/App.jsx';
import './style.css';

render(
    <App />,
    document.getElementById('root')
);

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import Login from './components/Login.jsx';
// import Signup from './components/Signup.jsx';
// import Profile from './components/Profile.jsx';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Login />,
//   },
//   {
//     path: '/profile',
//     element: <Profile />,
//   },
//   {
//     path: '/signup',
//     element: <Signup />,
//   }
// ]);

// createRoot(document.getElementById('root')).render(
//   <div>
//     <RouterProvider router={router} />
//   </div>
// );