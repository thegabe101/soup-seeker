import React from "react";
import { soupTypes } from "../soup-types";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import '../App.css';

function SoupGuessCard() {
    let i = 0;
    let soupArr = [];
    const max = soupTypes.length;
    const genRandom = () => {
        i = Math.random() * soupTypes.length;
        // console.log(i);

        i = Math.floor(i);
        return i;
    }

    const { soupInfo, setSoupInfo, soupIndex, setSoupIndex, soupPic, setSoupPic } = useContext(AppContext);


    const soupIndexSetter = () => {
        for (let j = 0; j < 3; j++) {
            if (!soupArr.includes(soupTypes[j].name)) {
                soupArr.push(soupTypes[Math.floor(Math.random(i) * max)].name);
            }
        }
        let newList = [];
        let foundRepeatingValue = false;
        for (let j = 0; j < max; j++) {
            for (i = 0; i < soupArr.length; i++) {
                let thisValue = soupArr[i];
                if (i > 0) {
                    if (newList.indexOf(thisValue) > -1) {
                        foundRepeatingValue = true;
                        console.log("getting repeated");
                        newList.pop((thisValue));
                    }
                } newList.push(thisValue);
                setSoupIndex(newList);
                if (newList[0] === soupTypes[0].name) {
                    setSoupPic(soupTypes[i].src)
                }
                // console.log(soupIndex);

            } return false;
        }
    }


    const soupSetter = () => {
        genRandom();
        soupIndexSetter();
        setSoupInfo(soupIndex);
        // console.log(soupInfo)
    };


    useEffect(() => {
        genRandom();
        soupSetter();
        // setSoupPic(soupTypes[i].src)
        // return () => {
        //     setSoupPic(soupTypes[i].src);
        // }
    }, [setSoupPic])


    return (
        <div className="soupGuessCard">
            <h3>On your current row, which soup do you see?</h3>
            <button className="button-8" onClick={soupSetter}>{soupIndex[0]}</button>
            <button className="button-8" onClick={soupSetter}>{soupIndex[1]}</button>
            <button className="button-8" onClick={soupSetter}>{soupIndex[2]}</button>
        </div>
    );
};



export default SoupGuessCard;