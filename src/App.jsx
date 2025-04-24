// src/App.jsx

import React from 'react';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages with Navbar (inside Layout)
import Querypage from './components/Querypage/Querypage';
import Firstpage from './components/Firstpage/Firstpage';
import Cheffi from './pages/Cheffi/Cheffi';
import Community from './pages/Community/Community';
import Tiffin from './pages/Tiffin/Tiffin';
import Inbox from './pages/Inbox/Inbox';
import Blogs from './pages/Blogs/Blogs';
import Courses from './pages/Courses/Courses';
import Shopping from './pages/Shopping/Shopping';
import Footer from './pages/Footer/Footer';
import Profile from './pages/Profile/Profile';
import Setting from './pages/Setting/Setting';
import Help from './pages/Help/Help';
import Report from './pages/Report/Report';
import Blocked from './pages/Blocked/Blocked';
import HomePage from './components/HomePage/HomePage';

// Login/Signup Pages (no Navbar)
import Login from './components/Login/Login';
import SignUpNew from './pages/SignUpNew/SignUpNew';
import LoginNew from './pages/LoginNew/LoginNew';

// Layout with Navbar
import Layout from './components/Layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Ye sab pages ke sath Navbar aayega
    children: [
      { path: '/home', element: <HomePage /> },
      { path: '/query', element: <Querypage /> },
      { path: '/cheffi', element: <Cheffi /> },
      { path: '/community', element: <Community /> },
      { path: '/tiffin', element: <Tiffin /> },
      { path: '/inbox', element: <Inbox /> },
      { path: '/blogs', element: <Blogs /> },
      { path: '/courses', element: <Courses /> },
      { path: '/shopping', element: <Shopping /> },
      { path: '/footer', element: <Footer /> },
      { path: '/myprofile', element: <Profile /> },
      { path: '/setting', element: <Setting /> },
      { path: '/help', element: <Help /> },
      { path: '/report', element: <Report /> },
      { path: '/blocked', element: <Blocked /> },
      { path: '/', element: <HomePage /> }, // default home
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/LoginNew',
    element: <LoginNew />,
  },
  {
    path: '/SignUpNew',
    element: <SignUpNew />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
