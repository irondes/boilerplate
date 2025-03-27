// "use client"; // Torna o componente um Client Component

import { stackServerApp } from "@/stack";
import { UserButton } from "@stackframe/stack";

export default async function Home() {
	const handleColorModeToggle = () => {
		console.log("color mode toggle clicked");
	};
	await stackServerApp.getUser({ or: "redirect" });

	return (
		<div>
			{/* <UserButton
				showUserInfo={false}
				colorModeToggle={handleColorModeToggle} // Agora é uma função válida no cliente
			/> */}
			<h1>
				{/* <TopBar /> */}
				My home
			</h1>
		</div>
	);
}
