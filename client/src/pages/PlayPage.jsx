import React from "react";
import Board from "../components/Board";
import Keyboard from "../components/Keyboard";
import "../App.css";

export const PlayPage = () => {
	return (
		<div className="game">
			<Board />
			<Keyboard />
		</div>
	);
};
