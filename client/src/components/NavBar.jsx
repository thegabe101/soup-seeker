import React from "react";
import "../App.css";
import { Profile } from "../pages/Profile";
import { NavLink } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
	const auth = useAuth();
	const navigate = useNavigate();
	const handleLogout = () => {
		auth.logout();
		navigate("/");
	};

	return (
		<nav>
			<h2>Soup Seeker</h2>
			<NavLink to="/">Home</NavLink>
			{!auth.user && <NavLink to="/login">Login</NavLink>}
			{auth.user && <NavLink to="/profile">Profile</NavLink>}
			<button onClick={handleLogout}>Logout</button>
		</nav>
	);
};
