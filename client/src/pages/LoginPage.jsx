import React from "react";
// import "../styles/login.css";
import { FiGithub } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { Login } from "../components/Login";
import "../App.css";
import { useContext } from "react";
import App, { AppContext } from "../App";
import { PlayPage } from "./PlayPage";
import Register from "../components/Register";

export const LoginPage = () => {
	const { userPersist, setUserPersist } = useContext(AppContext);

	return (
		<div>
			<Login />
			{/* <Register /> */}
			{/* {userPersist !== true ? <Login /> : <PlayPage />} */}
		</div>
	);
};
