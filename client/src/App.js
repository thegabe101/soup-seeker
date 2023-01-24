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
  const [currentGuess, setCurrentGuess] = useState({ attempt: 0, letterPosition: 0 });
  const [gamesWon, setGamesWon] = useState(0);

  const onSelector = (keyValue) => {
    //escape if clause to check if letter position is greater than 4 in the array; if so, exit because it needs to go to the next row 
    if (currentGuess.letterPosition > 4) return;
    const currentBoard = [...board];
    currentBoard[currentGuess.attempt][currentGuess.letterPosition] = keyValue;
    setBoard(currentBoard);
    setCurrentGuess({ ...currentGuess, letterPosition: currentGuess.letterPosition + 1 })
    console.log(currentBoard)
  }

  const onDelete = () => {
    if (currentGuess.letterPosition === 0) return;
    const currentBoard = [...board];
    currentBoard[currentGuess.attempt][currentGuess.letterPosition - 1] = '';
    setBoard(currentBoard);
    setCurrentGuess({ ...currentGuess, letterPosition: currentGuess.letterPosition - 1 })
  }

  const onEnter = () => {
    if (currentGuess.letterPosition < 5) return;
    //increase the array index w attempt; reset position in array to start for next guess 
    setCurrentGuess({ attempt: currentGuess.attempt + 1, letterPosition: 0 });
  }


  return (
    <AppContext.Provider value={{ board, setBoard, currentGuess, setCurrentGuess, gamesWon, setGamesWon, onSelector, onDelete, onEnter }}>
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
};

export default App;
