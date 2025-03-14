"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
	return (
		<section className="border-t bg-muted/40">
			<div className="container py-12 md:py-16 lg:py-20 md:mx-auto md:max-w-7xl md:px-0 px-4">
				<div className="flex flex-col items-center gap-4 text-center">
					<h2 className="text-2xl font-bold tracking-tight md:text-3xl">
						Ready to Start Your Career Journey?
					</h2>
					<p className="mx-auto max-w-[600px] text-muted-foreground">
						Join thousands of students who have found their dream
						careers through Career Hub
					</p>
					<Button size="lg" asChild>
						<Link href="/auth/signup?step=personal-info">
							Get Started <ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
