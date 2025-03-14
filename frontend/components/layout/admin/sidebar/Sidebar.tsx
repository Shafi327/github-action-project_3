"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarNavigation } from "./SidebarNavigation";
import { SidebarFooter } from "./SidebarFooter";


interface SidebarProps {
	className?: string;
	isCollapsed: boolean;
}

export function Sidebar({ className, isCollapsed }: SidebarProps) {
	return (
		<div
			className={cn(
				"flex flex-col border-r bg-background h-[43rem] overflow-y-auto",
				isCollapsed ? "w-[80px]" : "w-[270px]",
				className
			)}
		>
			<SidebarHeader isCollapsed={isCollapsed} />
			<ScrollArea className="flex-1 pt-4">
				<SidebarNavigation isCollapsed={isCollapsed} />
			</ScrollArea>
			<SidebarFooter isCollapsed={isCollapsed} />
		</div>
	);
}
