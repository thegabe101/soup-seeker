import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const GameOver = () => {
	const { gameOver, setGameOver, correctWord, currentGuess } =
		useContext(AppContext);

	return (
		<div>
			<h3>
				{gameOver.guessedWord
					? "A winner!"
					: "The soup was not sought."}
			</h3>
			<h3>Today's word was {correctWord}</h3>
			{gameOver.guessedWord && (
				<h3>The soup was sought in {currentGuess.attempt} attempts.</h3>
			)}
		</div>
	);
};
