import React from "react";
import { soupTypes } from "../soup-types";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import '../App.css';



function SoupGuessCard() {
    let i = 0;

    const genRandom = () => {
        i = Math.random() * soupTypes.length;
        // console.log(i);

        i = Math.floor(i);
        console.log(i);
        return i;
    }

    const { soupInfo, setSoupInfo } = useContext(AppContext);

    const soupSetter = () => {
        genRandom();
        setSoupInfo(
            [soupTypes[i].name]
        );
    };


    useEffect(() => {
        genRandom();
        soupSetter();
    }, [])


    return (
        <div className="soupGuessCard">
            <h3>On your current row, which soup do you see?</h3>
            <button className="button-5" onClick={soupSetter}>{soupInfo}</button>
            <button className="button-5" onClick={soupSetter}>{soupInfo}</button>
            <button className="button-5" onClick={soupSetter}>{soupInfo}</button>
        </div>
    );
};



export default SoupGuessCard;