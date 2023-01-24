import React from 'react';
import '../App.css';

function Keyboard() {
    const arrOne = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const arrTwo = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const arrThree = ["Z", "X", "C", "V", "B", "N", "M"];

    const val1 = arrOne.map((key) => key);

    return (
        <div className='keyboard'>
            <div className='line1'>
                {arrOne.map((e) => <button>{e}</button>)}
            </div>
            <div className='line2'>
                {arrTwo.map((e) => <button>{e}</button>)}
            </div>
            <div className='line3'>
                {arrThree.map((e) => <button>{e}</button>)}
            </div>
        </div>
    )
}

export default Keyboard;