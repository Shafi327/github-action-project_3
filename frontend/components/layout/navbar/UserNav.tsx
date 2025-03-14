import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUser } from "@/hooks";
import { endpoints } from "@/lib/api/endpoints";
import { clearSessionCookie } from "@/lib/auth";
import { getUser } from "@/lib/getToken";
import { getUserCredentials, logout } from "@/utils";
import { LogOut, Settings, User } from "lucide-react";
import { useRouter } from "next/navigation";

export const UserNav = () => {
	const router = useRouter();
	const handleLogout = async () => {
		logout(router, endpoints.auth.login);
	};
	const user = useUser();
	console.log("user", user);
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					className="relative h-8 w-8 rounded-full"
				>
					<Avatar className="h-8 w-8">
						<AvatarImage src="/avatars/01.png" alt="Student" />
						<AvatarFallback>ST</AvatarFallback>
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="end" forceMount>
				<DropdownMenuLabel className="font-normal">
					<div className="flex flex-col space-y-1">
						<p className="text-sm font-medium leading-none">
							{user?.name ?? "NA"}
						</p>
						<p className="text-xs leading-none text-muted-foreground">
							{user?.email ?? "NA"}
						</p>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<User className="mr-2 h-4 w-4" />
						<span>Profile</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Settings className="mr-2 h-4 w-4" />
						<span>Settings</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					onClick={async () => {
						await clearSessionCookie();
						router.push("/auth/login");
					}}
					className="cursor-pointer"
				>
					<LogOut className="mr-2 h-4 w-4" />
					<span>Log out</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
