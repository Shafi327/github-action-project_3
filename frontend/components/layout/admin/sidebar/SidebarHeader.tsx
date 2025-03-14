"use client";

import { Building2 } from "lucide-react";
import Link from "next/link";

interface SidebarHeaderProps {
	isCollapsed: boolean;
}

export function SidebarHeader({ isCollapsed }: SidebarHeaderProps) {
	return (
		<div className="flex h-16 items-center border-b px-6">
			<Link href="/admin" className="flex items-center gap-2">
				<Building2 className="h-6 w-6" />
				{!isCollapsed && (
					<span className="font-bold">Career Hub Admin</span>
				)}
			</Link>
		</div>
	);
}
