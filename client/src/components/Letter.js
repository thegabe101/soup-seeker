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
        // if (resetBoard === 'Fresh board.') {
        //     setCurrentGuess({ attempt: 0, letterPosition: 0 });
        // }
        // if (currentGuess.attemptValue === 0 && currentGuess.letterPosition < 5) {
        //     letter = '';
        // }
        if (resetBoard === 'Fresh board.') {
            setDisabledLetters([]);
        }
        if (letter !== '' && !correct && !contains) {
            setDisabledLetters((prev) => [...prev, letter])
        };
    }, [currentGuess.attempt])


    return (
        <div className='letter' id={letterState}>
            {/* {currentGuess.attempt === 0 && currentGuess.letterPosition === 0 ? '' : <>{letter}</>} */}
            {/* {resetBoard === 'Fresh board.' && currentGuess.attempt < attemptValue ||
                resetBoard === 'Fresh board.' && currentGuess.attempt === 0 && currentGuess.letterPosition === 0 ? '' :
                <>
                    {letter}</>
            } */}
            {letter}
        </div>
    )
};

export default Letter;