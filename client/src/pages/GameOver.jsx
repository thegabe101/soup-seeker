import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import "../App.css";
import souplord from "../assets/images/souplord.jpg";
import { useAuth } from "../components/AuthProvider";

export const GameOver = () => {
	const {
		gameOver,
		setGameOver,
		correctWord,
		currentGuess,
		souplesWon,
		soupsCorrect,
		guessedWord,
	} = useContext(AppContext);

	const auth = useAuth();

	return (
		<div className="gameOverLose">
			{gameOver.guessedWord == true ? (
				<h3>{auth.user} has become The Lord of the Soup</h3>
			) : (
				""
			)}
			{gameOver.guessedWord == true ? (
				<img className="soupLordImg" src={souplord} />
			) : (
				""
			)}
			<h3>Yee had {souplesWon} Souples correct.</h3>
			<br />
			<h3>
				Yee failed to collect 11 ladles before without failing a Souple.
			</h3>
			<br />
			{gameOver.guessedWord && (
				<h3>Thy soup was sought in {soupsCorrect + 1} attempts.</h3>
			)}
			<h3>
				{gameOver.guessedWord == true
					? "Thee' hath fared well."
					: "Thy soup was not sought."}
			</h3>
			<button className="playAgain">Seek Again</button>
		</div>
	);
};
