import React from 'react';
import cauldron from '../assets/images/cauldron.png';
import '../App.css';

export const Cauldron = () => {
    return (
        <div className='cauldronCard'>
            <h1 className='heart'>The Heart</h1>
            <img className="cauldronImg" src={cauldron}></img>
            <h1 className='endHeart'>of the Soup</h1>
        </div>
    )
}