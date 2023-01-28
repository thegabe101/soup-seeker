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

    const { soupInfo, setSoupInfo, soupIndex, setSoupIndex } = useContext(AppContext);

    // let soupArr = new Set();

    // soupArr.add(soupTypes[Math.floor(Math.random(i) * max)].name);
    // soupArr.add(soupTypes[Math.floor(Math.random(i) * max)].name);
    // soupArr.add(soupTypes[Math.floor(Math.random(i) * max)].name);
    // soupArr.add(soupTypes[Math.floor(Math.random(i) * max)].name);

    let dupeInd = soupArr.filter((s, index) => {
        return soupArr.indexOf(s) !== index;
    });

    let noDupeArr = [];

    // const duplicateChecker = () => {
    //     soupArr.forEach((c) => {
    //         if (!soupArr.includes(c)) {
    //             if (soupArr.length < 4)
    //                 soupArr.push(c);
    //         }
    //     })
    // }


    // let newList = [];
    // const check = (soupArr) => {
    //     let foundRepeatingValue = false;
    //     for (i = 0; i < soupArr.length; i++) {
    //         let thisValue = soupArr[i];
    //         if (i > 0) {
    //             if (newList.indexOf(thisValue) > -1) {
    //                 foundRepeatingValue = true;
    //                 console.log("getting repeated");
    //                 return true;
    //             }
    //         } newList.push(thisValue);
    //         console.log(newList);
    //     } return false;
    // }

    const soupIndexSetter = () => {
        for (let j = 0; j < 4; j++) {
            if (!soupArr.includes(soupTypes[j].name)) {
                soupArr.push(soupTypes[Math.floor(Math.random(i) * max)].name);
            }
        }
        // check();
        // duplicateChecker();
        let newList = [];
        let foundRepeatingValue = false;
        for (let j = 0; j < max; j++) {
            for (i = 0; i < soupArr.length; i++) {
                let thisValue = soupArr[i];
                if (i > 0) {
                    if (newList.indexOf(thisValue) > -1) {
                        foundRepeatingValue = true;
                        console.log("getting repeated");
                        return true;
                    }
                } newList.push(thisValue);
                setSoupIndex(newList);
                console.log(newList);
            } return false;
        }
    }


    const soupSetter = () => {
        genRandom();
        soupIndexSetter();
        // setSoupInfo([soupTypes[i].name]
        // );
    };


    useEffect(() => {
        genRandom();
        soupSetter();
    }, [])


    return (
        <div className="soupGuessCard">
            <h3>On your current row, which soup do you see?</h3>
            <button className="button-5" onClick={soupSetter}>{soupIndex[0]}</button>
            <button className="button-5" onClick={soupSetter}>{soupIndex[1]}</button>
            <button className="button-5" onClick={soupSetter}>{soupIndex[2]}</button>
        </div>
    );
};



export default SoupGuessCard;