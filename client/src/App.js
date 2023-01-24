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


function App() {


  return (
    <AuthProvider>
      <div className="App">
        {/* <AppContext.Provider value={{ userName, setUserName, passwordReg, setPasswordReg }}> */}
        <Router>
          <NavBar />
          <LandingPage />
          <Routes>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />
          </Routes>
        </Router>
        {/* </AppContext.Provider> */}
      </div>
    </AuthProvider>
  );
}

export default App;
