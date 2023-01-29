import React from "react";
import { useAuth } from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import ProfImg from "../components/ImgUpload";
import "../App.css";
// import "../styles/profile.css";

export const Profile = () => {
	const { gamesWon, setGamesWon } = useContext(AppContext);

	const auth = useAuth();
	const navigate = useNavigate();
	const handleLogout = () => {
		auth.logout();
		navigate("/");
	};

	return (
		<div className="container">
			<div className="card-wrapper">
				<h1>Welcome, Seeker</h1>
				<h2>
					You have won {gamesWon} games in your soup seeking career.
				</h2>
				<div className="card">
					<div className="card-image">
						<ProfImg />
					</div>
					<div>
						<h2 className="cardInfo">Username: {auth.user}</h2>
					</div>
				</div>
			</div>
		</div>
	);
};
