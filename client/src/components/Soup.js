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

    const handleChange = (event) => {
        setSoupValueSelect(event.target.value);
        console.log(soupValueSelect)
    }

    const handleSoupChange = () => {
        setUpdatedSoupValueSelect(soupValueSelect);
        console.log(soupValueSelect);
    }

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
        console.log(soupIndex);
        pushSoup();
        return () => {
            pushSoup();
        }
    }, [])

    return (
        <div>
            < div className="soupGuessCard" >
                {gameStarted == true && currentGuess.letterPosition === 5 ? <><h4 style={{ 'margin-left': '7px' }}>Seek thy soup.</h4>
                    <div class="wrapper">
                        <input type="radio" name="select" id="option-1" />
                        <input type="radio" name="select" id="option-2" />
                        <input type="radio" name="select" id="option-3" />
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
                {/* {gameStarted == true && currentGuess.letterPosition === 5 ? <><h4>Seek thy soup.</h4>
                    <div className='radioSoups'>
                        <input className="" type="radio" onChange={handleChange} value={soupIndex[0]} name='soupChooser' />{soupIndex[0]}
                        <input className="" type="radio" onChange={handleChange} value={soupIndex[1]} name='soupChooser' />{soupIndex[1]}
                        <input className="" type="radio" onChange={handleChange} value={soupIndex[2]} name='soupChooser' />{soupIndex[2]}
                    </div>
                </> : ''} */}
                {gameStarted == true && currentGuess.letterPosition === 5 ? <img className="soupImg" src={soupPic} /> : <img className="soupImg" src={soupdefault} />}
            </div >
        </div>
    )
}


// onClick={onEnter}
// onClick={onEnter}
// onClick={onEnter}
export default Soup;