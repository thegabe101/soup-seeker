import React from "react";
import Board from "../components/Board";
import Keyboard from "../components/Keyboard";
import "../App.css";
import SoupGuessCard from "../components/SoupCard";

export const PlayPage = () => {
	return (
		<div className="game">
			<Board />

			<Keyboard />
		</div>
	);
};
