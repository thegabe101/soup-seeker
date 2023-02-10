import React from "react";
import { picasso } from "../assets/images/picassosoup.jpg";
import "../styles/landing-page.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import { useAuth } from "../components/AuthProvider";

export const LandingPage = () => {
	const auth = useAuth();

	return (
		<div className="picasso">
			<div className="seek">
				{auth.user ? (
					<>
						<h1>Welcome, Soup Seeker</h1>{" "}
						<NavLink to="/play" className="button-5">
							Play
						</NavLink>{" "}
					</>
				) : (
					<>
						<h1>Welcome, Soup Seeker</h1>
						<NavLink to="/login" className="button-5">
							Login
						</NavLink>
					</>
				)}
			</div>
		</div>
	);
};
