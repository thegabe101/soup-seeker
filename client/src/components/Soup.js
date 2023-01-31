import React from 'react';
import "../App.css";
import SoupImage from './SoupImage';
import { useState } from 'react';
import { useContext, useEffect } from 'react';
import { AppContext } from '../App';
import { soupTypes } from '../soup-types';
import soupdefault from '../assets/images/soupdefault.png';


function Soup() {
    const { gameStarted, setGameStarted, soupInfo, setSoupInfo, soupIndex, setSoupIndex, soupPic, setSoupPic, board } = useContext(AppContext);
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
        console.log(rand);
        console.log(randInd);
        let soups = Object.values(soupTypes);
        soups.forEach((soup) => {
            if (soup.name === rand) {
                setSoupPic(soup.src);
            }
        })
    }

    useEffect(() => {
        setSoupPic(soupdefault);
        return () => {
            pushSoup();
        }
    }, [])

    const genRandom = () => {
        randomNum = Math.random() * max;
        randomNum = Math.floor(randomNum);
        return randomNum;
    }

    return (
        <div>
            < div className="soupGuessCard" >
                {gameStarted == true ? <><h3>On your current row, which soup do you see?</h3>
                    <button className="button-8" onClick={pushSoup}>{soupIndex[0]}</button>
                    <button className="button-8" onClick={pushSoup}>{soupIndex[1]}</button>
                    <button className="button-8" onClick={pushSoup}>{soupIndex[2]}</button>
                </> : ''}
                <img src={soupPic} className="soupImg" />
            </div >
        </div>
    )
}

export default Soup;