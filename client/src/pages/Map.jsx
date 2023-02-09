import React from "react";
import "../App.css";
import ladle from "../assets/images/ladle.png";
import cauldron from "../assets/images/cauldron.png";
import sam from "../assets/images/sam.png";
import { useContext } from "react";
import { AppContext } from "../App";
import { useAuth } from "../components/AuthProvider";
import { Cauldron } from "../components/Cauldron";

export const Map = () => {
	const { playerPosition, setPlayerPosition, gameOver, gameStarted } =
		useContext(AppContext);

	const auth = useAuth();

	return (
		<div className="mapContainer">
			{gameStarted == true && (
				<div className="secondDiv">
					<h4 className="stage">{auth.user}</h4>
					<img className="sam" src={sam}></img>
					<h4 className="stage"> Soup</h4>
					{playerPosition >= 1 && (
						<div className="advance1">
							<img className="ladle" src={ladle}></img>
						</div>
					)}
					{gameStarted == true && playerPosition >= 5 && (
						<div className="secondDiv" style={{ border: "0px" }}>
							<h4 className="stage" style={{ border: "0px" }}>
								{auth.user}
							</h4>
							<img
								className="sam"
								src={sam}
								style={{ border: "0px" }}
							></img>
							<h4 className="stage" style={{ border: "0px" }}>
								Souperior
							</h4>
							{playerPosition >= 5 && (
								<div className="advance1">
									<img className="ladle" src={ladle}></img>
								</div>
							)}
						</div>
					)}
				</div>
			)}
			{gameStarted == true && playerPosition >= 1 && (
				<div className="secondDiv">
					<h4 className="stage">{auth.user}</h4>
					<img className="sam" src={sam}></img>
					<h4 className="stage">Soupier</h4>
					{playerPosition >= 1 && (
						<div className="advance1">
							<img className="ladle" src={ladle}></img>
						</div>
					)}
					{gameStarted == true && playerPosition >= 6 && (
						<div className="secondDiv">
							<h4 className="stage">{auth.user}</h4>
							<img className="sam" src={sam}></img>
							<h4 className="stage">Soupfather</h4>
							{playerPosition >= 6 && (
								<div className="advance1">
									<img className="ladle" src={ladle}></img>
								</div>
							)}
						</div>
					)}
				</div>
			)}
			{gameStarted == true && playerPosition >= 2 && (
				<div className="secondDiv">
					<h4 className="stage">{auth.user}</h4>
					<img className="sam" src={sam}></img>
					<h4 className="stage">Soupour</h4>
					{playerPosition >= 2 && (
						<div className="advance1">
							<img className="ladle" src={ladle}></img>
						</div>
					)}
					{gameStarted == true && playerPosition >= 7 && (
						<div className="secondDiv">
							<h4 className="stage">{auth.user}</h4>
							<img className="sam" src={sam}></img>
							<h4 className="stage">Souplantic</h4>
							{playerPosition >= 7 && (
								<div className="advance1">
									<img className="ladle" src={ladle}></img>
								</div>
							)}
						</div>
					)}
				</div>
			)}
			{gameStarted == true && playerPosition >= 3 && (
				<div className="secondDiv">
					<h4 className="stage">{auth.user}</h4>
					<img className="sam" src={sam}></img>
					<h4 className="stage">Souptastic</h4>
					{playerPosition >= 3 && (
						<div className="advance1">
							<img className="ladle" src={ladle}></img>
						</div>
					)}
					{gameStarted == true && playerPosition >= 8 && (
						<div className="secondDiv">
							<h4 className="stage">{auth.user}</h4>
							<img className="sam" src={sam}></img>
							<h4 className="stage">Soupnado</h4>
							{playerPosition >= 8 && (
								<div className="advance1">
									<img className="ladle" src={ladle}></img>
								</div>
							)}
						</div>
					)}
				</div>
			)}
			{gameStarted == true && playerPosition >= 4 && (
				<div className="secondDiv">
					<h4 className="stage">{auth.user}</h4>
					<img className="sam" src={sam}></img>
					<h4 className="stage">Soupalomaniac</h4>
					{playerPosition >= 4 && (
						<div className="advance1">
							<img className="ladle" src={ladle}></img>
						</div>
					)}
					{gameStarted == true && playerPosition >= 9 && (
						<div className="secondDiv">
							<h4 className="stage">{auth.user}</h4>
							<img className="sam" src={sam}></img>
							<h4 className="stage">Soup Deity</h4>
							{playerPosition >= 9 && (
								<div className="advance1">
									<img className="ladle" src={ladle}></img>
								</div>
							)}
						</div>
					)}
				</div>
			)}
			<div>
			{gameStarted == true && !gameOver.gameover && (
				<Cauldron cauldronCard />
			)}
			</div>
		</div>
	);
};
