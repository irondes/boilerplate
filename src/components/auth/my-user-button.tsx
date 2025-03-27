"use client";
import { UserButton } from "@stackframe/stack";
import React from "react";

const MyUserButton = () => {
	const handleColorModeToggle = () => {
		console.log("color mode toggle clicked");
	};
	return (
		<UserButton
			showUserInfo={false}
			colorModeToggle={handleColorModeToggle} // Agora é uma função válida no cliente
		/>
	);
};

export default MyUserButton;
