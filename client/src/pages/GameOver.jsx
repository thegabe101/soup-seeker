import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import "../App.css";

export const GameOver = () => {
	const { gameOver, setGameOver, correctWord, currentGuess } =
		useContext(AppContext);

	return (
		<div className="gameOverLose">
			<h3>
				{gameOver.guessedWord
					? "A winner!"
					: "Thy soup was not sought."}
			</h3>
			<h3>Today's word was {correctWord}.</h3>
			{gameOver.guessedWord && (
				<h3>Thy soup was sought in {currentGuess.attempt} attempts.</h3>
			)}
		</div>
	);
};
