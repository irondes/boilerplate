"use client";

import { LogInIcon } from "lucide-react";
import { Button } from "../ui/button";
type Props = {
	onSignIn: () => Promise<void>;
};

const SignIn = ({ onSignIn }: Props) => {
	return (
		<Button
			onClick={() => {
				onSignIn();
			}}
			// variant={"secondary"}
		>
			<LogInIcon />
			Login
		</Button>
	);
};

export default SignIn;
