import React from "react";
import { soupTypes } from "../soup-types";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";



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
        setSoupInfo(
            [soupTypes[i].name]
        );
    };


    useEffect(() => {
        genRandom();
        soupSetter();
    }, [])


    return (
        <div>
            <div>
                <h3>On your current row, which soup do you see?</h3>
                <button>{soupInfo}</button>
                <button>{soupInfo}</button>
                <button>{soupInfo}</button>
            </div>
        </div>
    );
};



export default SoupGuessCard;