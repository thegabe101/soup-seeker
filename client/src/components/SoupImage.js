import React from 'react';
import { soupTypes } from '../soup-types';
import { useContext, useEffect } from 'react';
import { AppContext } from '../App';

function SoupImage(props) {

    let i = 0;

    const genRandom = () => {
        i = Math.random() * soupTypes.length;
        // console.log(i);

        i = Math.floor(i);
        return i;
    }

    const { soupPic, setSoupPic } = useContext(AppContext);

    const setPic = () => {
        setSoupPic(soupTypes[i].src)
    }

    useEffect(() => {
        genRandom();
        setPic();
    }, [])


    return (
        <div><img className="soupImg" src={soupPic} ></img></div>
    );
};

export default SoupImage;
