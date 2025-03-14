"use client";

import {
	BookOpen,
	Building2,
	FileText,
	MessageSquare,
	Search,
	Users,
} from "lucide-react";

const features = [
	{
		icon: FileText,
		title: "CV Builder",
		description:
			"Create professional CVs with our easy-to-use builder tool.",
	},
	{
		icon: Building2,
		title: "Company Directory",
		description:
			"Browse through verified companies and their opportunities.",
	},
	{
		icon: Search,
		title: "Smart Job Matching",
		description:
			"Get personalized job recommendations based on your profile.",
	},
	{
		icon: MessageSquare,
		title: "Direct Messaging",
		description: "Connect directly with recruiters and hiring managers.",
	},
	{
		icon: BookOpen,
		title: "Resource Library",
		description:
			"Access career guides, interview tips, and industry insights.",
	},
	{
		icon: Users,
		title: "Networking Events",
		description: "Join virtual career fairs and networking sessions.",
	},
];

export function FeaturesSection() {
	return (
		<section className="container py-12 md:py-16 lg:py-20">
			<div className="flex flex-col gap-8">
				<div className="space-y-2 text-center">
					<h2 className="text-2xl font-bold tracking-tight md:text-3xl">
						Everything You Need to Succeed
					</h2>
					<p className="mx-auto max-w-[700px] text-muted-foreground">
						Comprehensive tools and resources to help you navigate
						your career journey
					</p>
				</div>
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{features.map((feature, index) => {
						const Icon = feature.icon;
						return (
							<div
								key={index}
								className="flex flex-col gap-2 rounded-lg border bg-card p-4"
							>
								<Icon className="h-6 w-6 text-primary" />
								<h3 className="font-semibold">
									{feature.title}
								</h3>
								<p className="text-sm text-muted-foreground">
									{feature.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
