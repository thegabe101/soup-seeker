import React, { useState } from "react";
import { emptyBoard } from "./Words";
import "../App.css";
import Letter from "./Letter";
import Soup from "./Soup";
import { useContext } from "react";
import { AppContext } from "../App";
import { Cauldron } from "./Cauldron";
import { GameOver } from "../pages/GameOver";
// import SoupGuessCard from "./SoupCard";

function Board() {
	const {
		mustSoup,
		board,
		currentGuess,
		setCurrentGuess,
		validWord,
		setValidWord,
		gameStarted,
		gameOver,
		souplesWon,
	} = useContext(AppContext);

	return (
		<div className="board">
			{mustSoup !== "" && !gameOver.gameOver && (
				<h3>Yee' must wager a soup!</h3>
			)}
			{validWord !== "" && <h3>Thee' must venture a valid guess!</h3>}
			{gameStarted == false ? (
				<Cauldron pregameCauldron />
			) : (
				<>
					<div className="row row1">
						<Letter letterPosition={0} attemptValue={0} />
						<Letter letterPosition={1} attemptValue={0} />
						<Letter letterPosition={2} attemptValue={0} />
						<Letter letterPosition={3} attemptValue={0} />
						<Letter letterPosition={4} attemptValue={0} />
						{currentGuess.attempt == 0 ? (
							<div className="mainCard">
								<Soup />
							</div>
						) : (
							""
						)}
					</div>
					<div className="row row2">
						<Letter letterPosition={0} attemptValue={1} />
						<Letter letterPosition={1} attemptValue={1} />
						<Letter letterPosition={2} attemptValue={1} />
						<Letter letterPosition={3} attemptValue={1} />
						<Letter letterPosition={4} attemptValue={1} />
						{currentGuess.attempt == 1 ? (
							<div className="mainCard">
								<Soup />
							</div>
						) : (
							""
						)}
					</div>
					<div className="row row3">
						<Letter letterPosition={0} attemptValue={2} />
						<Letter letterPosition={1} attemptValue={2} />
						<Letter letterPosition={2} attemptValue={2} />
						<Letter letterPosition={3} attemptValue={2} />
						<Letter letterPosition={4} attemptValue={2} />
						{currentGuess.attempt == 2 ? (
							<div className="mainCard">
								<Soup />
							</div>
						) : (
							""
						)}
					</div>
					<div className="row row4">
						<Letter letterPosition={0} attemptValue={3} />
						<Letter letterPosition={1} attemptValue={3} />
						<Letter letterPosition={2} attemptValue={3} />
						<Letter letterPosition={3} attemptValue={3} />
						<Letter letterPosition={4} attemptValue={3} />
						{currentGuess.attempt == 3 ? (
							<div className="mainCard">
								<Soup />
							</div>
						) : (
							""
						)}
					</div>
					<div className="row row5">
						<Letter letterPosition={0} attemptValue={4} />
						<Letter letterPosition={1} attemptValue={4} />
						<Letter letterPosition={2} attemptValue={4} />
						<Letter letterPosition={3} attemptValue={4} />
						<Letter letterPosition={4} attemptValue={4} />
						{currentGuess.attempt == 4 ? (
							<div className="mainCard">
								<Soup />
							</div>
						) : (
							""
						)}
					</div>
					<div className="row row6">
						<Letter letterPosition={0} attemptValue={5} />
						<Letter letterPosition={1} attemptValue={5} />
						<Letter letterPosition={2} attemptValue={5} />
						<Letter letterPosition={3} attemptValue={5} />
						<Letter letterPosition={4} attemptValue={5} />
						{currentGuess.attempt == 5 ? (
							<div className="mainCard">
								<Soup />
							</div>
						) : (
							""
						)}
					</div>
				</>
			)}
			{gameStarted == true ? (
				<div className="flexWrapper floatCard">
					<Soup />
				</div>
			) : (
				""
			)}
		</div>
	);
}

export default Board;
