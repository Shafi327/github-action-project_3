import { MainNav } from "@/components/layout/navbar/MainNav";
import React, { ReactNode } from "react";


const links = [
	{ href: "/industry", label: "Dashboard" },
	{ href: "/industry/jobs", label: "Job Postings" },
	// { href: "/industry/candidates", label: "Candidates" },
	{ href: "/industry/applications", label: "Applications" },
	{ href: "/industry/analytics", label: "Analytics" },
];

const Layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div>
			{" "}
			<MainNav links={links} />
			<div className="mx-auto max-w-7xl">{children}</div>
		</div>
	);
};

export default Layout;
