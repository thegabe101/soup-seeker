import React, { useState } from 'react';
import { soupTypes } from '../soup-types';
import { useContext, useEffect } from 'react';
import { AppContext } from '../App';

function SoupImage(props) {
    // const [soupImgState, setSoupImgState] = useState(null);

    let i = 0;

    const genRandom = () => {
        i = Math.random() * soupTypes.length;
        // console.log(i);

        i = Math.floor(i);
        return i;
    }

    const { soupPic, setSoupPic, soupIndex, setSoupIndex, soupInfo, setSoupInfo } = useContext(AppContext);

    const setPic = () => {
        // if (soupTypes[i].name)
        console.log(soupIndex);
        for (let j = 0; j < soupIndex.length; j++) {
            if (soupTypes[j].name === soupIndex[j]) {
                setSoupPic(soupTypes[j].src)
            }
        }
    }

    useEffect(() => {
        genRandom();
        setPic();

        return () => {
            setPic(soupPic)
        }
    },)


    return (
        <div><img className="soupImg" src={soupPic} ></img></div>
    );
};

export default SoupImage;
