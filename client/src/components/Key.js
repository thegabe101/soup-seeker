import React, { useContext } from 'react';
import '../App.css';
import { AppContext } from '../App';

function Key({ keyValue, bigKey }) {
    const { board, setBoard, currentGuess, setCurrentGuess } = useContext(AppContext);


    const selectLetter = () => {
        if (keyValue === "enter") {
            if (currentGuess.letterPosition < 4) return;
            //increase the array index w attempt; reset position in array to start for next guess 
            setCurrentGuess({ attempt: currentGuess.attempt + 1, letterPosition: 0 })
        } else {
            //escape if clause to check if letter position is greater than 4 in the array; if so, exit because it needs to go to the next row 
            if (currentGuess.letterPosition > 4) return;
            const currentBoard = [...board];
            currentBoard[currentGuess.attempt][currentGuess.letterPosition] = keyValue;
            setBoard(currentBoard);
            setCurrentGuess({ ...currentGuess, letterPosition: currentGuess.letterPosition + 1 })
            console.log(currentBoard)
        }
    }

    return (
        <div className='key' id={bigKey && "big"} onClick={selectLetter}>{keyValue} </div>
    )
}

export default Key;