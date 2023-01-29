import React, { useState } from 'react';
import { soupTypes } from '../soup-types';
import { useContext, useEffect } from 'react';
import { AppContext } from '../App';
import soupdefault from '../assets/images/soupdefault.png';

function SoupImage(props) {
    // const [soupImgState, setSoupImgState] = useState(null);

    let i = 0;

    const genRandom = () => {
        i = Math.random() * soupIndex.length;
        // console.log(i);

        i = Math.floor(i);
        return i;
    }

    const { soupPic, setSoupPic, soupIndex, setSoupIndex, soupInfo, setSoupInfo } = useContext(AppContext);

    // let soupPicIndex = soupIndex[i].toString().indexOf(soupIndex[i]);

    let changedSoupPic = [];
    const setPic = () => {
        let j = soupIndex[i];
        // console.log(j);
        // let soupGrabber = soupTypes[soupIndex[i]].src;
        // setSoupPic(soupGrabber)
        let image = document.getElementsByClassName("soupImg");
        image.src = soupPic;
        setSoupPic(soupPic);
        // let soupGrabber = soupIndex[i];
        // console.log(soupGrabber);
        // setSoupPic(soupTypes[i].src)
    }

    useEffect(() => {
        //default image grabber on component mount 
        genRandom();
        setSoupPic(soupdefault);
        // setPic();
        return () => {
            setPic();
        }
    }, [])


    return (
        <div><img className="soupImg" src={soupPic} ></img></div>
    );
};

export default SoupImage;
