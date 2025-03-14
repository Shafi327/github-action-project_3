
"use client";

import { StudentsFilters } from "@/components/admin/students/StudentsFilters";
import { StudentsHeader } from "@/components/admin/students/StudentsHeader";
import { StudentsTable } from "@/components/admin/students/StudentsTable";


export default function StudentsPage() {
	return (
		<div className="flex min-h-screen flex-col gap-8 pb-8 pt-6">
			<StudentsHeader />
			<div className="container grid gap-8 lg:grid-cols-4">
				<StudentsFilters className="hidden lg:block" />
				<div className="lg:col-span-3">
					<StudentsTable />
				</div>
			</div>
		</div>
	);
}
