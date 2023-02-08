import React from "react";
import { picasso } from "../assets/images/picassosoup.jpg";
import "../styles/landing-page.css";
import { NavLink } from "react-router-dom";

export const LandingPage = () => {
	return (
		<div className="picasso">
			<div className="seek">
			<h1>Welcome, Soup Seeker</h1>
				<NavLink to="/login" className="button-5">
					Login
				</NavLink>
			</div>
		</div>
	);
};
