import React from 'react';
import "../App.css";
import { useState, useRef } from 'react';
import { useContext, useEffect } from 'react';
import { AppContext } from '../App';
import { soupTypes } from '../soup-types';
import Letter from './Letter';
import soupdefault from '../assets/images/soupdefault.png';


function Soup({ attemptValue, letterPosition }) {
    const { onEnter, updatedSoupValueSelect, setUpdatedSoupValueSelect, soupValueSelect, setSoupValueSelect, gameStarted, setGameStarted, soupInfo, setSoupInfo, soupIndex, setSoupIndex, soupPic, setSoupPic, board, currentGuess } = useContext(AppContext);

    // const [stateImage, setStateImage] = useState(false);

    let randomNum = 0;
    let soupArr = [];
    const max = soupTypes.length;

    // const handleChange = (event) => {
    //     setSoupValueSelect(event.target.value);
    // }

    // const handleSoupChange = () => {
    //     setUpdatedSoupValueSelect(soupValueSelect);
    //     console.log(soupValueSelect);
    // }

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
        console.log(rand);
        console.log(randInd);
        let soups = Object.values(soupTypes);
        soups.forEach((soup) => {
            if (soup.name === rand) {
                setSoupPic(soup.src);
            }
        })
    }


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
                {gameStarted == true && currentGuess.letterPosition === 5 ? <><h3>Which soup dost thou seeketh?</h3>
                    <button className="button-8" type="radio" onClick={onEnter} value={soupIndex[0]}>{soupIndex[0]}</button>
                    <button className="button-8" type="radio" onClick={onEnter} value={soupIndex[1]}>{soupIndex[1]}</button>
                    <button className="button-8" type="radio" onClick={onEnter} value={soupIndex[2]}>{soupIndex[2]}</button>
                </> : ''}
                {gameStarted == true && currentGuess.letterPosition === 5 ? <img className="soupImg" src={soupPic} /> : <img className="soupImg" src={soupdefault} />}
            </div >
        </div>
    )
}

export default Soup;