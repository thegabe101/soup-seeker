import React from "react";
import Board from "../components/Board";
import Keyboard from "../components/Keyboard";
import "../App.css";
import { useContext, useState } from "react";
import { AppContext } from "../App";
import SoupGuessCard from "../components/SoupCard";
import { GameOver } from "./GameOver";
import { Map } from "./Map";

export const PlayPage = () => {
	const { gameOver } = useContext(AppContext);

	return (
		<div className="game">
			<Board />
			{gameOver.gameOver ? <GameOver /> : <Map />}
			{gameOver.gameOver ? <GameOver /> : <Keyboard />}
		</div>
	);
};
