"use client";

import {
	AudioWaveform,
	BookOpen,
	Bot,
	Building2,
	CaseLowerIcon,
	Command,
	FormInputIcon,
	Frame,
	GalleryVerticalEnd,
	Home,
	icons,
	LogOutIcon,
	// Map,
	MonitorCheckIcon,
	PieChart,
	Settings2,
	SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav/nav-main";
// import { logout } from "@/actions/auth";

// import { NavProjects } from '@/components/nav-projects'
// import { NavUser } from '@/components/nav-user'
// import { TeamSwitcher } from '@/components/team-switcher'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "@/components/ui/sidebar";
import { FaPeopleGroup } from "react-icons/fa6";

// This is sample data.
const data = {
	navMain: [
		{
			title: "Dashboard",
			url: "/",
			icon: Home,
		},
		{
			title: "ItemMenu",
			url: "#",
			icon: FormInputIcon,
			items: [
				{
					title: "SubMenuItem",
					url: "/sub-menu-item",
				},
			],
		},
		// {
		// 	title: "Comercial",
		// 	url: "#",
		// 	icon: MonitorCheckIcon,
		// 	// isActive: true,
		// 	items: [
		// 		{
		// 			title: "Cancelamentos",
		// 			url: "/cancelamentos",
		// 		},
		// 		{
		// 			title: "Tabelas de Preco",
		// 			url: "/cadastros/tabelas",
		// 		},
		// 		{
		// 			title: "Settings",
		// 			url: "#",
		// 		},
		// 	],
		// },
		{
			title: "Settings",
			url: "#",
			icon: Settings2,
			items: [
				{
					title: "Notificações",
					url: "/settings/notification",
					// icon: PiPlugsConnectedFill,
				},
			],
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarContent>
				<NavMain items={data.navMain} />
				{/* <NavProjects projects={data.projects} /> */}
				{/* <SidebarGroup className="mb-20">
					<SidebarGroupContent>
						<SidebarMenuItem>
							<SidebarMenuButton
								asChild
								//onClick={logout}
								className="bg-red-700 text-white hover:bg-red-300 hover:text-white items-center justify-center flex"
							>
								<div className="flex items-center gap-2">
									<LogOutIcon />
									<span>Logout</span>
								</div>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarGroupContent>
				</SidebarGroup> */}
			</SidebarContent>
			<SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
