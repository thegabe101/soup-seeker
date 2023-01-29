import './App.css';
import React from 'react';
import { LoginPage } from './pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, createContext, useEffect } from 'react';
import { AuthProvider } from './components/AuthProvider';
import { NavBar } from './components/NavBar';
import { Profile } from './pages/Profile';
import { RequireAuth } from './components/RequireAuth';
import { LandingPage } from './pages/LandingPage';
import { PlayPage } from './pages/PlayPage';
import { emptyBoard, genWordSet } from './components/Words';
import { useNavigate } from 'react-router-dom';
import { Footer } from './pages/Footer';


export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(emptyBoard);
  const [wordSet, setWordSet] = useState(new Set());
  const [currentGuess, setCurrentGuess] = useState({ attempt: 0, letterPosition: 0 });
  const [gamesWon, setGamesWon] = useState(0);
  const [soupInfo, setSoupInfo] = useState([]);
  const [soupPic, setSoupPic] = useState(null);
  let [soupIndex, setSoupIndex] = useState([]);
  const [userPersist, setUserPersist] = useState();

  const correctWord = 'RIGHT';

  useEffect(() => {
    console.log(wordSet);
    genWordSet().then((words) => {
      setWordSet(words.wordSet);
      // setCorrectWord(words.todaysWord);
    });
  }, []);



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

    let currentWord = '';

    for (let i = 0; i < 5; i++) {
      currentWord += board[currentGuess.attempt][i];
    }

    if (wordSet.has(currentWord.toLowerCase())) {
      setCurrentGuess({ attempt: currentGuess.attempt + 1, letterPosition: 0 });
    } else alert('Please guess a valid word.')
    //increase the array index w attempt; reset position in array to start for next guess 
  }


  return (
    <AppContext.Provider value={{ correctWord, soupIndex, setSoupIndex, board, setBoard, currentGuess, setCurrentGuess, gamesWon, setGamesWon, onSelector, onDelete, onEnter, soupInfo, setSoupInfo, soupPic, setSoupPic, userPersist, setUserPersist }}>
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
            <Footer />
          </Router>
        </div>
      </AuthProvider>
    </AppContext.Provider>
  );
};

export default App;
