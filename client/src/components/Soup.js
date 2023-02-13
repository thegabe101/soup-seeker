import React from 'react';
import "../App.css";
import { useState, useRef } from 'react';
import { useContext, useEffect } from 'react';
import { AppContext } from '../App';
import { soupTypes } from '../soup-types';
import Letter from './Letter';
import soupdefault from '../assets/images/soupdefault.png';
import ladle from '../assets/images/ladle.png';
import { useAuth } from "../components/AuthProvider";
import souplord from '../assets/images/souplord.jpg';

function Soup({ attemptValue, letterPosition }) {
    const { souplesWon, gameOver, guessedWord, playerPosition, soupPicValue, setSoupPicValue, onEnter, radioSoup, setRadioSoup, gameStarted, setGameStarted, soupInfo, setSoupInfo, soupIndex, setSoupIndex, soupPic, setSoupPic, board, currentGuess } = useContext(AppContext);

    const auth = useAuth();

    const setSoupOption = event => {
        console.log('clicked');
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

    // console.log(soupPicValue);

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
            < div >
                {gameStarted == true && currentGuess.letterPosition === 5 && gameOver.guessedWord == false && gameOver.gameOver == false ? <><h4 style={{ 'marginLeft': '3px' }} className='thy'>Seek thy soup.</h4>
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
                {gameStarted == true && currentGuess.letterPosition === 5 && gameOver.guessedWord == false && gameOver.gameOver == false ? <img className="soupImg wrapperImg" src={soupPic} /> : <><h6 className='currentPositionFlex'>{playerPosition + 1}x/11<img className='ladle ladleCard' src={ladle}></img><img className="soupImg" src={soupdefault} /></h6></>}
                <div className='flexLord'>
                    {gameOver.guessedWord == true ? (
                        <h3 className='flexLordText'>{auth.user} has become The Lord of the Soup</h3>
                    ) : (
                        ""
                    )}
                    {gameOver.guessedWord == true ? (
                        <img className="flexLordImg" src={souplord} />
                    ) : (
                        ""
                    )}
                    {gameOver.guessedWord == false && gameOver.gameOver == true ? <h6 className='flexLordTextFail'>Yee' hath failed to become thee' Lord of the Soup for yee' did not aquire 11 ladles without failing a Souple.</h6> : ''}
                </div>
            </div >
        </div>
    )
}

export default Soup;