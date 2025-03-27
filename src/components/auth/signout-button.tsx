"use client";

import { LogOutIcon } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
	onSignOut: () => Promise<void>;
};

const SignOut = ({ onSignOut }: Props) => {
	return (
		<Button variant={"destructive"}>
			{/* <LogOutIcon /> */}
			Logout
		</Button>
	);
};

export default SignOut;
