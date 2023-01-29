import React from "react";
import { useState } from "react";
// import { AppContext } from "../App";
import { FiGithub } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { useAuth } from "./AuthProvider";
import { useContext } from "react";
import { AppContext } from "../App";
import { useEffect } from "react";
import Register from "./Register";

export const Login = () => {
	const navigate = useNavigate();

	const [userName, setUserName] = useState("");
	const [passwordReg, setPasswordReg] = useState("");
	const [email, setEmail] = useState("");
	const [logUsername, setLogUsername] = useState("");
	const [logPassword, setLogPassword] = useState("");
	const [loginStat, setLoginStat] = useState("");
	const auth = useAuth();
	let timeLeft = 2;

	const { userPersist, setUserPersist } = useContext(AppContext);

	// useEffect(() => {
	// 	const loggedInUser = localStorage.getItem("user");
	// 	if (loggedInUser === true) {
	// 		navigate("/play");
	// 	}
	// }, [setUserPersist]);

	// useEffect(() => {
	// 	if (auth) {
	// 		navigate("/play");
	// 	}
	// }, []);

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
					// console.log(logUsername);
					// setUserPersist(true);
					// localStorage.setItem("user", userPersist);
					auth.login(logUsername);
					localStorage.setItem("user", logUsername);
					setLoginStat(
						`Welcome, seeker of the soup ${response.data[0].username}, seek in ${timeLeft}`,
						setTimeout(() => {
							timeLeft -= 1;
							navigate(`/play`, { replace: true });
						}, 3000)
					);
				}
			});
	};

	return (
		<div className="loginPage">
			<h1 className="loginHeader">Enter within and seek thy soup...</h1>
			<div className="loginContainer">
				<h1 className="loginText">Login</h1>
				<input
					className="form__input"
					type="text"
					placeholder="username"
					onChange={(e) => {
						setLogUsername(e.target.value);
					}}
				/>
				<input
					className="form__input"
					type="text"
					placeholder="password"
					onChange={(e) => {
						setLogPassword(e.target.value);
					}}
				/>
				<button className="button-7" onClick={loginUser}>
					Seek
				</button>
				<br />
			</div>
			<div>
				<h3 className="loginText">New seeker? Sign up below...</h3>
				<input
					className="form__input"
					type="text"
					placeholder="email"
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<input
					className="form__input"
					type="text"
					placeholder="username"
					onChange={(e) => {
						setUserName(e.target.value);
					}}
				/>
				<input
					className="form__input"
					type="text"
					placeholder="password"
					onChange={(e) => {
						setPasswordReg(e.target.value);
					}}
				/>
			</div>
			<div>
				<button className="button-7" onClick={postNewUser}>
					Register
				</button>
			</div>
			<h2 className="loginStat">{loginStat}</h2>
			<br />
		</div>
	);
};
