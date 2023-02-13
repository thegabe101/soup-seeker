import React from 'react';
import '../App.css';
import { useContext, useEffect } from 'react';
import { AppContext } from '../App';
import { emptyBoard } from '../App.js';



function Letter({ letterPosition, attemptValue }) {
    const { board, correctWord, currentGuess, disabledLetters, setDisabledLetters, resetBoard, setResetBoard, setBoard, setCurrentGuess } = useContext(AppContext);

    //define access to each individual letter through indexing by row and then column

    let letter = board[attemptValue][letterPosition];

    const correct = correctWord.toUpperCase()[letterPosition] === letter;
    const contains = !correct && letter !== '' && correctWord.toUpperCase().includes(letter);
    const letterState = currentGuess.attempt > attemptValue &&
        (correct ? "correct" : contains ? "almost" : 'error');


    useEffect(() => {
        if (letter !== '' && !correct && !contains) {
            setDisabledLetters((prev) => [...prev, letter])
        };
    }, [currentGuess.attempt])


    return (
        <div className='letter' id={letterState}>
            {letter}
        </div>
    )
};

export default Letter;