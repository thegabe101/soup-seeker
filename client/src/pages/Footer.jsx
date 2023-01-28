import React from "react";
import "../styles/footer.css";
import { FiGithub } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { IconContext } from "react-icons";

export const Footer = () => {
	return (
		<div className="footer">
			<div>
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
