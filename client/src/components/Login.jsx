import React from "react";
import { useContext, useState } from "react";
// import { AppContext } from "../App";
import { FiGithub } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import "../styles/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { useAuth } from "./AuthProvider";

export const Login = () => {
	const navigate = useNavigate();

	// const [user, setUser] = useState("");
	const [userName, setUserName] = useState("");
	const [passwordReg, setPasswordReg] = useState("");
	const [email, setEmail] = useState("");
	const [logUsername, setLogUsername] = useState("");
	const [logPassword, setLogPassword] = useState("");
	const [loginStat, setLoginStat] = useState("");
	const auth = useAuth();
	let timeLeft = 3;

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
				if (response.data.message) {
					console.log(response.data);
					setLoginStat(response.data.message);
				} else {
					console.log(logUsername);
					auth.login(logUsername);
					setLoginStat(
						`Welcome, seeker of the soup ${response.data[0].username}, seek in ${timeLeft}`,
						setTimeout(() => {
							timeLeft -= 1;
							navigate(`/`);
						}, 3000)
					);
				}
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
			<h2 className="loginStat">{loginStat}</h2>
			<br />
			<div className="iconRow">
				<IconContext.Provider
					value={{
						color: "white",
						size: "2em",
					}}
				>
					<FiGithub />
					<h2>| |</h2>
					<CiTwitter />
					<h2>| |</h2>
					<CiFacebook />
				</IconContext.Provider>
			</div>
		</div>
	);
};
