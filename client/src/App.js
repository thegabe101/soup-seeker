import './App.css';
import React from 'react';
import { LoginPage } from './pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';

// export const AppContext = createContext();

function App() {
  // const [userName, setUserName] = useState('');
  // const [passwordReg, setPasswordReg] = useState('');
  // const [email, setEmail] = useState('');

  return (
    <div className="App">
      {/* <AppContext.Provider value={{ userName, setUserName, passwordReg, setPasswordReg }}> */}
      <Router>
        <nav>Soup Seeker</nav>
        <Routes>
          <Route path='/login' element={<LoginPage />}></Route>
        </Routes>
      </Router>
      {/* </AppContext.Provider> */}
    </div>
  );
}

export default App;
