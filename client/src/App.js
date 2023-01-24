import './App.css';
import React from 'react';
import { LoginPage } from './pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import { AuthProvider } from './components/AuthProvider';
import { NavBar } from './components/NavBar';
import { Profile } from './pages/Profile';


function App() {


  return (
    <AuthProvider>
      <div className="App">
        {/* <AppContext.Provider value={{ userName, setUserName, passwordReg, setPasswordReg }}> */}
        <Router>
          <NavBar />
          <Routes>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='profile' element={<Profile />} />
          </Routes>
        </Router>
        {/* </AppContext.Provider> */}
      </div>
    </AuthProvider>
  );
}

export default App;
