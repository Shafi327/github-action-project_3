"use client";

import { StudentActions } from "@/components/admin/students/StudentActions";
import { StudentHistory } from "@/components/admin/students/StudentHistory";
import { StudentProfile } from "@/components/admin/students/StudentProfile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function StudentDetailsPage() {
	return (
		<div className="container py-8">
			<StudentProfile />
			<div className="mt-8">
				<Tabs defaultValue="history">
					<TabsList>
						<TabsTrigger value="history">
							Application History
						</TabsTrigger>
						<TabsTrigger value="notes">Admin Notes</TabsTrigger>
						<TabsTrigger value="documents">Documents</TabsTrigger>
					</TabsList>
					<TabsContent value="history" className="mt-6">
						<StudentHistory />
					</TabsContent>
					<TabsContent value="notes" className="mt-6">
						<StudentActions />
					</TabsContent>
					<TabsContent value="documents" className="mt-6">
						<StudentActions type="documents" />
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
