import React from "react";
import "../App.css";
import { Profile } from "../pages/Profile";
import { NavLink } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import soupicon from "../assets/images/souppng.png";
import soupic from "../assets/images/soupic.jpg";

export const NavBar = () => {
	const auth = useAuth();
	const navigate = useNavigate();
	const handleLogout = () => {
		auth.logout();
		navigate("/");
	};

	return (
		<nav>
			<NavLink className="soupIc" to="/">
				<img src={soupic}></img>
			</NavLink>
			<h2 className="soupSeekerTitle">Soup Seeker</h2>

			{!auth.user && (
				<NavLink to="/login" className="button-5">
					Login
				</NavLink>
			)}
			{auth.user && (
				<NavLink to="/profile" className="button-5">
					Profile
				</NavLink>
			)}
			{auth.user && (
				<NavLink to="/play" className="button-5">
					Play
				</NavLink>
			)}
			{auth.user && (
				<button onClick={handleLogout} className="button-6">
					Logout
				</button>
			)}
		</nav>
	);
};
