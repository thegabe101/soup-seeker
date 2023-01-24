import React from "react";
import "../App.css";
import { Profile } from "../pages/Profile";
import { NavLink } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export const NavBar = () => {
	const auth = useAuth();

	return (
		<nav>
			<h2>Soup Seeker</h2>
			<NavLink to="/">Home</NavLink>
			{!auth.user && <NavLink to="/login">Login</NavLink>}
			<NavLink to="/profile">Profile</NavLink>
		</nav>
	);
};
