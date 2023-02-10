import React from 'react';
import cauldron from '../assets/images/cauldron.png';
import '../App.css';
import { useContext } from 'react';
import { AppContext } from '../App';
import ladle from '../assets/images/ladle.png';

export const Cauldron = ({ cauldronCard, pregameCauldron }) => {
    const { gameStarted, setGameStarted } = useContext(AppContext);

    return (
        <div className={pregameCauldron ? "pregameCauldron" : cauldronCard && 'cauldronCard'}>
            <h1>The Heart</h1>
            <img className="cauldronImg" src={cauldron}></img>
            <h1>of the Soup</h1>
            <br />
            {gameStarted == true && <h4>11x <img className='ladle' src={ladle} /></h4>}
            {gameStarted == false ? <button className='button-7 ' onClick={(() => { setGameStarted(true) })}>Begin thy search</button> : ''}
        </div>
    )
}
