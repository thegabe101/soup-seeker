import React from 'react';
import '../App.css';
import Key from './Key';
import { MdOutlineBackspace } from 'react-icons/md';

function Keyboard() {
    const arrOne = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const arrTwo = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const arrThree = ["Z", "X", "C", "V", "B", "N", "M"];

    return (
        <div className='keyboard'>
            <div className='line1'>
                {arrOne.map((key) => <Key keyValue={key} />)}
            </div>
            <div className='line2'>
                {arrTwo.map((key) => <Key keyValue={key} />)}
            </div>
            <div className='line3'>
                <Key keyValue={'enter'} bigKey />
                {arrThree.map((key) => <Key keyValue={key} />)}
                <Key keyValue={'del'} />
            </div>
        </div>
    )
}

export default Keyboard;