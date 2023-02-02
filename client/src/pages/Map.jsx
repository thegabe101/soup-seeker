import React from "react";
import "../App.css";
import ladle from "../assets/images/ladle.png";
import cauldron from "../assets/images/cauldron.png";
import samauri from "../assets/images/samauri.png";
import samauri2 from "../assets/images/samauri2.png";
import samauri3 from "../assets/images/samauri3.png";
import sam from "../assets/images/sam.png";
import { useContext } from "react";
import { AppContext } from "../App";
import { useAuth } from "../components/AuthProvider";

export const Map = () => {
	const { playerPosition, setPlayerPosition, gameOver, gameStarted } =
		useContext(AppContext);

	const auth = useAuth();

	return (
		<div className="mapContainer">
			{gameStarted == true && (
				<div className="startingDiv">
					<div>{auth.user}</div>
					<img className="sam" src={sam}></img>
					<h4>Stage: Soup</h4>
				</div>
			)}
			{playerPosition >= 1 && (
				<div className="advance1">
					<img className="ladle" src={ladle}></img>
				</div>
			)}
			{gameStarted == true && playerPosition >= 1 && (
				<div className="startingDiv">
					<div>{auth.user}</div>
					<img className="sam" src={sam}></img>
					<h4>Stage: Soupier</h4>
				</div>
			)}
			{playerPosition >= 2 && (
				<div className="advance1">
					<img className="ladle" src={ladle}></img>
				</div>
			)}
			{gameStarted == true && playerPosition >= 2 && (
				<div className="startingDiv">
					<div>{auth.user}</div>
					<img className="sam" src={sam}></img>
					<h4>Stage: Souptastic</h4>
				</div>
			)}
			{playerPosition >= 3 && (
				<div className="advance1">
					<img className="ladle" src={ladle}></img>
				</div>
			)}
		</div>
	);
};
