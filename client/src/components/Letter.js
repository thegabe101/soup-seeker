import React from 'react';
import '../App.css';
import { useContext, useEffect } from 'react';
import { AppContext } from '../App';
import { emptyBoard } from './Words';



function Letter({ letterPosition, attemptValue }) {
    const { board, correctWord, currentGuess, disabledLetters, setDisabledLetters, resetBoard, setResetBoard } = useContext(AppContext);

    //define access to each individual letter through indexing by row and then column

    let letter = board[attemptValue][letterPosition];

    const correct = correctWord.toUpperCase()[letterPosition] === letter;
    const contains = !correct && letter !== '' && correctWord.toUpperCase().includes(letter);
    const letterState = currentGuess.attempt > attemptValue &&
        (correct ? "correct" : contains ? "almost" : 'error');

    // const resetLetter = () => {
    //     if (resetBoard === 'Fresh board.') {
    //         console.log('Reset board clause hit.');
    //         letter = '';
    //         setResetBoard('');
    //     }
    // }

    useEffect(() => {
        if (letter !== '' && !correct && !contains) {
            setDisabledLetters((prev) => [...prev, letter])
        };
        findLetter();
        // return () => {
        //     resetLetter();
        // }

    }, [currentGuess.attempt])


    // const findLetter = () => {
    //     if (!emptyBoard) {
    //         let letter = board[attemptValue][letterPosition];
    //         return letter;
    //     } else if (emptyBoard) {
    //         let letter = '';
    //         return letter;
    //     }
    // }

    return (
        <div className='letter' id={letterState}>{letter}</div>
    )
}

export default Letter;