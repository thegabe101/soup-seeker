import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { FiGithub } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import "../styles/login.css";

export const Login = () => {
	const { userName, getUsername } = useContext(AppContext);
	const { passwordReg, setPasswordReg } = useContext(AppContext);

	return (
		<div className="loginPage">
			<h1 className="loginHeader">Enter within and seek thy soup...</h1>
			<div className="loginContainer">
				<h1>Login</h1>
				<input type="text" placeholder="username" />
				<input type="text" placeholder="password" />
				<br />
				<FiGithub />
				<CiTwitter />
			</div>
			<div>
				<h3>New seeker? Sign up below...</h3>
				<input type="text" placeholder="email" />
				<input type="text" placeholder="username" />
				<input type="text" placeholder="password" />
			</div>
		</div>
	);
};
