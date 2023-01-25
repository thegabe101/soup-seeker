import gazpacho from '../assets/images/gazpacho.jpg';
import cornChowder from '../assets/images/cornchowder.jpg';
import tomatosoup from '../assets/images/tomatosoup.jpg';
import React from 'react';

function SoupData() {
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
        <div>{soupArray.map((name, index) => <button>{name.name}</button>)}</div>
    );
};

export default SoupData;

