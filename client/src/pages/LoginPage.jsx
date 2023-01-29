import React from "react";
import "../styles/login.css";
import { FiGithub } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { Login } from "../components/Login";
// import "../App.css";

export const LoginPage = () => {
	return (
		<div className="main">
			<Login />
		</div>
	);
};
