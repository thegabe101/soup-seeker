import React from "react";
import { useAuth } from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
	const auth = useAuth();
	const navigate = useNavigate();
	const handleLogout = () => {
		auth.logout();
		navigate("/");
	};

	return (
		<div>
			Welcome, {auth.user}
			<div>
				<button onClick={handleLogout}>Logout</button>
			</div>
		</div>
	);
};
