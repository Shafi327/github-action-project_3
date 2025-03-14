import { MainNav } from "@/components/layout/navbar/MainNav";
import React, { ReactNode } from "react";

const links = [
	{ href: "/student", label: "Dashboard" },
	{ href: "/student/profile", label: "Profile" },
	{ href: "/student/jobs", label: "Jobs" },
	{ href: "/student/applications", label: "Applications" },
	{ href: "/student/resources", label: "Resources" },
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
			{children}
		</div>
	);
};

export default Layout;
