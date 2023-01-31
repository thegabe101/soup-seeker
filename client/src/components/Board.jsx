import React, { useState } from "react";
import { emptyBoard } from "./Words";
import "../App.css";
import Letter from "./Letter";
import Soup from "./Soup";
import { useContext } from "react";
import { AppContext } from "../App";
// import SoupGuessCard from "./SoupCard";

function Board() {
	const { board, currentGuess, setCurrentGuess, validWord, setValidWord } =
		useContext(AppContext);

	return (
		<div className="board">
			{validWord !== "" && <h3>You must guess a valid word!</h3>}
			<div className="row">
				<Letter letterPosition={0} attemptValue={0} />
				<Letter letterPosition={1} attemptValue={0} />
				<Letter letterPosition={2} attemptValue={0} />
				<Letter letterPosition={3} attemptValue={0} />
				<Letter letterPosition={4} attemptValue={0} />
				{currentGuess.attempt == 0 ? (
					<div>
						{/* <SoupGuessCard className="soupRow" />  */}
						<Soup />
					</div>
				) : (
					""
				)}
			</div>
			<div className="row">
				<Letter letterPosition={0} attemptValue={1} />
				<Letter letterPosition={1} attemptValue={1} />
				<Letter letterPosition={2} attemptValue={1} />
				<Letter letterPosition={3} attemptValue={1} />
				<Letter letterPosition={4} attemptValue={1} />
				{currentGuess.attempt == 1 ? (
					<div>
						{/* <SoupGuessCard className="soupRow" />  */}
						<Soup />
					</div>
				) : (
					""
				)}
			</div>
			<div className="row">
				<Letter letterPosition={0} attemptValue={2} />
				<Letter letterPosition={1} attemptValue={2} />
				<Letter letterPosition={2} attemptValue={2} />
				<Letter letterPosition={3} attemptValue={2} />
				<Letter letterPosition={4} attemptValue={2} />
				{currentGuess.attempt == 2 ? (
					<div>
						{/* <SoupGuessCard className="soupRow" />  */}
						<Soup />
					</div>
				) : (
					""
				)}
			</div>
			<div className="row">
				<Letter letterPosition={0} attemptValue={3} />
				<Letter letterPosition={1} attemptValue={3} />
				<Letter letterPosition={2} attemptValue={3} />
				<Letter letterPosition={3} attemptValue={3} />
				<Letter letterPosition={4} attemptValue={3} />
				{currentGuess.attempt == 3 ? (
					<div>
						{/* <SoupGuessCard className="soupRow" />  */}
						<Soup />
					</div>
				) : (
					""
				)}
			</div>
			<div className="row">
				<Letter letterPosition={0} attemptValue={4} />
				<Letter letterPosition={1} attemptValue={4} />
				<Letter letterPosition={2} attemptValue={4} />
				<Letter letterPosition={3} attemptValue={4} />
				<Letter letterPosition={4} attemptValue={4} />
				{currentGuess.attempt == 4 ? (
					<div>
						{/* <SoupGuessCard className="soupRow" />  */}
						<Soup />
					</div>
				) : (
					""
				)}
			</div>
			<div className="row">
				<Letter letterPosition={0} attemptValue={5} />
				<Letter letterPosition={1} attemptValue={5} />
				<Letter letterPosition={2} attemptValue={5} />
				<Letter letterPosition={3} attemptValue={5} />
				<Letter letterPosition={4} attemptValue={5} />
				{currentGuess.attempt == 5 ? (
					<div>
						{/* <SoupGuessCard className="soupRow" />  */}
						<Soup />
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
}

export default Board;
