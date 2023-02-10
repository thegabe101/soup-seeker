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
			{guessedWord ? (
				<h3>{auth.user} has become The Lord of the Soup</h3>
			) : (
				""
			)}
			{guessedWord ? <img className="soupLordImg" src={souplord} /> : ""}
			<h3>
				{gameOver.guessedWord
					? "Thee' hath fared well."
					: "Thy soup was not sought."}
			</h3>
			<h3 className="yee">Yee had {souplesWon} Souples correct.</h3>
			<br />
			{gameOver.guessedWord && (
				<h3>
					<br />
					Thy soup was sought in {soupsCorrect + 1} attempts.
				</h3>
			)}
			<br />
			<button className="playAgain">Seek Again</button>
		</div>
	);
};
