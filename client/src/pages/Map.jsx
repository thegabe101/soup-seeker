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

export const Map = () => {
	const { playerPosition, setPlayerPosition } = useContext(AppContext);

	return (
		<div className="mapContainer">
			<div className="startingDiv">
				<img className="sam" src={sam}></img>
			</div>
			{playerPosition == 1 && (
				<div className="advance1">
					<img className="ladle" src={ladle}></img>
				</div>
			)}
		</div>
	);
};
