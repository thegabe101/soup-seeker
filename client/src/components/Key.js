import React, { useContext } from 'react';
import '../App.css';
import { AppContext } from '../App';
import { MdOutlineBackspace } from 'react-icons/md';

function Key({ keyValue, bigKey, disabled }) {
    const { board, setBoard, currentGuess, setCurrentGuess, onSelector, onDelete, onEnter } = useContext(AppContext);


    const selectLetter = () => {
        if (keyValue === "enter") {
            onEnter();
        } else if (keyValue === 'delete') {
            onDelete();
        }
        else {
            //escape if clause to check if letter position is greater than 4 in the array; if so, exit because it needs to go to the next row 
            onSelector(keyValue);
        }
    }

    return (
        <div className='key' id={bigKey ? "big" : disabled && 'disabled'} onClick={selectLetter}>{keyValue} </div>
    )
}

export default Key;