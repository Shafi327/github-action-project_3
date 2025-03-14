"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Menu, Settings, LogOut, CircleDot } from "lucide-react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";
import { endpoints } from "@/lib/api/endpoints";
import { logout } from "@/utils";

interface HeaderProps {
	onToggleSidebar: () => void;
}

export function Header({ onToggleSidebar }: HeaderProps) {
	const [notifications, setNotifications] = useState([
		{ id: 1, message: "New user registered.", isRead: false },
		{
			id: 2,
			message: "Server maintenance scheduled at midnight.",
			isRead: false,
		},
		{
			id: 3,
			message: "Your profile was updated successfully.",
			isRead: false,
		},
		{ id: 4, message: "New user registered.", isRead: false },
		{
			id: 5,
			message: "Server maintenance scheduled at midnight.",
			isRead: false,
		},
		{
			id: 6,
			message: "Your profile was updated successfully.",
			isRead: false,
		},
		{ id: 7, message: "New user registered.", isRead: false },
		{
			id: 8,
			message: "Server maintenance scheduled at midnight.",
			isRead: false,
		},
		{
			id: 9,
			message: "Your profile was updated successfully.",
			isRead: false,
		},
	]);

	const unreadNotifications = notifications.filter(
		(notification) => !notification.isRead
	);

	const handleNotificationClick = (id: number) => {
		setNotifications((prevNotifications) =>
			prevNotifications.map((notification) =>
				notification.id === id
					? { ...notification, isRead: true }
					: notification
			)
		);
	};

	const router = useRouter();
	const handleLogout = () => {
		logout(router, endpoints.auth.login);
		// try {
		// 	await logout(); // Automatically redirects to `/login`
		// } catch (error) {
		// 	console.error("Logout failed:", error);
		// }
	};

	return (
		<header className="flex h-16 items-center gap-4 border-b bg-background px-6">
			<Button
				variant="ghost"
				size="icon"
				className=""
				onClick={onToggleSidebar}
			>
				<Menu className="h-5 w-5" />
			</Button>
			<div className="flex flex-1 items-center justify-end gap-4">
				{/* Notification Popover */}
				<Popover>
					<PopoverTrigger asChild>
						<Button variant="ghost" size="icon">
							<div className="relative">
								<Bell className="h-5 w-5" />
								{unreadNotifications.length > 0 && (
									<span className="absolute top-0 left-2 flex h-2 w-2">
										<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
										<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
									</span>
								)}
							</div>
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-64 !p-0 !mr-4">
						<h4 className="text-sm font-medium border-b py-2 px-4">
							Notifications
						</h4>
						<ScrollArea className="flex-1 h-60">
							{notifications.length > 0 ? (
								<ul>
									{notifications.map((notification) => (
										<div
											key={notification.id}
											className={`px-3 py-2 text-xs font-medium border-b cursor-pointer ${
												notification.isRead
													? "bg-white text-slate-600 "
													: "bg-indigo-200 text-sky-500 border-white flex justify-between gap-x-4"
											}`}
										>
											<li
												key={notification.id}
												className=""
												onClick={() =>
													handleNotificationClick(
														notification.id
													)
												}
											>
												{notification.message}
											</li>
											{!notification.isRead && (
												<span className="relative flex h-2 w-2">
													<span className=" absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
													<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
												</span>
											)}
										</div>
									))}
								</ul>
							) : (
								<p className="text-sm text-muted-foreground px-4 py-2">
									No new notifications.
								</p>
							)}
						</ScrollArea>
					</PopoverContent>
				</Popover>

				{/* User Menu */}
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="ghost"
							className="relative h-8 w-8 rounded-full"
						>
							<Avatar className="h-8 w-8">
								<AvatarImage
									src="/avatars/admin.png"
									alt="Admin"
								/>
								<AvatarFallback>AD</AvatarFallback>
							</Avatar>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-56"
						align="end"
						forceMount
					>
						<DropdownMenuLabel className="font-normal">
							<div className="flex flex-col space-y-1">
								<p className="text-sm font-medium">
									Admin User
								</p>
								<p className="text-xs text-muted-foreground">
									admin@careerhub.com
								</p>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Settings className="mr-2 h-4 w-4" />
							<span>Settings</span>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<div
								onClick={handleLogout}
								className="cursor-pointer"
							>
								<LogOut className="mr-2 h-4 w-4" />
								<span>Log out</span>
							</div>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	);
}
