import React from 'react';
import gazpacho from '../assets/images/gazpacho.jpg';
import cornChowder from '../assets/images/cornchowder.jpg';
import tomatosoup from '../assets/images/tomatosoup.jpg';
import "../App.css";


function Soup(props) {
    const soupArray = [
        {
            name: "gazpacho",
            src: gazpacho
        },
        {
            name: "corn chowder",
            src: cornChowder
        },
        {
            name: "tomato soup",
            src: tomatosoup
        }
    ];

    return (
        <div >{soupArray.map((imgSrc, name, index) => (<img className='soupImg' src={imgSrc.src} key={index} ></img>))}</div>
    )
}

export default Soup;