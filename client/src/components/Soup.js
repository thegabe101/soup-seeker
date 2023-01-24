import React from 'react';
import gazpacho from '../assets/images/gazpacho.jpg';
import cornChowder from '../assets/images/cornchowder.jpg';
import "../App.css";


function Soup() {
    const soupArray = [
        {
            name: "gazpacho",
            src: gazpacho
        },
        {
            name: "corn chowder",
            src: cornChowder
        }
    ];

    return (
        <div >{soupArray.map((imgSrc, index) => (<img className='soupImg' src={imgSrc.src} key={index}></img>))}</div>
    )
}

export default Soup;