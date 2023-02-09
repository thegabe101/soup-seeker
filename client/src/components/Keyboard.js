import React, { useCallback, useState, useEffect } from 'react';
import '../App.css';
import Key from './Key';
import { MdOutlineBackspace } from 'react-icons/md';
import { useContext } from 'react';
import { AppContext } from '../App';
import Soup from './Soup';
import { GameOver } from '../pages/GameOver';
import { Cauldron } from './Cauldron';
import { Map } from '../pages/Map';


function Keyboard() {
    const { soupsCorrect, playerPosition, gameStarted, setGameStarted, board, setBoard, currentGuess, setCurrentGuess, onSelector, onDelete, onEnter, disabledLetters, gameOver } = useContext(AppContext);

    const arrOne = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const arrTwo = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const arrThree = ["Z", "X", "C", "V", "B", "N", "M"];


    //keydown functionality needs to look for enter, del, and letters
    const keySense = useCallback((e) => {
        if (e.key === 'Enter') {
            onEnter();
        } else if (e.key === 'Backspace') {
            onDelete();
        } else {
            arrOne.forEach((key) => {
                if (e.key.toLowerCase() === key.toLowerCase()) {
                    onSelector(key)
                }
            })
            arrTwo.forEach((key) => {
                if (e.key.toLowerCase() === key.toLowerCase()) {
                    onSelector(key);
                }
            })
            arrThree.forEach((key) => {
                if (e.key.toLowerCase() === key.toLowerCase()) {
                    onSelector(key);
                }
            })
        }
    });

    useEffect(() => {
        document.addEventListener('keydown', keySense);
        return () => {
            document.removeEventListener('keydown', keySense);
        }
    }, [keySense]);

    return (
        <div>
            <div className='keyboard' onKeyDown={keySense}>
                {gameOver.gameOver && <GameOver />}
                <div className="mapDiv">{gameOver.gameOver ? "" : <Map />}</div>
                <div className='line1'>
                    {gameStarted && arrOne.map((key) => {
                        return <Key keyValue={key} disabled={disabledLetters.includes(key)} />;
                    })}
                </div>
                <div className='line2'>
                    {gameStarted && arrTwo.map((key) => {
                        return <Key keyValue={key} disabled={disabledLetters.includes(key)} />;
                    })}
                </div>
                <div className='line3'>
                    {gameStarted && <Key keyValue={'enter'} bigKey />}
                    {gameStarted && arrThree.map((key) => {
                        return <Key keyValue={key} disabled={disabledLetters.includes(key)} />;
                    })}
                    {gameStarted && <Key keyValue={'delete'} bigKey />}
                </div>
                {gameStarted == true && <div className='currentPosition'>Current position: {playerPosition}/11 | Soups correct: {soupsCorrect}
                    <p>Become the soup lord without failing the souple to reach the heart of the soup. </p>
                </div>}

            </div>
        </div>
    )
};

export default Keyboard;