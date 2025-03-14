import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SignupProvider } from "@/context/SignupContext";
import { QueryProvider } from "@/providers/query-provider";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Career Hub",
	description: "FYP Career Hub",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<QueryProvider>
					<SignupProvider>{children}</SignupProvider>
				</QueryProvider>
				<Toaster />
			</body>
		</html>
	);
}
