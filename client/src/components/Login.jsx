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
	let [timeLeft, setTimeLeft] = useState(3);

	const { userPersist, setUserPersist } = useContext(AppContext);

	const postNewUser = () => {
		axios
			.post("https://soup-seeker.herokuapp.com/register", {
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
			.post("https://soup-seeker.herokuapp.com/loginuser", {
				username: logUsername,
				password: logPassword,
			})
			.then((response) => {
				if (response.data.message) {
					console.log(response.data);
					setLoginStat(response.data.message);
				} else {
					auth.login(logUsername);
					localStorage.setItem("user", logUsername);
					setLoginStat(
						`Welcome back, seeker of the soup ${response.data[0].username}.`,
						setTimeout(() => {
							setTimeLeft((timeLeft -= 1));
							navigate(`/play`, { replace: true });
						}, 1500)
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
