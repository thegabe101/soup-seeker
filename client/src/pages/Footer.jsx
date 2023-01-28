import React from "react";
import "../styles/footer.css";
import { FiGithub } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { IconContext } from "react-icons";

export const Footer = () => {
	return (
		<div className="footer">
			<IconContext.Provider
				value={{
					color: "white",
					size: "1.7em",
				}}
			>
				<FiGithub className="iconPadding" />
				<CiTwitter className="iconPadding" />
				<CiFacebook className="iconPadding" />
			</IconContext.Provider>
		</div>
	);
};
