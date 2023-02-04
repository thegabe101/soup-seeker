import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import "../App.css";

export const GameOver = () => {
	const {
		gameOver,
		setGameOver,
		correctWord,
		currentGuess,
		souplesWon,
		soupsCorrect,
	} = useContext(AppContext);

	return (
		<div className="gameOverLose">
			<h3 className="soupWin">
				{gameOver.guessedWord
					? "Thee' hath fared well."
					: "Thy soup was not sought."}
			</h3>
			<h3 className="soupWin">Today's word was {correctWord}.</h3>
			<br />
			{gameOver.guessedWord && (
				<h3>
					<br />
					Thy soup was sought in {soupsCorrect + 1} attempts.
				</h3>
			)}
		</div>
	);
};
