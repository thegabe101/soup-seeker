import React from 'react';
import "../App.css";
import SoupImage from './SoupImage';
import { useState } from 'react';
import { useContext, useEffect } from 'react';
import { AppContext } from '../App';
import { soupTypes } from '../soup-types';


function Soup(props) {
    let i = 0;
    const max = soupTypes.length;
    const { soupIndex, setSoupIndex } = useContext(AppContext);

    // const { src, index } = props;
    // const [soupInfo, setSoupInfo] = useState({ src, index })
    const genRandom = () => {
        i = Math.random() * soupTypes.length;
        // console.log(i);

        i = Math.floor(i);
        return i;
    }


    const indexSetter = () => {
        genRandom();
        setSoupIndex([Math.floor(Math.random(i) * max), Math.floor(Math.random(i) * max), Math.floor(Math.random(i) * max)]);
        console.log(soupIndex);
        console.log(max);
    }

    useEffect(() => {
        indexSetter();
    }, [])

    return (
        <div><SoupImage index={soupIndex} /></div>
    )
}

export default Soup;