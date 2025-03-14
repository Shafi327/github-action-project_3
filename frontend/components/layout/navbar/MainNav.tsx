"use client";

import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { MobileNav } from "./MobileNav";
import { NavigationLinks } from "./NavigationLinks";
import { UserNav } from "./UserNav";

export const MainNav = ({ links }: any) => {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container max-w-7xl mx-auto flex h-14 items-center px-6">
				<MobileNav links={links} />
				<div className="mr-4 hidden md:flex">
					<Link href="/" className="mr-6 flex items-center space-x-2">
						<GraduationCap className="h-6 w-6" />
						<span className="hidden font-bold sm:inline-block">
							Career Hub
						</span>
					</Link>
					<nav className="flex items-center space-x-6 text-sm font-medium">
						<NavigationLinks
							links={links}
							className="flex items-center space-x-6"
						/>
					</nav>
				</div>
				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<div className="w-full flex-1 md:w-auto md:flex-none"></div>
					<UserNav />
				</div>
			</div>
		</header>
	);
};
