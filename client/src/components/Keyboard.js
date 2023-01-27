import React, { useCallback } from 'react';
import '../App.css';
import Key from './Key';
import { MdOutlineBackspace } from 'react-icons/md';
import SoupGuessCard from './SoupCard';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';


function Keyboard() {
    const { board, setBoard, currentGuess, setCurrentGuess, onSelector, onDelete, onEnter } = useContext(AppContext);

    const arrOne = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const arrTwo = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const arrThree = ["Z", "X", "C", "V", "B", "N", "M"];


    //keydown functionality needs to look for enter, del, and letters
    const keySense = useCallback((e) => {
        if (e.key === 'enter') {
            onEnter();
        } else if (e.key === 'delete') {
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
    })

    useEffect(() => {
        document.addEventListener('keydown', keySense);

        return () => {
            document.removeEventListener('keydown', keySense);
        }
    }, [keySense]);

    return (
        <div className='keyboard' onKeyDown={keySense}>
            <SoupGuessCard />
            <div className='line1'>
                {arrOne.map((key) => <Key keyValue={key} />)}
            </div>
            <div className='line2'>
                {arrTwo.map((key) => <Key keyValue={key} />)}
            </div>
            <div className='line3'>
                <Key keyValue={'enter'} bigKey />
                {arrThree.map((key) => <Key keyValue={key} />)}
                <Key keyValue={'delete'} />
            </div>
        </div>
    )
}

export default Keyboard;