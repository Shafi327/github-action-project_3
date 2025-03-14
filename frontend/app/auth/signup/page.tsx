import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { Factory, User } from "lucide-react";

const Page = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-10 min-h-screen bg-gray-50">
			<div className="flex flex-col gap-y-3">
				<h3 className="text-3xl font-bold text-center">
					Welcome to Career Hub{" "}
				</h3>
				<h4 className="text-2xl font-bold text-center">
					Choose Your Portal Type
				</h4>
			</div>
			<div className="flex justify-center items-center gap-10">
				<Link href={"/auth/signup/student"} className="group min-w-56">
					<Card className="p-8 flex flex-col items-center justify-center group-hover:bg-indigo-400 group-hover:text-white transition-all duration-300">
						<User size={60} />
						<p className="font-semibold text-lg mt-4">Student</p>
					</Card>
				</Link>
				<Link href={"/auth/signup/industry"} className="group min-w-56">
					<Card className="p-8 flex flex-col items-center justify-center group-hover:bg-indigo-400 group-hover:text-white transition-all duration-300">
						<Factory size={60} />
						<p className="font-semibold text-lg mt-4">Industry</p>
					</Card>
				</Link>
			</div>
		</div>
	);
};

export default Page;
