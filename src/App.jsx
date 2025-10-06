import React from 'react';
import Navbar from './NavBar/Navbar';
import { Outlet } from 'react-router-dom'
import Footer from './Routs/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
       <Outlet ></Outlet>
       <Footer></Footer>
    </div>
  );
};

export default App;