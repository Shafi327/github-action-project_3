"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Users, Building2 } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
	return (
		<div className="relative overflow-hidden bg-background pt-[4.5rem]">
			<div className="container relative flex flex-col items-center justify-center gap-4 text-center md:pt-16 lg:pt-20">
				<div className="space-y-4">
					<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
						Your Gateway to Professional Success
					</h1>
					<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
						Connect with top employers, discover opportunities, and
						launch your career journey with Career Hub.
					</p>
				</div>
				<div className="flex flex-col gap-2 min-[400px]:flex-row">
					<Button size="lg" asChild>
						<Link href="/student/jobs">
							Browse Jobs <ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
					<Button size="lg" variant="outline" asChild>
						<Link href="/student/profile">Complete Profile</Link>
					</Button>
				</div>
				<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-12">
					<div className="flex items-center justify-center gap-2 rounded-lg border bg-card p-4">
						<Briefcase className="h-6 w-6 text-primary" />
						<p className="text-sm font-medium">
							1000+ Job Listings
						</p>
					</div>
					<div className="flex items-center justify-center gap-2 rounded-lg border bg-card p-4">
						<Building2 className="h-6 w-6 text-primary" />
						<p className="text-sm font-medium">500+ Companies</p>
					</div>
					<div className="flex items-center justify-center gap-2 rounded-lg border bg-card p-4">
						<Users className="h-6 w-6 text-primary" />
						<p className="text-sm font-medium">10k+ Students</p>
					</div>
				</div>
			</div>
		</div>
	);
}
