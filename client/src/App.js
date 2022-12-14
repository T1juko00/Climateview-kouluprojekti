import React from 'react';
import'./App.css';
import DeleteUser from './components/DeleteUser';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home.js';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from "./components/Signup";
import V1_V7Graphs from './components/V1-V7Graphs';
import V8_V9Graphs from './components/V8-V9Graphs';
import ViewBars from './components/ViewBars';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import NotFound from "./components/NotFound";

function App() {

//If not null = logged in and access to visualize, If null= not logged in and no access to vizualize
  const [UserJwt, setUserJwt] = useState(null);

  // blocks access to visualize if not logged in
  //blocks access to login/signin if logged in
  //<Route path="/signup" element={<SignUp testi = "terve" konsta = "24" />} />
  let authRoutes = <>


  <Route path="/signup" element={<SignUp/>} />
  <Route path="/login" element={<Login login />} />
  </>

 /*if(UserJwt != null) {
    
  }
*/

  return (
    <>
        <Navbar />
        <Header />
        <div className='container'>
          <Routes>
            <Route path="/V1_V7Graphs" element={<V1_V7Graphs />} />
            <Route path="/V8_V9Graphs" element={<V8_V9Graphs />} />
            <Route path="/viewbars" element={<ViewBars />} />
            <Route path="/" element={<Home userLoggedIn={UserJwt != null}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/DeleteUser" element={<DeleteUser />} />
            { authRoutes }
            <Route path="*"  element={<Home userLoggedIn={UserJwt != null}/>} />
          </Routes>
        </div>
        <Footer />
      </>
  );

}
  
export default App;








