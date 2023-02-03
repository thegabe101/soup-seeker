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


//primary todo is finding a way to reset the board without using the gamestarted condition upon a correct souple but without reaching the heart of the soup
//must cycle to a new board and reset word conditions, but NOT reset the soup map 

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(emptyBoard);
  const [wordSet, setWordSet] = useState(new Set());
  const [currentGuess, setCurrentGuess] = useState({ attempt: 0, letterPosition: 0 });
  const [gamesWon, setGamesWon] = useState(0);
  const [soupInfo, setSoupInfo] = useState([]);
  const [soupPic, setSoupPic] = useState(null);
  const [userPersist, setUserPersist] = useState(false);
  const [validWord, setValidWord] = useState('');
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({ gameOver: false, guessedWord: false })
  const [correctWord, setCorrectWord] = useState('');
  const [playerPosition, setPlayerPosition] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [radioSoup, setRadioSoup] = useState({ soupChoice: "" });
  const [mustSoup, setMustSoup] = useState('');
  const [soupPicValue, setSoupPicValue] = useState(null);
  const [soupsCorrect, setSoupsCorrect] = useState(0);
  let [soupIndex, setSoupIndex] = useState([]);


  useEffect(() => {
    genWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });

  }, []);

  const incrementPlayerPosition = () => {
    setPlayerPosition(playerPosition + 1);
  }

  const incrementSoupsCorrect = () => {
    setSoupsCorrect(soupsCorrect + 1);
  }

  // console.log(playerPosition);
  // console.log(soupIndex);
  console.log(correctWord);
  console.log(gameOver);

  const onEnter = (event) => {
    if (currentGuess.letterPosition !== 5) return;
    if (radioSoup.soupChoice === '' && currentGuess.letterPosition === 5) {
      setMustSoup('Must soup');
      return;
    }

    if (radioSoup.soupChoice === soupPicValue && validWord !== 'Not null') {
      incrementPlayerPosition();
      incrementSoupsCorrect();
    }

    let currentWord = '';

    for (let i = 0; i < 5; i++) {
      currentWord += board[currentGuess.attempt][i].toLowerCase();
    }

    // + `\r`
    //not sure why this \r is appearing in the word set but can just concatenate 
    if (wordSet.has(currentWord.toLowerCase() + `\r`)) {
      setCurrentGuess({ attempt: currentGuess.attempt + 1, letterPosition: 0 });
    }
    else if (currentWord.toLowerCase() === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }
    else {
      setValidWord('Not null');
    }
    //need a new or altered condition here for board reset; may need to create external function/state
    if (currentGuess.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false })
      return;
    };
    //increase the array index w attempt; reset position in array to start for next guess 
  };

  const onSelector = (keyValue) => {
    //escape if clause to check if letter position is greater than 4 in the array; if so, exit because it needs to go to the next row 
    if (currentGuess.letterPosition > 4) return;
    const currentBoard = [...board];
    currentBoard[currentGuess.attempt][currentGuess.letterPosition] = keyValue;
    setBoard(currentBoard);
    setCurrentGuess({ ...currentGuess, letterPosition: currentGuess.letterPosition + 1 })
  }

  const onDelete = () => {
    if (currentGuess.letterPosition === 0) return;
    const currentBoard = [...board];
    currentBoard[currentGuess.attempt][currentGuess.letterPosition - 1] = '';
    setBoard(currentBoard);
    setCurrentGuess({ ...currentGuess, letterPosition: currentGuess.letterPosition - 1 });
    setValidWord('');
    setMustSoup('');
  }

  return (
    <div className="App">
      <AppContext.Provider value={{ soupsCorrect, setSoupsCorrect, soupPicValue, setSoupPicValue, mustSoup, radioSoup, setRadioSoup, gameStarted, setGameStarted, playerPosition, setPlayerPosition, gameOver, setGameOver, disabledLetters, setDisabledLetters, validWord, setValidWord, correctWord, soupIndex, setSoupIndex, board, setBoard, currentGuess, setCurrentGuess, gamesWon, setGamesWon, onSelector, onDelete, onEnter, soupInfo, setSoupInfo, soupPic, setSoupPic, userPersist, setUserPersist }}>
        <AuthProvider>
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
        </AuthProvider>
      </AppContext.Provider>
    </div>
  );
};

export default App;
