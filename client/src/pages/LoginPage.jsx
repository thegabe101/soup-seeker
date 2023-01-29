import React from "react";
import "../styles/login.css";
import { FiGithub } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { Login } from "../components/Login";
// import "../App.css";
import { useContext } from "react";
import App, { AppContext } from "../App";
import { PlayPage } from "./PlayPage";

export const LoginPage = () => {
	const { userPersist, setUserPersist } = useContext(AppContext);

	return (
		<div className="main">
			<Login />
			{/* {userPersist !== true ? <Login /> : <PlayPage />} */}
		</div>
	);
};
