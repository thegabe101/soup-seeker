import React from "react";
import { useAuth } from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = () => {
	const { gamesWon, setGamesWon } = useContext(AppContext);

	const auth = useAuth();
	const navigate = useNavigate();
	const handleLogout = () => {
		auth.logout();
		navigate("/");
	};

	return (
		<div>
			<h1>Welcome, seeker {auth.user}.</h1>
			<h2>You have won {gamesWon} games in your soup seeking career.</h2>
			<div>
				<button onClick={handleLogout}>Logout</button>
			</div>
		</div>
	);
};
