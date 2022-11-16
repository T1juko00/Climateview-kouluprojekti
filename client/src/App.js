import React from 'react';
import'./App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home.js';
import About from './components/About';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Visualize from './components/Visualize';
import Login from './components/Login';
import SignUp from "./components/Signup";
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';


function App() {

//If true = logged in and access to visualize, If false= not logged in and no access to vizualize
  const [isUSerLoggedIn, setIsUSerLoggedIn] = useState(true);

  // blocks access to visualize if not logged in
  //blocks access to login/signin if logged in
  let authRoutes = <>
  <Route path="/signup" element={<SignUp />} />
  <Route path="/login" element={<Login />} />
  </>

  if(isUSerLoggedIn == true) {
    authRoutes = <Route path="/visualize" element={<Visualize />} />
  }


  return (
      <>
        <Navbar />
        <Header />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home userLoggedIn={isUSerLoggedIn}/>} />
            <Route path="/about" element={<About />} />
            { authRoutes }
            <Route path="*"  element={<Home userLoggedIn={isUSerLoggedIn}/>} />
          </Routes>
        </div>
        <Footer />
      </>
  );
}
export default App;
