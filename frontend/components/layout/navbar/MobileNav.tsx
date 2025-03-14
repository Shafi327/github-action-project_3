"use client";

import { Menu } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavigationLinks } from "./NavigationLinks";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export const MobileNav = ({ links }: any) => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" className="md:hidden">
					<Menu className="h-5 w-5" />
					<span className="sr-only">Toggle menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="w-[300px] sm:w-[400px]">
				<VisuallyHidden>
					<SheetTitle>Navigation Menu</SheetTitle>
				</VisuallyHidden>
				<nav className="flex flex-col gap-4">
					<NavigationLinks
						links={links}
						className="flex flex-col space-y-3"
					/>
				</nav>
			</SheetContent>
		</Sheet>
	);
};
