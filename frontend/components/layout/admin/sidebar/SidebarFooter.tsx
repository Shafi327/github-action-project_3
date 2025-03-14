"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

interface SidebarFooterProps {
	isCollapsed: boolean;
}

export function SidebarFooter({ isCollapsed }: SidebarFooterProps) {
	return (
		<div className="flex items-center justify-start p-4">
			<Button variant="ghost" className="w-full justify-start" size="sm">
				<LogOut className="mr-2 h-4 w-4" />
				{!isCollapsed && <span>Log out</span>}
			</Button>
		</div>
	);
}
