import React from 'react';
import "../App.css";
import SoupImage from './SoupImage';
import { useState } from 'react';
import { useContext, useEffect } from 'react';
import { AppContext } from '../App';
import { soupTypes } from '../soup-types';


function Soup(props) {
    const { soupInfo, setSoupInfo, soupIndex, setSoupIndex, soupPic, setSoupPic, board } = useContext(AppContext);
    // let i = 0;
    let randomNum = 0;
    let soupArr = [];
    const max = soupTypes.length;
    // console.log(i);

    const pushSoup = () => {
        for (let i = 0; i < 3; i++) {
            genRandom();
            if (!soupArr.includes(soupTypes[randomNum].name)) {
                soupArr.push(soupTypes[randomNum].name);
            }
            // console.log(soupArr.filter(soup => soup === spi[]))
            // return soupArr;
        }
        console.log(soupArr);
    }

    useEffect(() => {
        pushSoup();
        setSoupIndex(soupTypes[randomNum].name);
        console.log(soupIndex);
    }, [])


    const genRandom = () => {
        randomNum = Math.random() * max;

        randomNum = Math.floor(randomNum);
        console.log(randomNum);
        return randomNum;
    }

    // const soupIndexSetter = () => {
    //     i = Math.random() * max;

    //     i = Math.floor(i);

    //     for (let j = 0; j < 3; j++) {
    //         if (!soupArr.includes(soupTypes[j].name)) {
    //             soupArr.push(soupTypes[Math.floor(Math.random(i) * max)].name);
    //             console.log(soupArr);
    //         }
    //     }
    //     let newList = [];
    //     let foundRepeatingValue = false;
    //     for (let j = 0; j < 3; j++) {
    //         for (i = 0; i < 3; i++) {
    //             console.log(i);
    //             let thisValue = soupArr[i];
    //             if (i > 0) {
    //                 if (newList.indexOf(thisValue) > -1) {
    //                     foundRepeatingValue = true;
    //                     console.log("getting repeated");
    //                     newList.push(soupTypes[i].name)
    //                     // newList.pop((thisValue));
    //                 }
    //             } newList.push(thisValue);
    //             setSoupIndex(newList);
    //             console.log(soupIndex)
    //             if (newList[0] === soupTypes[0].name) {
    //                 setSoupPic(soupTypes[i].src)
    //             }
    //             // console.log(soupIndex);

    //         } return false;
    //     }
    // }


    // const soupSetter = () => {
    //     // genRandom();
    //     soupIndexSetter();
    //     setSoupInfo(soupIndex);
    // };

    // let

    // onClick={soupSetter}
    // onClick={soupSetter}
    // onClick={soupSetter}

    return (
        <div>
            < div className="soupGuessCard" >
                <h3>On your current row, which soup do you see?</h3>
                <button className="button-8" >{soupIndex[0]}</button>
                <button className="button-8" >{soupIndex[1]}</button>
                <button className="button-8" >{soupIndex[2]}</button>
            </div >
            <SoupImage />
        </div>
    )
}

export default Soup;