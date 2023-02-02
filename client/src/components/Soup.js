import React from 'react';
import "../App.css";
import { useState, useRef } from 'react';
import { useContext, useEffect } from 'react';
import { AppContext } from '../App';
import { soupTypes } from '../soup-types';
import Letter from './Letter';
import soupdefault from '../assets/images/soupdefault.png';


function Soup({ attemptValue, letterPosition }) {
    const { soupPicValue, setSoupPicValue, onEnter, radioSoup, setRadioSoup, gameStarted, setGameStarted, soupInfo, setSoupInfo, soupIndex, setSoupIndex, soupPic, setSoupPic, board, currentGuess } = useContext(AppContext);

    const setSoupOption = event => {
        setRadioSoup({ ...radioSoup, soupChoice: event.target.value });
        // console.log(event.target.value);
        // console.log(radioSoup);
    }

    // console.log('RADIOSOUP', radioSoup);

    let randomNum = 0;
    let soupArr = [];
    const max = soupTypes.length;

    const pushSoup = () => {
        for (let i = 0; i < max; i++) {
            genRandom();
            if (!soupArr.includes(soupTypes[randomNum].name)) {
                soupArr.push(soupTypes[randomNum].name);
            }
            setSoupIndex(soupArr);
        };
        // //gets us a random item from the soup array below the index of 3
        picPusher();
    }

    const picPusher = () => {
        const rand = soupArr[Math.floor(Math.random() * 3)];
        let randInd = soupArr.indexOf(rand);
        let soups = Object.values(soupTypes);
        soups.forEach((soup) => {
            if (soup.name === rand) {
                setSoupPic(soup.src);
                setSoupPicValue(soup.name);
            }
        })
    }

    console.log(soupPicValue);

    const genRandom = () => {
        randomNum = Math.random() * max;
        randomNum = Math.floor(randomNum);
        return randomNum;
    }


    useEffect(() => {
        pushSoup();
        return () => {
            pushSoup();
        }
    }, [])

    return (
        <div>
            < div className="soupGuessCard" >
                {gameStarted == true && currentGuess.letterPosition === 5 ? <><h4 style={{ 'marginLeft': '3px' }}>Seek thy soup.</h4>
                    <div class="wrapper">
                        <input type="radio" name="select" id="option-1" onChange={setSoupOption} value={soupIndex[0]} />
                        <input type="radio" name="select" id="option-2" onChange={setSoupOption} value={soupIndex[1]} />
                        <input type="radio" name="select" id="option-3" onChange={setSoupOption} value={soupIndex[2]} />
                        <label for="option-1" class="option option-1">
                            <div class="dot"></div>
                            <span>{soupIndex[0]}</span>
                        </label>
                        <label for="option-2" class="option option-2">
                            <div class="dot"></div>
                            <span>{soupIndex[1]}</span>
                        </label>
                        <label for="option-3" class="option option-3">
                            <div class="dot"></div>
                            <span>{soupIndex[2]}</span>
                        </label>
                    </div>
                </> : ''}
                {gameStarted == true && currentGuess.letterPosition === 5 ? <img className="soupImg" src={soupPic} /> : <img className="soupImg" src={soupdefault} />}
            </div >
        </div>
    )
}

export default Soup;