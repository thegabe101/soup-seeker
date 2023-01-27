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

    const soupIndexSetter = () => {
        for (let j = 0; j < 3; j++) {
            soupArr.push(soupTypes[Math.floor(Math.random(i) * max)].name)
        }
        duplicateChecker();
        setSoupIndex(noDupeArr);
    }

    let noDupeArr = [];

    const duplicateChecker = () => {
        soupArr.forEach((c) => {
            if (!noDupeArr.includes(c)) {
                noDupeArr.push(c);
                console.log(noDupeArr);
                duplicateChecker();
            }
        })
        let dupeInd = soupArr.filter((s, index) => {
            return soupArr.indexOf(s) !== index;
        });
        console.log(dupeInd);
    }

    const soupSetter = () => {
        genRandom();
        soupIndexSetter();
        setSoupInfo([soupTypes[i].name]
        );
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