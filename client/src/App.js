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
import { emptyBoard } from './components/Words';


export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(emptyBoard);
  const [currentGuess, setCurrentGuess] = useState({ attempt: 0, letterPosition: 0 })


  return (
    <AppContext.Provider value={{ board, setBoard, currentGuess, setCurrentGuess }}>
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
    </AppContext.Provider>
  );
}

export default App;
