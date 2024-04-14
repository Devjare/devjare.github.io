import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import Contact from './pages/contact';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="text-amber-300">
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </header>
      <HomePage /> 
      <AboutPage /> 
      <Contact />
    </div>
  );
}

export default App;
