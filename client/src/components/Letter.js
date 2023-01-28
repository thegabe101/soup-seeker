import React from 'react';
import '../App.css';
import { useContext } from 'react';
import { AppContext } from '../App';



function Letter({ letterPosition, attemptValue }) {
    const { board, correctWord, currentGuess } = useContext(AppContext);

    //define access to each individual letter through indexing by row and then column

    const letter = board[attemptValue][letterPosition];

    const correct = correctWord[letterPosition] === letter;
    const contains = !correct && letter !== '' && correctWord.includes(letter);
    const letterState = currentGuess.attempt > attemptValue &&
        (correct ? "correct" : contains ? "almost" : 'error');


    return (
        <div className='letter' id={letterState}>{' '}{letter}</div>
    )
}

export default Letter;