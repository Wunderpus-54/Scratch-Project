import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';
import Home from './routes/HomeRoute/HomeRoute.jsx';
import Login from './components/Login';
import Signup from './components/Signup';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>Journal App</h1>
        <Link to="login">Login</Link>
        <Link to="signup">Sign up</Link>
      </div>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
