import React from "react";
import { useContext, useState } from "react";
import { AppContext } from "../App";
import { FiGithub } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import "../styles/login.css";
import axios from "axios";

export const Login = () => {
	// const { userName, setUsername } = useContext(AppContext);
	// const { passwordReg, setPasswordReg } = useContext(AppContext);
	// const { email, setEmail } = useContext(AppContext);

	const [userName, setUserName] = useState("");
	const [passwordReg, setPasswordReg] = useState("");
	const [email, setEmail] = useState("");
	const [logUsername, setLogUsername] = useState("");
	const [logPassword, setLogPassword] = useState("");
	const [loginStat, setLoginStat] = useState("");

	const postNewUser = () => {
		axios
			.post("http://localhost:3001/register", {
				email: email,
				username: userName,
				password: passwordReg,
			})
			.then((response) => {
				console.log(response);
			});
	};

	const loginUser = () => {
		axios
			.post("http://localhost:3001/loginuser", {
				username: logUsername,
				password: logPassword,
			})
			.then((response) => {
				console.log(response.data);
				setLoginStat(response.data.message);
			});
	};

	return (
		<div className="loginPage">
			<h1 className="loginHeader">Enter within and seek thy soup...</h1>
			<div className="loginContainer">
				<h1>Login</h1>
				<input
					type="text"
					placeholder="username"
					onChange={(e) => {
						setLogUsername(e.target.value);
					}}
				/>
				<input
					type="text"
					placeholder="password"
					onChange={(e) => {
						setLogPassword(e.target.value);
					}}
				/>
				<button onClick={loginUser}>Seek</button>
				<h2 className="loginStat">{loginStat}</h2>
				<FiGithub />
				<CiTwitter />
				<br />
			</div>
			<div>
				<h3>New seeker? Sign up below...</h3>
				<input
					type="text"
					placeholder="email"
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<input
					type="text"
					placeholder="username"
					onChange={(e) => {
						setUserName(e.target.value);
					}}
				/>
				<input
					type="text"
					placeholder="password"
					onChange={(e) => {
						setPasswordReg(e.target.value);
					}}
				/>
			</div>
			<div>
				<button onClick={postNewUser}>Register</button>
			</div>
		</div>
	);
};
