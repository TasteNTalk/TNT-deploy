// src/components/Layout.jsx

import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Yeh us page ko render karega jo match kare route se */}
    </>
  );
};

export default Layout;
