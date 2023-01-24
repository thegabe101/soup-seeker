import React from 'react';
import '../App.css';
import { useContext } from 'react';
import App, { AppContext } from '../App';



function Letter({ letterPosition, attemptValue }) {
    const { board } = useContext(AppContext);

    //define access to each individual letter through indexing by row and then column

    const letter = board[letterPosition][attemptValue];

    return (
        <div className='letter'></div>
    )
}

export default Letter;