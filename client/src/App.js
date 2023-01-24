import './App.css';
import React from 'react';
import { LoginPage } from './pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import { AuthProvider } from './components/AuthProvider';
import { NavBar } from './components/NavBar';
import { Profile } from './pages/Profile';
import { RequireAuth } from './components/RequireAuth';
import { LandingPage } from './pages/LandingPage';
import { PlayPage } from './pages/PlayPage';


function App() {


  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />
            <Route path='/play' element={<RequireAuth><PlayPage /></RequireAuth>} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
