import React, { useCallback, useState, useEffect } from 'react';
import '../App.css';
import Key from './Key';
import { MdOutlineBackspace } from 'react-icons/md';
import { useContext } from 'react';
import { AppContext } from '../App';
import Soup from './Soup';
import { GameOver } from '../pages/GameOver';
import { Cauldron } from './Cauldron';


function Keyboard() {
    const { gameStarted, setGameStarted, board, setBoard, currentGuess, setCurrentGuess, onSelector, onDelete, onEnter, disabledLetters, gameOver } = useContext(AppContext);

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

    // const startGame = () => {

    //         setGameStarted({ gameStarted: true })

    //     console.log(gameStarted);
    // }

    useEffect(() => {
        document.addEventListener('keydown', keySense);
        return () => {
            document.removeEventListener('keydown', keySense);
        }
    }, [keySense]);

    return (
        <div className='keyboard' onKeyDown={keySense}>
            {gameStarted == false ? <button className="startBtn" onClick={(() => { setGameStarted(true) })}>Begin thy search</button> : ''}
            {gameOver.gameOver ? <GameOver /> : <Cauldron />}
            {/* {board[0][4] ? <SoupGuessCard /> : ''} */}
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
        </div>
    )
};

export default Keyboard;