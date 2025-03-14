"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavigationLinksProps {
	className?: string;
	links: any;
}

export const NavigationLinks = ({ className, links }: NavigationLinksProps) => {
	const pathname = usePathname();

	return (
		<div className={className}>
			{links?.map((link: any) => (
				<Button
					key={link.href}
					variant={pathname === link.href ? "secondary" : "ghost"}
					className="w-full justify-start"
					asChild
				>
					<Link href={link.href}>{link.label}</Link>
				</Button>
			))}
		</div>
	);
};
