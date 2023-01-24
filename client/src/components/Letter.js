import React from 'react';
import '../App.css';
import { useContext } from 'react';
import { AppContext } from '../App';



function Letter({ letterPosition, attemptValue }) {
    const { board } = useContext(AppContext);

    //define access to each individual letter through indexing by row and then column

    const letter = board[attemptValue][letterPosition];

    return (
        <div className='letter'>{letter}</div>
    )
}

export default Letter;