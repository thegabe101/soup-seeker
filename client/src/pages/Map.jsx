import React from "react";
import "../App.css";
import samauri from "../assets/images/samauri.png";
import samauri2 from "../assets/images/samauri2.png";
import samauri3 from "../assets/images/samauri3.png";
import sam from "../assets/images/sam.png";

export const Map = () => {
	return (
		<div className="mapContainer">
			<div className="char">
				<img className="sam" src={sam}></img>
			</div>
		</div>
	);
};
