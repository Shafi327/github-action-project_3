"use client";

import { Header } from "@/components/layout/admin/Header";
import { Sidebar } from "@/components/layout/admin/sidebar/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isCollapsed, setIsCollapsed] = useState(false);

	return (
		<div className="flex max-h-[42rem]">
			<Sidebar isCollapsed={isCollapsed} />
			<div className="flex flex-1 flex-col">
				<Header onToggleSidebar={() => setIsCollapsed(!isCollapsed)} />
				<ScrollArea className="flex-1 bg-muted/10 p-5 max-h-[44rem]">
					{/* <main className="flex-1 bg-muted/10 p-6 max-h-[44rem]"> */}
					{children}
					{/* </main> */}
				</ScrollArea>
			</div>
		</div>
	);
}
