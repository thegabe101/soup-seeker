import React from 'react';
import cauldron from '../assets/images/cauldron.png';
import '../App.css';
import { useContext } from 'react';
import { AppContext } from '../App';

export const Cauldron = ({ cauldronCard, pregameCauldron }) => {
    const { gameStarted, setGameStarted } = useContext(AppContext);

    return (
        <div className={pregameCauldron ? "pregameCauldron" : cauldronCard && 'cauldronCard'}>
            <h1 className='heart'>The Heart</h1>
            <img className="cauldronImg" src={cauldron}></img>
            <h1 className='endHeart'>of the Soup</h1>
            <div >
                {gameStarted == false ? <button className='button-7 startBtn' onClick={(() => { setGameStarted(true) })}>Begin thy search</button> : ''}
            </div>
        </div>
    )
}
