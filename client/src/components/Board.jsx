import React, { useState } from "react";
import { emptyBoard } from "./Words";
import "../App.css";
import Letter from "./Letter";
import Soup from "./Soup";
import { useContext } from "react";
import { AppContext } from "../App";

function Board() {
	const { board } = useContext(AppContext);

	return (
		<div className="board">
			<div className="row">
				<Letter letterPosition={0} attemptValue={0} />
				<Letter letterPosition={1} attemptValue={0} />
				<Letter letterPosition={2} attemptValue={0} />
				<Letter letterPosition={3} attemptValue={0} />
				<Letter letterPosition={4} attemptValue={0} />
				<Soup />
			</div>
			<div className="row">
				<Letter letterPosition={0} attemptValue={1} />
				<Letter letterPosition={1} attemptValue={1} />
				<Letter letterPosition={2} attemptValue={1} />
				<Letter letterPosition={3} attemptValue={1} />
				<Letter letterPosition={4} attemptValue={1} />
				{board[1][0] ? <Soup /> : ""}
			</div>
			<div className="row">
				<Letter letterPosition={0} attemptValue={2} />
				<Letter letterPosition={1} attemptValue={2} />
				<Letter letterPosition={2} attemptValue={2} />
				<Letter letterPosition={3} attemptValue={2} />
				<Letter letterPosition={4} attemptValue={2} />
				{board[2][0] ? <Soup /> : ""}
			</div>
			<div className="row">
				<Letter letterPosition={0} attemptValue={3} />
				<Letter letterPosition={1} attemptValue={3} />
				<Letter letterPosition={2} attemptValue={3} />
				<Letter letterPosition={3} attemptValue={3} />
				<Letter letterPosition={4} attemptValue={3} />
				{board[3][0] ? <Soup /> : ""}
			</div>
			<div className="row">
				<Letter letterPosition={0} attemptValue={4} />
				<Letter letterPosition={1} attemptValue={4} />
				<Letter letterPosition={2} attemptValue={4} />
				<Letter letterPosition={3} attemptValue={4} />
				<Letter letterPosition={4} attemptValue={4} />
				{board[4][0] ? <Soup /> : ""}
			</div>
			<div className="row">
				<Letter letterPosition={0} attemptValue={5} />
				<Letter letterPosition={1} attemptValue={5} />
				<Letter letterPosition={2} attemptValue={5} />
				<Letter letterPosition={3} attemptValue={5} />
				<Letter letterPosition={4} attemptValue={5} />
				{board[5][0] ? <Soup /> : ""}
			</div>
		</div>
	);
}

export default Board;
