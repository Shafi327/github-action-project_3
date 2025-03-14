"use client";

import { ApplicationDetails } from "@/components/industry/applications/ApplicationDetails";
import { ApplicationEvaluation } from "@/components/industry/applications/ApplicationEvaluation";
import { ApplicationTimeline } from "@/components/industry/applications/ApplicationTimeLine";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ApplicationDetailsPage() {
	return (
		<div className="container py-8">
			<ApplicationDetails />
			<div className="mt-8">
				<Tabs defaultValue="timeline">
					<TabsList>
						<TabsTrigger value="timeline">Timeline</TabsTrigger>
						<TabsTrigger value="evaluation">Evaluation</TabsTrigger>
						<TabsTrigger value="communication">
							Communication
						</TabsTrigger>
					</TabsList>
					<TabsContent value="timeline" className="mt-6">
						<ApplicationTimeline />
					</TabsContent>
					<TabsContent value="evaluation" className="mt-6">
						<ApplicationEvaluation />
					</TabsContent>
					<TabsContent value="communication" className="mt-6">
						<ApplicationEvaluation type="communication" />
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
