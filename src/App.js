import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
//import Header from './components/Header/Header';
import InProgress from './components/InProgress/InProgress';
/*
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
*/
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">

      <InProgress />
      <Footer />
    </div>
  );
}

export default App;
