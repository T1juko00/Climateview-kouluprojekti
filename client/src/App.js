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
import axios from 'axios';
import {Buffer} from "buffer";

function App() {

//If not null = logged in and access to visualize, If null= not logged in and no access to vizualize
  const [UserJwt, setUserJwt] = useState(null);


  // blocks access to visualize if not logged in
  //blocks access to login/signin if logged in
  let authRoutes = <>
  <Route path="/signup" element={<SignUp />} />
  <Route path="/login" element={<Login login={newJwt =>  setUserJwt(newJwt)} />} />
  </>

  if(UserJwt != null) {
    authRoutes = <Route path="/visualize" element={<Visualize />} />
  }

  return (
    <>
        <Navbar />
        <Header />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home userLoggedIn={UserJwt != null}/>} />
            <Route path="/about" element={<About />} />
            { authRoutes }
            <Route path="*"  element={<Home userLoggedIn={UserJwt != null}/>} />
          </Routes>
        </div>
        <Footer />
      </>
  );

}
  
export default App;








