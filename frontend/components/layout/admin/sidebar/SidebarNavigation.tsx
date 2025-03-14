"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	LayoutDashboard,
	Users,
	Building2,
	FileText,
	BarChart3,
	Settings,
	Bell,
	Mail,
} from "lucide-react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

interface SidebarNavigationProps {
	isCollapsed: boolean;
}

const navigation = [
	{
		title: "Overview",
		label: "Dashboard",
		icon: LayoutDashboard,
		href: "/admin",
	},
	{
		title: "User Management",
		items: [
			{
				label: "Students",
				icon: Users,
				href: "/admin/students",
			},
			{
				label: "Companies",
				icon: Building2,
				href: "/admin/companies",
			},
		],
	},
	{
		title: "Content",
		items: [
			{
				label: "Job Listings",
				icon: FileText,
				href: "/admin/jobs",
			},
			{
				label: "Applications",
				icon: FileText,
				href: "/admin/applications",
			},
		],
	},
	{
		title: "System",
		items: [
			{
				label: "Analytics",
				icon: BarChart3,
				href: "/admin/analytics",
			},
			{
				label: "Notifications",
				icon: Bell,
				href: "/admin/notifications",
			},
			{
				label: "Messages",
				icon: Mail,
				href: "/admin/messages",
			},
			{
				label: "Settings",
				icon: Settings,
				href: "/admin/settings",
			},
		],
	},
];

export function SidebarNavigation({ isCollapsed }: SidebarNavigationProps) {
	const pathname = usePathname();

	return (
		<TooltipProvider>
			<div className="flex flex-col gap-4 py-2">
				{navigation.map((group, index) => (
					<div key={index} className="px-3">
						{!isCollapsed && group.title && (
							<h4 className="mb-2 px-2 text-xs font-semibold uppercase text-muted-foreground">
								{group.title}
							</h4>
						)}
						{group.items ? (
							<div className="space-y-1">
								{group.items.map((item, itemIndex) => {
									const Icon = item.icon;
									return isCollapsed ? (
										<Tooltip
											key={itemIndex}
											delayDuration={0}
										>
											<TooltipTrigger asChild>
												<Button
													variant={
														pathname === item.href
															? "secondary"
															: "ghost"
													}
													className="h-9 w-9 p-0"
													asChild
												>
													<Link href={item.href}>
														<Icon className="h-4 w-4" />
														<span className="sr-only">
															{item.label}
														</span>
													</Link>
												</Button>
											</TooltipTrigger>
											<TooltipContent
												side="right"
												className="flex items-center gap-4"
											>
												{item.label}
											</TooltipContent>
										</Tooltip>
									) : (
										<Button
											key={itemIndex}
											variant={
												pathname === item.href
													? "secondary"
													: "ghost"
											}
											className="w-full justify-start"
											asChild
										>
											<Link href={item.href}>
												<Icon className="mr-2 h-4 w-4" />
												{item.label}
											</Link>
										</Button>
									);
								})}
							</div>
						) : group.href ? (
							isCollapsed ? (
								<Tooltip key={index} delayDuration={0}>
									<TooltipTrigger asChild>
										<Button
											variant={
												pathname === group.href
													? "secondary"
													: "ghost"
											}
											className="h-9 w-9 p-0"
											asChild
										>
											<Link href={group.href}>
												<group.icon className="h-4 w-4" />
												<span className="sr-only">
													{group.label}
												</span>
											</Link>
										</Button>
									</TooltipTrigger>
									<TooltipContent
										side="right"
										className="flex items-center gap-4"
									>
										{group.label}
									</TooltipContent>
								</Tooltip>
							) : (
								<Button
									key={index}
									variant={
										pathname === group.href
											? "secondary"
											: "ghost"
									}
									className="w-full justify-start"
									asChild
								>
									<Link href={group.href}>
										<group.icon className="mr-2 h-4 w-4" />
										{group.label}
									</Link>
								</Button>
							)
						) : null}
					</div>
				))}
			</div>
		</TooltipProvider>
	);
}
