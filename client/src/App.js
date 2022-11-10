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
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
      <>
        <Navbar />
        <Header />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/visualize" element={<Visualize />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </>
  );
}
export default App;
